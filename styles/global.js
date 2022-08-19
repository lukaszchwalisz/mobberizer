import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   contain: {
     flex: 1,
     backgroundColor: "#000",
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
   },
   cards: {
    padding: 0,
    textAlign: "justify",
    color: "#BC8F8F",
    fontSize: 17,
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
  //  backgroundColor: "#C71585",
   backgroundColor: "darkgrey",
   padding: 20,
   textAlign: "justify",
   },

    tabs_title: {
    // color: "#DDA0DD",
    color: "#f5f5dc",
    fontSize: 22,
    fontFamily: "sans-serif-medium",
    },
    tabs_subtitle: {
    padding: 1,
    textAlign: "justify",
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
    padding: 0,
    margin: 10,
    color: "#7FFFD4",
    fontSize: 17,
    fontFamily: "sans-serif-light",
   },
   surface: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#1E90FF",
  },
    quotes: {
    padding: 10,
    textAlign: "justify",
    color: "black",
    backgroundColor: "#EFFBFB",
    fontSize: 14,
    fontFamily: "serif",
    },
});
