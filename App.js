import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import { Login } from './Pages/Login/login';
import { RegisterScreen } from './Pages/Register/register';
import {FirstPage} from './Pages/FirstPage/firstPage';
import  { AppNavigator } from './app.navigator';
import { Home } from './Pages/Home/home';
import { Slider } from './Pages/Slider/slider';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './navigation/tabs';





export default function App() {
  console.log("App executed")
  const Stack = createStackNavigator();
  return (
    <PaperProvider>
      {/* <FirstPage/> */}
      {/* <Login/> */}
      {/* <RegisterScreen/> */}
      {/* <Home/> */}
      {/* <AppNavigator/> */}
      {/* <Slider/> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
          }}>
          <Stack.Screen name="First" component={FirstPage} />
          <Stack.Screen name="Home" component={Tabs} />
          {/* <FirstPage/>
          <Tabs/> */}
        </Stack.Navigator>
      </NavigationContainer>
      
    </PaperProvider>
  );
}
