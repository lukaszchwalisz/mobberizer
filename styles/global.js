import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   contain: {
     flex: 1,
    //  alignItems: 'center',
     backgroundColor: "#00008B",
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
   backgroundColor: "#C71585",
   padding: 20,
   textAlign: "justify",
   },

    tabs_title: {
    color: "#DDA0DD",
    fontSize: 22,
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
    // textAlign: "justify",
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
