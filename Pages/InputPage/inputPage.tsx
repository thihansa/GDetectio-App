import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import { inputStyle } from './inputPage.style';
import Icon from 'react-native-vector-icons';

export const InputPage = () => {
    return (
      <View>
        {/* <ImageBackground style={{ position:"absolute",top:0,left:0, bottom:0,right:0, height:900 }} source={require('/App/assets/baf.jpg')}/> */}
        <Image style={inputStyle.logo} source={require('/App/assets/logo.png')}/>
        {/* <Text style={inputStyle.title}>GDetectio</Text> */}
        <Image style={inputStyle.user} source={require('/App/assets/user.png')}/>
        <View style={[inputStyle.bottomView, inputStyle.elevation]}>
            <View style={{padding: 40}}>
            <Image style={inputStyle.input} source={require('/App/assets/fr.png')}/>
            </View>
        </View>
      </View>
    );
}