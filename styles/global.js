import { StyleSheet } from 'react-native';
import darkmode from './colors';

export const styles = StyleSheet.create({
   contain: {
     flex: 1,
      backgroundColor:'#F1F5FF',
    //  borderWidth: 0.2,
    },
    button: {
      marginVertical:5,
      marginHorizontal:20,
      padding:10,
      borderWidth: 0.5,
      borderRadius: 50,
      // shadowColor:'#F1F5FF',
      // shadowOpacity: 2,
      // shadowOffset: { width:0, height:2, },
      // shadowRadius:10,
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
    color: "#000",
    fontSize: 22,
    fontFamily: "Inter-Regular",
    },

    tabs_subtitle: {
    padding: 1,
    textAlign: "justify",
    color: "#000",
    fontSize: 18,
    fontFamily: "Montserrat-Light",
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
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
   },
   surface: {
    padding: 10,
    borderRadius: 10,
    margin: 3,
    backgroundColor: '#fff',
    borderColor: "#000",   
    marginVertical:5,
    marginHorizontal:20,
    },

    text_surface: {
      justifyContent: 'center',
      alignContent: 'center',
      color: "#fff",
      fontSize: 13,
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
