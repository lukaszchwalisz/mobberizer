import { StyleSheet } from 'react-native';
import { darkmode, lightmode } from './colors';

export const styles = StyleSheet.create({
   contain: {
     flex: 1,
      backgroundColor: lightmode.white,
    },
    button: {
      marginVertical:5,
      marginHorizontal:20,
      padding:10,
      borderWidth: 0.5,
      borderRadius: 20,
      borderColor: lightmode.blue,
      backgroundColor:'#fff',

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'white'
        },

    tabs_header: {
    backgroundColor: "#fff",
    padding: 20,
    textAlign: "justify",
    },

    tabs_logo: {
      justifyContent: "center",
      color:"#000",
      fontSize: 40,
      fontFamily: "RoadRage-Regular",
    },

    tabs_title: {
    color: '#000',
    fontSize: 18,
    fontFamily: "PoltawskiNowy-Medium",
    textAlign: "justify",
    },

    tabs_subtitle: {
      padding: 0,
      textAlign: "justify",
      color: "#000",
      fontSize: 12,
      fontFamily: "PoltawskiNowy-Regular",
      },

    tabs_italic: {
      padding: 0,
      textAlign: "justify",
      color: "#000",
      fontSize: 14,
      fontFamily: "PoltawskiNowy-MediumItalic",
      },

   tabs_text: {
    // textAlign: "justify",
      margin: 0,
      color: "#000",
      fontSize: 14,
      fontFamily: "Montserrat-Regular",
    },
    
    quotes: {
      padding: 5,
      textAlign: "justify",
      color: '#000',
      backgroundColor: '#fff',
      fontSize: 14,
      fontFamily: "PoltawskiNowy-Italic",
      },

    pics: {
      padding:10, 
      margin:10, 
      backgroundColor:"white",
    }
});
