import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform , Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import { ImageManipulator } from 'expo';
// import  manipulateAsync from 'expo-image-manipulator';
import * as ImageManipulator from 'expo-image-manipulator';
import { FileSystem } from 'expo';
import { inputStyle } from './inputPage.style';


export const InputPage = () => {
  const [image, setImage] = useState();
  const [response, setResponse] = useState();

  useEffect(() => {
     `You clicked ${response} times`;
  });
  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64:true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      
    });
    
    setResponse(null)
    const pic = await ImageManipulator.manipulateAsync(
      result.assets[0].uri,
      [{resize: {width: 244, height:244}}],

      {compress: 0.5, format: ImageManipulator.SaveFormat.JPEG, base64: true}
    )

    console.log(pic);

    if (!pic.canceled) {
      setImage(pic.uri);
    }

    const formData = new FormData();
    console.log(pic.uri)
    formData.append('file', pic.base64);
    let res = await fetch(
      'http://192.168.8.102:5000/predictBoth', 
      {
        method: 'POST', 
        body: formData,
        headers: {
          // Accept: 'application/json',
          // 'Content-Type': 'multipart/form-data',
        },
        
      }
    ).catch((error) => {
      console.error(error);
    });
    let responseJson = await res.json();
    console.log(responseJson)
    setResponse(responseJson);
    console.log(response)
  };

  const pickImageA = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64:true,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      
    });
    
    setResponse(null)
    const pic = await ImageManipulator.manipulateAsync(
      result.assets[0].uri,
      [{resize: {width: 244, height:244}}],

      {compress: 0.5, format: ImageManipulator.SaveFormat.JPEG, base64: true}
    )

    console.log(pic);

    if (!pic.canceled) {
      setImage(pic.uri);
    }

    const formData = new FormData();
    console.log(pic.uri)
    formData.append('file', pic.base64);
    let res = await fetch(
      'http://192.168.8.102:5000/predictAnth', 
      {
        method: 'POST', 
        body: formData,
        headers: {
          // Accept: 'application/json',
          // 'Content-Type': 'multipart/form-data',
        },
        
      }
    ).catch((error) => {
      console.error(error);
    });
    let responseJson = await res.json();
    console.log(responseJson)
    setResponse(responseJson);
    console.log(response)
  };

  const pickImageS = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64:true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      
    });
    
    setResponse(null)
    const pic = await ImageManipulator.manipulateAsync(
      result.assets[0].uri,
      [{resize: {width: 244, height:244}}],

      {compress: 0.5, format: ImageManipulator.SaveFormat.JPEG, base64: true}
    )

    console.log(pic);

    if (!pic.canceled) {
      setImage(pic.uri);
    }

    const formData = new FormData();
    console.log(pic.uri)
    formData.append('file', pic.base64);
    let res = await fetch(
      'http://192.168.8.102:5000/predictSty', 
      {
        method: 'POST', 
        body: formData,
        headers: {
          // Accept: 'application/json',
          // 'Content-Type': 'multipart/form-data',
        },
        
      }
    ).catch((error) => {
      console.error(error);
    });
    let responseJson = await res.json();
    console.log(responseJson)
    setResponse(responseJson);
    console.log(response)
  };

  return (
    
    <ScrollView>
      {/* <View><ImageBackground style={inputStyle.image}  source={require("../assets/k62.jpg")}/></View> */}
    
    <View style={{  }}>
      <View><ImageBackground style={inputStyle.image}  source={require("../assets/k62.jpg")}/></View>
      <View style={{  marginTop:-800 }}>
      <TouchableOpacity style={inputStyle.button} onPress={pickImage}>
          <Text style={inputStyle.buttonText}>Leaf and Fruit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={inputStyle.button} onPress={pickImageA}>
          <Text style={inputStyle.buttonText}>Leaf Only</Text>
      </TouchableOpacity>
      <TouchableOpacity style={inputStyle.button} onPress={pickImageS}>
          <Text style={inputStyle.buttonText}>Fruit Only</Text>
      </TouchableOpacity>
      </View>
      {/* <Button style={{ marginBottom:10 }} title="Leaf only" onPress={pickImage} /> */}
      {image && <Image source={{ uri: image }} style={{ width: 150, height: 150,borderRadius: 20 }} />}
      {response !== '' && <Text style={{ marginTop:15}} >{response}</Text>}
    </View>
    </ScrollView>
  );
}








// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground,Button ,ScrollView} from 'react-native';
// import {Provider as PaperProvider} from 'react-native-paper';
// import { inputStyle } from './inputPage.style';
// import Icon from 'react-native-vector-icons';
// import * as ImagePicker from 'expo-image-picker';
// // import FormData from 'form-data';

// const staticImage = require("E:/FINAL Prototype/App/assets/logo.png");

// export const InputPage = () => {
//   const [image, setImage] = useState('');
//   const [responseMessage, setResponseMessage] = useState(null);



//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       includeBase64: true,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
//     console.log(result);
//     // if (!result.canceled) {
//       setImage(result);
//       console.log(image);
      
    
//   };

//   const takePhoto = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       includeBase64: true,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   const uploadImage = async () => {
//     const formData = new FormData();
//     formData.append('image', {
//       uri: image,
//       type: 'image/png',
//       name: 'image/png',
//     });

//       fetch('http://127.0.0.1:5000/check', {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'multipart/form-data',
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.error(error));
//     // }else {
//     //   // If no file selected the show alert
//     //   alert('Please Select File first');
//     // }
//   };

//   const removeImage = () => {
//     setImage(null);
//   };

//   return (
//     <ScrollView>
//     <View style={inputStyle.container}>
//       <View>
//       <ImageBackground style={inputStyle.image}  source={require("../assets/k62.jpg")}/>
//       </View>
//       <Image style={inputStyle.girl} source={require('../assets/in2.png')}/>
//       <Text style={inputStyle.title}>Select an image to upload</Text>
//       <TouchableOpacity style={inputStyle.button} onPress={pickImage}>
//         <Text style={inputStyle.buttonText}>Select from Gallery</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={inputStyle.button} onPress={takePhoto}>
//         <Text style={inputStyle.buttonText}>Take a Photo</Text>
//       </TouchableOpacity>
//       {image && (
//         <View>
//           <Image source={{ uri: image }} style={{width:150,height:150, marginBottom:10}} />
//           {/* <Button title="Upload" onPress={uploadImage} /> */}
//           <TouchableOpacity style={inputStyle.button} onPress={uploadImage}>
//             <Text style={inputStyle.buttonText}>Upload</Text>
//           </TouchableOpacity>
//           <Button title="Remove Image" onPress={removeImage} />
//           {/* {response && <Text>{response}</Text>} */}
//         </View>
//       )}
//     </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//     marginTop:-70
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   image: {
//     width: 300,
//     height: 300,
//     marginBottom: 20,
//   },
// });
