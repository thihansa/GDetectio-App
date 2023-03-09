import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import { homeStyle } from './home.style';

export const Home = () => {
    return (
      <View>
        <Image style={homeStyle.logo} source={require('/App/assets/logo.png')}/>
        <Text style={homeStyle.title}>GDetectio</Text>
        <Image style={homeStyle.user} source={require('/App/assets/user.png')}/>
        <View style={homeStyle.bottomView}>
            <View style={{padding: 40}}></View>
        </View>
      </View>
    );
}