import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   contain: {
        flex: 1,
        backgroundColor: 'white',
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
        backgroundColor: 'white',
        padding: 20,
        textAlign: "justify",
    },
    tabs_logo: {
        margin:0,
        color:"#1D3557",
        fontSize: 40,
        fontFamily: "RoadRage-Regular",
    },
    tabs_title: {
        color: '#000',
        textAlign: "justify",
        fontSize: 18,
        lineHeight: 25,
        fontFamily: "Lora-SemiBold",
    },
    tabs_subtitle: {
        padding:0,
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
    tabs_text: {
        padding: 0,
        color: "#000",
        fontSize: 16,
        lineHeight: 25,
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
        fontFamily: "Lora-Italic",
    },
    pics: {
        padding:10, 
        margin:10, 
        backgroundColor: "white",
    }
});
