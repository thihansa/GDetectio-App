import { StyleSheet } from 'react-native';

export const inputStyle = StyleSheet.create ({

    // content:{
    //     // backgroundColor: '#ffffff',
    //     height: 900,
    
    // },
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
        fontSize: 35,
        marginTop: -55,
        marginLeft: 120,
        overflow: "hidden",
        fontWeight: 'bold'
    },
    user: {
        width: 40,
        height:40,
        marginTop: -50,
        marginLeft: 340,
        // alignContent: 'flex-end'
    },
    bottomView: {
        // flex: 1.5,
        width:270,
        height: 280,
        marginLeft:60,
        backgroundColor: "#c1f0c1",
        marginTop: 150,
        borderTopLeftRadius:30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    input: {
        width: 100,
        height:100,
        marginLeft:45,
        marginTop:45
        // alignContent: 'flex-end'
    },
    elevation: {  
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 11
    } 
})