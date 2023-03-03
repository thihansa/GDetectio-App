import React from 'react';
import { SafeAreaView, ScrollView, View, ImageBackground, Text } from 'react-native';
import {Appbar, Button, Card, TextInput} from 'react-native-paper';
import { registerStyle } from './register.style';
import { LinearGradient } from 'expo-linear-gradient';

export const RegisterScreen = () => {
    return (
        <SafeAreaView style={registerStyle.safe}>
            <View>
                <ImageBackground style={registerStyle.image} source={require('/App/assets/baf.jpg')}/>
                <View style={registerStyle.bottomView}>
                    <View style={{padding: 30}}>
                        <Text style={registerStyle.title}>Register</Text>
                        <View style={registerStyle.content}>

                            <LinearGradient colors={['#e9fce9', '#bdf5bd', '#79d2a0']} start={{x: 0, y: 0.5}} end={{x: 1, y: 1}}
                            style={registerStyle.LinearGradientStyle}>
                            <View style={registerStyle.ChildViewStyle}>
                            <TextInput placeholder="Name"style={registerStyle.label1}/>
                            </View>
                            </LinearGradient>

                            <LinearGradient colors={['#e9fce9', '#bdf5bd', '#79d2a0']} start={{x: 0, y: 0.5}} end={{x: 1, y: 1}}
                            style={registerStyle.LinearGradientStyle}>
                            <View style={registerStyle.ChildViewStyle}>
                            <TextInput placeholder="Email" keyboardType="email-address" style={registerStyle.label1}/>
                            </View>
                            </LinearGradient>

                            <LinearGradient colors={['#e9fce9', '#bdf5bd', '#79d2a0']} start={{x: 0, y: 0.5}} end={{x: 1, y: 1}}
                            style={registerStyle.LinearGradientStyle}>
                            <View style={registerStyle.ChildViewStyle}>
                            <TextInput placeholder="Password" secureTextEntry={true} right={<TextInput.Icon icon="eye" color={registerStyle.icon.color}/>} style={registerStyle.label1}/>
                            </View>
                            </LinearGradient>

                            <LinearGradient colors={['#e9fce9', '#bdf5bd', '#79d2a0']} start={{x: 0, y: 0.5}} end={{x: 1, y: 1}}
                            style={registerStyle.LinearGradientStyle}>
                            <View style={registerStyle.ChildViewStyle}>
                            <TextInput placeholder="Confirm Password" secureTextEntry={true} right={<TextInput.Icon icon="eye" color={registerStyle.icon.color}/>} style={registerStyle.label1}/>
                            </View>
                            </LinearGradient>

                            <LinearGradient colors={['#e9fce9', '#bdf5bd', '#79d2a0']} start={{x: 0, y: 0.5}} end={{x: 1, y: 1}}
                            style={registerStyle.LinearGradientStyle}>
                            <View style={registerStyle.ChildViewStyle}>
                            <TextInput placeholder="Phone Number" keyboardType="phone-pad" style={registerStyle.label1}/>
                            </View>
                            </LinearGradient>
                            <Button mode="contained" style={registerStyle.button}>Register</Button>
                        </View>
                    </View>
                </View>    
            </View>    
        </SafeAreaView>
    )
}