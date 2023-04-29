import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import { firstPageStyles } from './firstPage.style';


export const FirstPage = () => {
  console.log("App executed")
  return (
    <View style={firstPageStyles.container}>
      <Image style={firstPageStyles.background1} source={require("E:/FINAL Prototype/App/assets/1st.jpg")}/>
      <Image style={firstPageStyles.logo} source={require("E:/FINAL Prototype/App/assets/green.gif")}/>
      <Image style={firstPageStyles.background2} source={require("E:/FINAL Prototype/App/assets/2nd.jpg")}/>
      <Text>Starting...</Text>
      <StatusBar style="auto" />
    </View>
  );
}
