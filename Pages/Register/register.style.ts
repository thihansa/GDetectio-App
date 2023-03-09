import { StyleSheet } from 'react-native';

export const registerStyle = StyleSheet.create ({
        safe : {
            margin: 0,
            marginRight: 0,
            marginLeft: 0,
            marginTop: 30,
            marginBottom: 0
        },
        content : {
            padding: 15,
            paddingTop: 0
        },
        icon : {
            color: "f5dfee",
            marginLeft: -10
        },
        title: {
            color: "#000000",
            marginLeft: 10,
            fontSize: 34,
            marginBottom: 30 
        },
        button: {
            backgroundColor:"#000000",
            margin: 2,
            marginLeft: -3,
            marginRight: 0,
            marginTop: 35,
            width: "100%"
        },
        image: {
            width: 400,
            height: 500,
            marginLeft: 0,
            marginBottom: -450,
            marginTop: -100

        },
        bottomView: {
            // flex: 1.5,
            width:395,
            height: 580,
            marginLeft:0,
            backgroundColor: "#ffffff",
            bottom: -225,
            borderTopLeftRadius:60,
            borderTopRightRadius: 60
        },
        label1: {
            textAlign: 'left',
            height: 50,
            width: '90%',
            backgroundColor: "transparent",
            overflow:'hidden'
        },
        LinearGradientStyle: {
            height: 45,
            borderRadius: 20,
            width: '100%',
            marginBottom:10,
            marginTop: 10,
            overflow:'hidden',
            marginLeft: -5
        },
        ChildViewStyle:{
            // borderWidth: 2, 
            // borderColor: '#ffffff',
            width: '100%',
            // marginTop: 20,
            // marginBottom:20,
            height: 50,
            borderRadius: 20,
            overflow:'hidden'
        }
        
})