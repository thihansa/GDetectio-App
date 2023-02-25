import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import { Login } from './Pages/Login/login';
import { RegisterScreen } from './Pages/Register/register';


export default function App() {
  console.log("App executed")
  return (
    <PaperProvider>
      {/* <Login/> */}
      <RegisterScreen/>
    </PaperProvider>
    
    // <View style={styles.container}>
    //   <Image style={styles.background1} source={require('./assets/1st.jpg')}/>
    //   <Image style={styles.logo} source={require('./assets/green.gif')}/>
    //   <Image style={styles.background2} source={require('./assets/2nd.jpg')}/>
    //   <Text>Starting...</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 220,
    height: 220,
  },
  background1: {
    position: 'absolute',
    top: -1,
    bottom: 0,
    left: 0,
    right: -100,
  },
  background2: {
    position: 'absolute',
    top: 548,
    bottom: -1,
    left: -100,
    right: 0,
  },
});
