import { StyleSheet } from 'react-native';

export const loginStyle = StyleSheet.create ({
    content: {
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#b2e0ae"
    },
    view: {
        width:"80%"
    },
    cardTitle: {
        color: "#000000",
        marginLeft: 60,
        fontSize: 30,
        fontWeight: 'bold'
    },
    Button: {
        margin: 2,
        marginLeft: 0,
        marginRight: 0
    },
    Button1: {
        backgroundColor:"#000000",
        margin: 2,
        marginLeft: 0,
        marginRight: 0
    },
    logo: {
        width: 415,
        height: 370,
        marginLeft: -50,
        marginTop: -100,
        marginRight: -60,
        marginBottom: 20
    },
    label: {
        width:"100%",
        overflow:'hidden',
        borderTopRightRadius: 20, 
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom:10,
        marginTop: 10,
        justifyContent:"center",
        opacity:20
    },
    background1: {
        // position: 'absolute',
        top: 0,
        bottom: 100,
        left: -40,
        right: 10,
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
        marginTop: 10,
        overflow:'hidden'
    },
    ChildViewStyle:{
 
        borderWidth: 2, 
        borderColor: '#009900',
        width: '100%',
        // marginTop: 20,
        // marginBottom:20,
        height: 50,
        borderRadius: 20,
        overflow:'hidden'
      
    }
})