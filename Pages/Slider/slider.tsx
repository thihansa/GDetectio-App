import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet, View, Text, Image
} from 'react-native';
import {styles} from './slider.style';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Button } from 'react-native-paper';
import { Home } from '../Home/home';
import {Asset} from 'expo-asset';

const imageURI = Asset.fromModule(require('/App/assets/bd.png')).uri;
const imageURI2 = Asset.fromModule(require('/App/assets/inb.png')).uri;
const imageURI3 = Asset.fromModule(require('/App/assets/f.png')).uri;
const imageURI4 = Asset.fromModule(require('/App/assets/re2.png')).uri;

export const Slider = () => {
  
  const [showRealApp, setShowRealApp] = useState(false)
  
  const onDone = () => {
    setShowRealApp(true)
  }

  const onSkip = () => {
    setShowRealApp(true)
  }

  const renderItem = ({item}) => {
    return(
        <View
        style={{
        flex:1,
        backgroundColor: item.backgroundColor,
        alignItems:'center',
        justifyContent:'space-around',
        paddingBottom:100
        }}>
        <Text style={styles.introTitleStyle}>
            {item.title}
        </Text>
        <Image style={styles.introImageStyle}
            source={item.image}/>

        <Text style={styles.introTexStyle}>
            {item.text}
        </Text>
        </View>
    )
  }

  return (
    <>
      {
        showRealApp ? (
            <Home/>
        ) : (
            <AppIntroSlider
                data={slides}
                renderItem={renderItem}
                onDone={onDone}
                onSkip={onSkip}
                showSkipButton={true}
                bottomButton
            />
        )
      }
    </>
  );
};


const slides = [
  {
    key: 's1',
    text: 'Let us join together and make the world a better place',
    title: 'Welcome to GDetectio',
    image: {
      uri:
      imageURI,
        
    },
    backgroundColor: '#e6fee6',
  },
  {
    key: 's2',
    title: 'Insert Image',
    text: 'Insert an image of the diseased leaf or fruit using the insert image tab',
    image: {
      uri:
      imageURI2,
    },
    backgroundColor: '#e6fee6',
  },
  {
    key: 's3',
    title: 'Results',
    text: 'Treat your plant according to the results and the curations provided',
    image: {
      uri:
      imageURI3,
    },
    backgroundColor: '#e6fee6',
  },
  {
    key: 's4',
    title: 'Get started',
    text: ' ',
    image: {
      uri:
      imageURI4,
    },
    backgroundColor: '#e6fee6',
  },
];