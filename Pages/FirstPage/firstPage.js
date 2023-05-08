import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import { firstPageStyles } from './firstPage.style';


export const FirstPage = ({ navigation }) => {
  console.log("App executed")

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to another page after 5 seconds
      navigation.navigate('Home');
    }, 3000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={firstPageStyles.container}>
      <Image style={firstPageStyles.background1} source={require("../assets/1st.jpg")}/>
      <Image style={firstPageStyles.logo} source={require("../assets/green.gif")}/>
      <Image style={firstPageStyles.background2} source={require("../assets/2nd.jpg")}/>
      {/* <Text>Starting...</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}
