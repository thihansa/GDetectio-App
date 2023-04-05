import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Home} from '../Pages/Home/home';
import { InputPage } from '../Pages/InputPage/inputPage';
import { tabsStyle } from './tabs.style';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
      <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle:{
          position:'absolute',
          bottom:25,
          left:20,
          right:20,
          elevation:0,
          backgroundColor:'#000000',
          borderRadius:15,
          height:80,
          ...tabsStyle.shadow
        }
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon : ({focused}) => (
            <View style={{alignItems:'center',justifyContent:'center', top:4}}>
              <Image source={require('../assets/home-page.png')}
                    resizeMode='contain'
                    style={{
                      width:25,
                      height:25,
                      tintColor: focused ? '#a7f1a7' : '#748c94'

                    }}/>
              <Text style={{color:  focused ? '#a7f1a7' : '#748c94', fontSize: 12}}>Home</Text>
            </View>
          )
        }}/>
        {/* <Tab.Screen name="Input" component={InputPage} /> */}
        <Tab.Screen name="Input" component={InputPage} options={{
          tabBarIcon : ({focused}) => (
            <View style={{alignItems:'center',justifyContent:'center', top:4}}>
              <Image source={require('../assets/input.png')}
                    resizeMode='contain'
                    style={{
                      width:25,
                      height:25,
                      tintColor: focused ? '#a7f1a7' : '#748c94'

                    }}/>
              <Text style={{color:  focused ? '#a7f1a7' : '#748c94', fontSize: 12}}>Input</Text>
            </View>
          )
        }}/>
      </Tab.Navigator>
    );
}


export default Tabs;