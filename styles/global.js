import { StyleSheet } from 'react-native';
import { lightmode } from './colors';

export const styles = StyleSheet.create({
   contain: {
        flex: 1,
        backgroundColor: lightmode.white,
    },
    button: {
        marginVertical:5,
        marginHorizontal:20,
        padding:10,
        borderRadius: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'white'
    },
    tabs_header: {
        backgroundColor: lightmode.white,
        padding: 20,
        textAlign: "justify",
    },
    tabs_logo: {
        color:"#1D3557",
        fontSize: 40,
        fontFamily: "RoadRage-Regular",
    },
    tabs_title: {
        color: '#000',
        textAlign: "justify",
        fontSize: 18,
        fontFamily: "Lora-SemiBold",
    },
    tabs_subtitle: {
        padding: 0,
        color: "grey",
        fontSize: 14,
        fontFamily: "Lora-Regular",
    },
    tabs_italic: {
        padding: 0,
        color: "#000",
        fontSize: 16,
        fontFamily: "Lora-Italic",
    },
    tabs_italic_p: {
        padding: 0,
        color: "#000",
        fontSize: 16,
        fontFamily: "PoltawskiNowy-Italic",
      },
    tabs_text: {
        padding: 0,
        color: "#000",
        fontSize: 16,
        lineHeight: 30,
        fontFamily: "Lora-Regular",
        textAlign: "justify",
        
    },
    tabs_bold: {
        padding: 0,
        color: "#000",
        fontSize: 16,
        fontFamily: "Lora-Bold",
    },
    quotes: {
        padding: 5,
        textAlign: "justify",
        color: '#000',
        fontSize: 14,
        fontFamily: "serif",
    },
    pics: {
        padding:10, 
        margin:10, 
        backgroundColor:"white",
    }
});
