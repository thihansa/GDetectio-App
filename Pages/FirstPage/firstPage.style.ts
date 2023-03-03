import { StyleSheet } from 'react-native';

export const firstPageStyles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo: {
        width: 220,
        height: 220,
      },
      background1: {
        position: 'absolute',
        top: -1,
        bottom: 0,
        left: 0,
        right: -100,
      },
      background2: {
        position: 'absolute',
        top: 548,
        bottom: -1,
        left: -100,
        right: 0,
      }
})