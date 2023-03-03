import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import { Login } from './Pages/Login/login';
import { RegisterScreen } from './Pages/Register/register';
import {FirstPage} from './Pages/FirstPage/firstPage'
import  { AppNavigator } from './app.navigator';


export default function App() {
  console.log("App executed")
  return (
    <PaperProvider>
      {/* <Login/> */}
      {/* <RegisterScreen/> */}
      {/* <FirstPage/> */}
      <AppNavigator/>
    </PaperProvider>
  );
}
