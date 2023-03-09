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
        fontSize: 35,
        marginTop: -55,
        marginLeft: 120,
        overflow: "hidden",
        fontWeight: 'bold'
    },
    user: {
        width: 40,
        height:40,
        marginTop: -40,
        marginLeft: 340,
        // alignContent: 'flex-end'
    },
    bottomView: {
        // flex: 1.5,
        width:350,
        height: 280,
        marginLeft:22,
        backgroundColor: "#c1f0c1",
        marginTop: 30,
        borderTopLeftRadius:30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    }
})