import { StyleSheet } from 'react-native';
import darkmode from './colors';




export const styles = StyleSheet.create({
   contain: {
     flex: 1,
     backgroundColor: "#000",
    },
    button: {
      margin:5,
    },
   input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white'
    },

    cards_title: {
      marginBottom: 20,
      color: "#fff"
    },
    cards: {
      padding: 0,
      textAlign: "justify",
      color: "#000",
      fontSize: 15,
      fontFamily: "Roboto",
    },
    cards_bold: {
      padding: 0,
      textAlign: "justify",
      color: darkmode.dark1,
      fontSize: 17,
      fontWeight: "bold",
      fontFamily: "Roboto",
    },
    cards_image: {
      width: 50,
      height: 50,
      padding: 10,
    },

    tabs_header: {
    backgroundColor: "#000",
    padding: 20,
    textAlign: "justify",
    },

    tabs_title: {
    color: darkmode.dark0,
    fontSize: 20,
    fontFamily: "Roboto",
    },

    tabs_subtitle: {
    padding: 1,
    // textAlign: "justify",
    color: darkmode.dark0,
    fontSize: 17,
    fontFamily: "Roboto",
    },
   
    tabs_bold: {
    padding: 1,
    margin: 10, 
    textAlign: "justify",
    color: darkmode.dark2,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
   },
   tabs_text: {
    margin: 1,
    color: "#7FFFD4",
    fontSize: 17,
    fontFamily: "Roboto",
   },
   surface: {
    padding: 10,
    justifyContent: 'center',
    borderRadius: 15,
    margin: 5,
    justifyContent: "center",
    backgroundColor: darkmode.bgdark,
    borderColor: "#fff",
    // borderWidth: 0.8,
    
    },

    text_surface: {
      justifyContent: 'center',
      alignContent: 'center',
      color: "#fff",
      fontSize: 17,
      fontFamily: "Roboto",
      },

    quotes: {
    padding: 10,
    textAlign: "justify",
    color: darkmode.dark0,
    backgroundColor: darkmode.bgdark,
    fontSize: 14,
    fontFamily: "Roboto",
    },
    pics: {
      padding:10, 
      margin:10, 
      backgroundColor:"white",
    }
});
