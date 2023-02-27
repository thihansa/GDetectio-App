import React from 'react';
import { SafeAreaView, View , Image, StyleProp, ViewStyle, Text} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import { loginStyle } from './login.style';
import { LinearGradient } from 'expo-linear-gradient';

export const Login = () => {

    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.view}>
            <SafeAreaView>
                <Image style={loginStyle.logo} source={require('/App/assets/ill.png')}/>
            </SafeAreaView>
            
            <Text style={loginStyle.cardTitle}>Welcome Back</Text>
                <LinearGradient colors={['#d8ecf3', '#9dd7fb', '#7beadf']} start={{x: 0, y: 0.5}} end={{x: 1, y: 1}}
                style={loginStyle.LinearGradientStyle}>
                <View style={loginStyle.ChildViewStyle}>
                <TextInput placeholder="Email"  keyboardType="email-address" style={loginStyle.label1}/>
                </View>
                </LinearGradient>
                <LinearGradient colors={['#d8ecf3', '#9dd7fb', '#7beadf']} start={{x: 0, y: 0.5}} end={{x: 1, y: 1}}
                style={loginStyle.LinearGradientStyle}>
                <View style={loginStyle.ChildViewStyle}>
                <TextInput  placeholder="Password"  secureTextEntry={true} style={loginStyle.label1}/>
                </View>
                </LinearGradient>

                <Button mode="contained" style={loginStyle.Button1}>Login</Button>
                <Button textColor="#000000" uppercase={false} style={loginStyle.Button}>Forgot email/password</Button>
                <Button textColor="#000000" style={loginStyle.Button}>Register</Button>
            </View>
        </SafeAreaView>
        
    );
}