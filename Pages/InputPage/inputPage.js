import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground,Button } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import { inputStyle } from './inputPage.style';
import Icon from 'react-native-vector-icons';
import * as ImagePicker from 'expo-image-picker';

const staticImage = require("E:/FINAL Prototype/App/assets/logo.png");

export const InputPage = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = () => {
    const formData = new FormData();
    formData.append('file', {
      uri: image,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    fetch('http://yourflaskserver.com/upload', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select an image to upload</Text>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Select from Camera Roll</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={takePhoto}>
        <Text style={styles.buttonText}>Take a Photo</Text>
      </TouchableOpacity>
      {image && (
        <View>
          <Image source={{ uri: image }} style={styles.image} />
          <Button title="Upload" onPress={uploadImage} />
          <Button title="Remove Image" onPress={removeImage} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

//     return (
//       <View>
//         {/* <ImageBackground style={{ position:"absolute",top:0,left:0, bottom:0,right:0, height:900 }} source={require('/App/assets/baf.jpg')}/> */}
//         <Image style={inputStyle.logo} source={require("E:/FINAL Prototype/App/assets/logo.png")}/>
//         {/* <Text style={inputStyle.title}>GDetectio</Text> */}
//         {/* <img src="assets/logo.png" alt="logo" /> */}
//         <Image style={inputStyle.user} source={require("E:/FINAL Prototype/App/assets/user.png")}/>
//         <View style={[inputStyle.bottomView, inputStyle.elevation]}>
//             <View style={{padding: 40}}>
//             <Image style={inputStyle.input} source={require("E:/FINAL Prototype/App/assets/fr.png")}/>
//             </View>
//         </View>
//       </View>
//     );
// }