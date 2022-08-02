import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   contain: {
     flex: 1,
    //  alignItems: 'center',
     backgroundColor: "white",
   },
   cards_title: {
    marginBottom: 20,
   },
   cards: {
    padding: 0,
    textAlign: "justify",
    color: "#190707",
    fontSize: 17,
    fontFamily: "sans-serif-light",
   },
   cards_bold: {
    padding: 0,
    textAlign: "justify",
    color: "#190707",
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
   backgroundColor: "#2E9AFE",
   padding: 20,
   textAlign: "justify",
   },

    tabs_title: {
    color: "white",
    fontSize: 22,
    },
    tabs_subtitle: {
    padding: 1,
    textAlign: "justify",
    color: "white",
    fontSize: 17,
    fontFamily: "sans-serif-light",
    },
   
    tabs_bold: {
    padding: 1,
    margin: 10, 
    textAlign: "justify",
    color: "#190707",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
   },
   tabs_text: {
    padding: 0,
    margin: 10,
    textAlign: "justify",
    color: "black",
    fontSize: 17,
    fontFamily: "sans-serif-light",
   },
   surface: {
    padding: 8,
    // height: 80,
    // width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 10
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
