import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Home} from '../Pages/Home/home';
import { InputPage } from '../Pages/InputPage/inputPage';
import { tabsStyle } from './tabs.style';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from '../Pages/Login/login';
import { Slider } from '../Pages/Slider/slider';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Navi  ()  {
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
          backgroundColor:'#9fc4c6',
          // opacity:0.6,
          borderRadius:25,
          height:60,
          width:200,
          marginLeft:60,
          ...tabsStyle.shadow
        }
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon : ({focused}) => (
            <View style={{alignItems:'center',justifyContent:'center', top:2}}>
              <Image source={require('../assets/home-page.png')}
                    resizeMode='contain'
                    style={{
                      width:25,
                      height:25,
                      tintColor: focused ? '#ffffff' : '#748c94'

                    }}/>
              {/* <Text style={{color:  focused ? '#000000' : '#748c94', fontSize: 12}}>Home</Text> */}
            </View>
          )
        }}/>
        {/* <Tab.Screen name="Input" component={InputPage} /> */}
        <Tab.Screen name="Input" component={InputPage} options={{
          tabBarIcon : ({focused}) => (
            <View style={{alignItems:'center',justifyContent:'center', top:2}}>
              <Image source={require('../assets/input.png')}
                    resizeMode='contain'
                    style={{
                      width:25,
                      height:25,
                      tintColor: focused ? '#ffffff' : '#748c94'

                    }}/>
              {/* <Text style={{color:  focused ? '#a7f1a7' : '#748c94', fontSize: 12}}>Input</Text> */}
            </View>
          )
        }}/>
      </Tab.Navigator>
    );
}


function Tabs() {
  return (
      <Stack.Navigator 
          screenOptions={{
          headerShown: false
          }}
        >
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Slider" component={Slider} /> */}
        <Stack.Screen name=" " component={Navi} />
        
        
      </Stack.Navigator>
  );
}


export default Tabs;