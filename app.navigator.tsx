import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './Pages/Login/login';
import { RegisterScreen } from './Pages/Register/register';
import { Slider } from './Pages/Slider/slider';

const {Navigator, Screen} = createStackNavigator();

export const AppNavigator = () => (
    <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}}  initialRouteName="Login" >
            <Screen name = "Login" component={Login}></Screen>
            <Screen name = "Register" component={RegisterScreen}></Screen>
            <Screen name = "Slider" component={Slider}></Screen>
        </Navigator>
    </NavigationContainer>
)
