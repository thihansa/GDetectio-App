import React from 'react';
import { SafeAreaView, View , Image, StyleProp, ViewStyle, Text, ImageBackground} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import { loginStyle } from './login.style';
import { LinearGradient } from 'expo-linear-gradient';


interface LoginProps {
    navigation:any;
}

export const Login = (props:LoginProps) => {

    const slider = () => props.navigation.navigate("Slider")
    const register = () => props.navigation.navigate("Register")

    return (
        <SafeAreaView style={loginStyle.content}>
            <View >
                <ImageBackground style={loginStyle.image} source={require('/App/assets/baf.jpg')}/>
                <View style={loginStyle.bottomView}>
                    <View style={{padding: 25}}>
                        <Text style={loginStyle.title}>Welcome</Text>
                        <Text style={{marginTop: 10, marginLeft: 5, fontSize: 15}}>Don't have an account?  </Text>
                        <Button onPress={register} textColor="#000000" style={{marginLeft: 70, marginTop: -29}}> Register</Button>
                        <LinearGradient colors={['#e9fce9', '#bdf5bd', '#79d2a0']} start={{x: 0, y: 0.5}} end={{x: 1, y: 1}}
                        style={loginStyle.LinearGradientStyle}>
                        <View style={loginStyle.ChildViewStyle}>
                        <TextInput placeholder="Email"  keyboardType="email-address" style={loginStyle.label1}/>
                        </View>
                        </LinearGradient>

                        <LinearGradient colors={['#e9fce9', '#bdf5bd', '#79d2a0']} start={{x: 0, y: 0.5}} end={{x: 1, y: 1}}
                        style={loginStyle.LinearGradientStyle}>
                        <View style={loginStyle.ChildViewStyle}>
                        <TextInput  placeholder="Password"  secureTextEntry={true} style={loginStyle.label1}/>
                        </View>
                        </LinearGradient>

                        <Button onPress={slider} mode="contained" style={loginStyle.Button1}>Login</Button>
                        <Button textColor="#000000" uppercase={false} style={loginStyle.Button}>Forgot email/password</Button>
                    </View>
                </View>    
            </View>
        </SafeAreaView>
        
    );
}