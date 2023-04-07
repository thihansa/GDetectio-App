import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import { homeStyle } from './home.style';
import Icon from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export const Home = () => {
    return (
      <View style={homeStyle.content}>
        {/* <Image style={homeStyle.logo} source={require('/App/assets/logo.png')}/> */}
        <Image style={homeStyle.user} source={require('/App/assets/man.png')}/>
        
        <Text style={homeStyle.title}>Welcome to GDetectio !</Text>
        {/* <LinearGradient colors={['#98D9C2','#79d2a0', '#ABC8C0' ]} start={{x: 0, y: 0.5}} end={{x: 1, y: 1}} */}
        <LinearGradient colors={['#000000','#535657','#68A691']} start={{x: 0, y: 0.5}} end={{x: 1, y: 1}}
                        style={homeStyle.LinearGradientStyle}>
          <View style={homeStyle.ChildViewStyle}></View>
        </LinearGradient>
        
      </View>
    );
}
