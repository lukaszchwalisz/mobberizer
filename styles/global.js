import { StyleSheet } from 'react-native';

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
      fontFamily: "sans-serif-light",
    },
    cards_bold: {
      padding: 0,
      textAlign: "justify",
      color: "#7FFFD4",
      fontSize: 17,
      fontWeight: "bold",
      fontFamily: "sans-serif-light",
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
    color: "#f5f5dc",
    fontSize: 20,
    fontFamily: "Roboto",
    },

    tabs_subtitle: {
    padding: 1,
    // textAlign: "justify",
    color: "#F5F5DC",
    fontSize: 17,
    fontFamily: "sans-serif-light",
    },
   
    tabs_bold: {
    padding: 1,
    margin: 10, 
    textAlign: "justify",
    color: "#50FFD0",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
   },
   tabs_text: {
    margin: 1,
    color: "#7FFFD4",
    fontSize: 17,
    fontFamily: "sans-serif-light",
   },
   surface: {
    padding: 10,
    justifyContent: 'center',
    borderRadius: 15,
    margin: 5,
    justifyContent: "center",
    backgroundColor: "#2f2f2f",
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
    color: "#F5F5DC",
    backgroundColor: "#232323",
    fontSize: 14,
    fontFamily: "serif",
    },
    pics: {
      padding:10, 
      margin:10, 
      backgroundColor:"white",
    }
});
