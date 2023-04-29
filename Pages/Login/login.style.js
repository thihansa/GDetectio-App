import { StyleSheet } from 'react-native';

export const loginStyle = StyleSheet.create ({
    content: {
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#ffffff"
    },
    image: {
        width: 400,
        height: 500,
        marginLeft: 5,
        marginBottom: -450,
        marginTop: -390
    },
    view: {
        // width:"80%"
    },
    bottomView: {
        // flex: 1.5,
        width:360,
        height: 580,
        marginLeft:22,
        marginRight:20,
        backgroundColor: "#ffffff",
        bottom: -390,
        borderTopLeftRadius:60,
        borderTopRightRadius: 60
    },
    title: {
        color: "#000000",
        // marginBottom: 20,
        fontSize: 34,
        overflow: "hidden"
    },
    Button: {
        margin: 2,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 10
    },
    Button1: {
        backgroundColor:"#000000",
        margin: 2,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 10
    },
    label1: {
        textAlign: 'left',
        height: 50,
        width: '90%',
        backgroundColor: "transparent",
        overflow:'hidden'
        
    },
    LinearGradientStyle: {
        height: 50,
        borderRadius: 20,
        width: '100%',
        marginBottom:10,
        marginTop: 20,
        overflow:'hidden'
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