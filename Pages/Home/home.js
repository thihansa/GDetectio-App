import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity,Button,ImageBackground,ScrollView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import { homeStyle } from './home.style';
import Icon from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = () => {
  // initial state
  const [modalState, setModalState] = useState({isVisible: false});

  // hide show modal
  const displayModal = (show) => {
    setModalState({isVisible: show})
  }

  const [newModalState, setNewModalState] = useState({isVisible: false});

  // hide show modal
  const newDisplayModal = (show) => {
    setNewModalState({isVisible: show})
  }
    return (
      <SafeAreaView>
        <Image style={homeStyle.logo} source={require('../assets/logo.png')}/>
        <ImageBackground style={homeStyle.image}  source={require("../assets/k62.jpg")}/>
        
      <View >
        
        
        {/* <Image style={homeStyle.user} source={require("E:/FINAL Prototype/App/assets/man.png")}/> */}
        <Text style={homeStyle.title}>Welcome to GDetectio !</Text>
        <Text style={homeStyle.text}>Diseases identified in our app</Text>

        <Modal style={homeStyle.modal}
            animationType = {"slide"} transparent={false} visible={modalState.isVisible}
            onRequestClose={() => {
              // Alert.alert('Modal has now been closed.');
            }}>
            <ScrollView> 
            <View style={{ backgroundColor: '#ffffff' }}>
              <Image style = {homeStyle.anth} source={require('../assets/anth.jpg')}/>
              <Text style={{fontSize:30, marginLeft:100, marginTop:10}}>Anthracnose</Text>
              <Text style = {homeStyle.anthText}>
                The disease mostly affects the tender parts of the tree such as young leaves, flowers, and fruits. 
                The plant begins to die backwards from the top of a branch while leaves and fruits get affected. 
                The infection is generally seen in the rainy season. Brown to dark brown colored lesions is formed.
                Infection spreads by wind borne spores develop on dead leaves, twigs and mummified fruits in the orchard.
                Temperature between 10 to 35oC with best 24 to 28oC.
              </Text>
              <Text style={{fontSize:20, fontWeight:'bold', marginLeft:10,marginTop:20}}>
                Solutions 
              </Text>
              <Text style={{fontSize:18,marginLeft:20,marginTop:10, marginRight:10}}>
                * Apply fungicide (Daconil 3:1) twice a week
              </Text>
              <Text style={{fontSize:18,marginLeft:20,marginTop:10, marginRight:10}}>
                * Apply cinnamon oil (5:1/oil(ml)): 1litre of water
              </Text>
              <Text style={{fontSize:18,marginLeft:20,marginTop:10, marginRight:10}}>
                * Application time after 4 pm
              </Text>
              <View style={homeStyle.close}>
                <TouchableOpacity style = {{backgroundColor: '#1e7b1e', borderRadius: 5, marginRight:5}} onPress={() => {displayModal(!modalState.isVisible);}}>
                  <Text style={{color: '#fff', fontSize: 14, padding: 10, marginLeft:45}}>Okay</Text>
                </TouchableOpacity>
              </View>
            </View>
            </ScrollView>         
        </Modal>

        <TouchableOpacity style={homeStyle.touch1} onPress={() => {displayModal(true);}}>
          <LinearGradient colors={['#98D9C2','#79d2a0', '#ABC8C0' ]} start={{x: 0, y: 0.5}} end={{x: 1, y: 1}} style={homeStyle.LinearGradientStyle}>
          
                        
            <View style={homeStyle.ChildViewStyle}></View>
            <Text style={homeStyle.disease}>Anthracnose</Text>
            <Image style = {{width:70, height:70, borderRadius: 20, marginLeft:250,marginTop:-60}} source={require('../assets/anth.jpg')}/>
            {/* <Image style = {{width:70, height:70, borderRadius: 20,alignContent:'center',justifyContent:'center'}} source={require('../assets/anth.jpg')}/> */}
          </LinearGradient>
        </TouchableOpacity> 


        <Modal
            animationType = {"slide"} transparent={false} visible={newModalState.isVisible}
            onRequestClose={() => {
              // Alert.alert('Modal has now been closed.');
            }}>
            <ScrollView>
            <Image style = {homeStyle.anth} source={require('../assets/sty.jpg')}/>
            <Text style={{fontSize:30, marginLeft:90, marginTop:10}}>Styler End Rot</Text>
              <Text style = {homeStyle.anthText}>
              The visible disease symptom is the discoloration in the region lying just below and adjoining the persistent calyx.
              Such area gradually increases in size and turn dark brown. Later the affected area becomes soft.Pathogen spread through wind.
              Temperature 10 to 35 oC (25 oC optimum ) is favourable for disease development.
              </Text>
              <Text style={{fontSize:20, fontWeight:'bold', marginLeft:10,marginTop:20}}>
                Solutions 
              </Text>
              <Text style={{fontSize:18,marginLeft:20,marginTop:10, marginRight:10}}>
                * Apply fungicide (Daconil 3:1) twice a week
              </Text>
              <Text style={{fontSize:18,marginLeft:20,marginTop:10, marginRight:10}}>
                * Apply cinnamon oil (5:1/oil(ml)): 1litre of water
              </Text>
              <Text style={{fontSize:18,marginLeft:20,marginTop:10, marginRight:10}}>
                * Application time after 4 pm
              </Text>
              <View style={homeStyle.close2}>
                <TouchableOpacity style = {{backgroundColor: '#1e7b1e', borderRadius: 5, marginRight:5}} onPress={() => {newDisplayModal(!newModalState.isVisible);}}>
                  <Text style={{color: '#fff', fontSize: 14, padding: 10, marginLeft:45}}>Okay</Text>
                </TouchableOpacity>
              </View>
              </ScrollView>      
        </Modal> 

        <TouchableOpacity onPress={() => {newDisplayModal(true);}}>
          <LinearGradient colors={['#98D9C2','#79d2a0', '#ABC8C0' ]} start={{x: 0, y: 0.5}} end={{x: 1, y: 1}} style={homeStyle.LinearGradientStyle2}>
          {/* <LinearGradient colors={['#000000','#535657','#68A691']} start={{x: 0, y: 0.5}} end={{x: 1, y: 1}} */}
                        
            <View style={homeStyle.ChildViewStyle}></View>
            <Text style={homeStyle.disease}>Styler End Rot</Text>
            <Image style = {{width:70, height:70, borderRadius: 20, marginLeft:250,marginTop:-60}} source={require('../assets/sty.jpg')}/>
          </LinearGradient>
        </TouchableOpacity>
        
      </View>
      </SafeAreaView>
    );

}
