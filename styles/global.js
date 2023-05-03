import { StyleSheet } from 'react-native';
import darkmode from './colors';




export const styles = StyleSheet.create({
   contain: {
     flex: 1,
     backgroundColor:'#F1F5FF',
    //  borderWidth: 0.2,
    },
    button: {
      margin:3,
      padding:5,
      borderWidth: 0.5,
      borderRadius: 50,
      backgroundColor:'#fff',
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
      fontFamily: "Inter-Regular",
    },
    cards_bold: {
      padding: 0,
      textAlign: "justify",
      color: darkmode.dark1,
      fontSize: 17,
      fontWeight: "bold",
      fontFamily: "Inter-Regular",
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

    tabs_logo: {
      justifyContent: "center",
      color:"#000",
      fontSize: 40,
      fontFamily: "RoadRage-Regular",
    },

    tabs_title: {
    color: darkmode.dark0,
    fontSize: 18,
    fontFamily: "Inter-Bold",
    },

    tabs_subtitle: {
    padding: 1,
    // textAlign: "justify",
    color: darkmode.dark0,
    fontSize: 14,
    fontFamily: "Inter-Regular",
    },
   
    tabs_bold: {
    padding: 1,
    margin: 10, 
    textAlign: "justify",
    color: darkmode.dark2,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Inter-Thin",
   },
   tabs_text: {
    margin: 0,
    color: "#000",
    fontSize: 18,
    fontFamily: "Inter-Regular",
   },
   surface: {
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    margin: 10,
    backgroundColor: '#fff',
    borderColor: "#000",
    },

    text_surface: {
      justifyContent: 'center',
      alignContent: 'center',
      color: "#fff",
      fontSize: 17,
      fontFamily: "Inter-Regular",
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
