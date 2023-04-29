import { StyleSheet } from 'react-native';

export const homeStyle = StyleSheet.create ({

    logo: {
        width: 60,
        height:60,
        marginTop: 40,
        marginLeft: 5
        // alignContent: 'flex-end'
    },
    title: {
        color: "#000000",
        // marginBottom: 20,
        fontSize: 27,
        marginTop: -750,
        marginLeft: 15,
        overflow: "hidden",
        fontWeight: 'bold'
    },
    user: {
        width: 40,
        height:40,
        marginTop: 60,
        marginLeft: 310,
        // alignContent: 'flex-end'
    },
    bottomView: {
        // flex: 1.5,
        width:350,
        height: 280,
        marginLeft:22,
        backgroundColor: "#ffffff",
        marginTop: 30,
        borderTopLeftRadius:30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    content:{
        // backgroundColor: '#ffffff',
        height: 900,
        // marginTop: 200
    
    },
    LinearGradientStyle: {
        height: '12%',
        borderRadius: 20,
        width: '92%',
        // marginBottom:10,
        marginTop: 30,
        marginLeft:15,
        marginRight:15,
        overflow:'hidden',
        // opacity:0.5
    },
    LinearGradientStyle2: {
        height: '9%',
        borderRadius: 20,
        width: '92%',
        marginBottom:950,
        marginTop: 20,
        marginLeft:15,
        marginRight:15,
        overflow:'hidden',
        // opacity:0.5
    },
    ChildViewStyle:{
 
        // borderWidth: 2, 
        // borderColor: '#ffffff',
        width: '92%',
        // marginTop: 20,
        // marginBottom:20,
        height: 100,
        borderRadius: 20,
        overflow:'hidden'
      
    },
    disease:{
        marginBottom:10,
        marginTop:-65,
        marginLeft:20,
        fontSize:20
    },
    text:{
        fontSize:18,
        marginLeft: 20,
        marginTop: 10
    },
    anth: {
        width:200,
        height:200,
        marginLeft:80,
        marginTop: 50,
        borderRadius: 20
    },
    anthText: {
        fontSize: 20,
        marginLeft:10,
        marginRight:5,
        marginTop: 10
    },
    close:{
        height:50,
        width:150,
        marginLeft:110,
        marginTop:10,
    },
    close2:{
        height:50,
        width:150,
        marginLeft:110,
        marginTop:10,
    },
    touch1:{
        height: '90%',
        width: '100%',
        marginBottom:-670
    },
    image: {
        width: 400,
        height: 800,
        marginLeft: 0,
        marginRight:0,
        marginBottom: -60,
        marginTop: -10,
        opacity:0.35
    },
    modal:{
        backgroundColor:'#e6fee6'
    }
})