import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform , Text, ScrollView, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
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
      <View style={{  marginTop:-1350 }}>
      <Text style={inputStyle.title}>Get Detected With GDetectio</Text>
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
      {image && <Image source={{ uri: image }} style={{ width: 150, height: 150,borderRadius: 20 , marginLeft:10}} />}
      
      {response !== '' && 
      <View style={{ marginTop:15, marginLeft:10, marginBottom:310, backgroundColor:'#b3e6c9', borderRadius:20, marginRight:10}}>
        <Text style={{marginLeft:10, marginBottom:5, marginTop:5, marginRight:5, fontSize:15}}>
        {response}</Text>
      </View>}
        
    </View>
    </ScrollView>
  );
}
