import React from 'react';
import { ScrollView, StyleSheet,View, Text, Image } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';


export default function About({navigation}) {
  return (
         <ScrollView style={styles.contain}>
           <View style={styles.tabs_header}> 
            <View style={style.image} >
              <Image
              style={{ width: 200, height: 200}}
              source={require('../../assets/icon.png')}
              />
            </View>
            <Text style={styles.tabs_text}> 
            <Text style={styles.tabs_bold}>Mobberizer </Text> 
            to aplikacja mobilna dedykowana osobom, które spotkały się z niewłaściwymi zachowaniami w pracy o charakterze mobbingowym;
            chcą zdiagnozować zaistniałą sytuację w pracy; poszukują pomocy psychologicznej i prawnej oraz instytucjonalnej.
             {"\n"}

             </Text>
             <Text style={styles.tabs_text}> 
            <Text style={styles.tabs_bold}>Mobberizer </Text> 
             to narzędzie wsparcia dla osób zastanawiających się od czego zacząć, w jaki sposób skutecznie przeciwdziałać mobbingowi.
              {"\n"}</Text>
             
            <Text style={styles.tabs_text}>
            Aplikacja jest 
            <Text style={styles.tabs_italic}> bezpłatna</Text> 
            , nie zawiera reklam, jest przyjazna dla użytkownika.
              {"\n"}</Text>

             </View>

        </ScrollView>
  )
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    padding:50,
    alignItems: "center",
  },
  tabs_title: {
    color: '#000',
    fontSize: 16,
    fontFamily: "PoltawskiNowy-Medium",
},
  tabs_italic: {
    padding: 0,
    color: "#000",
    fontSize: 14,
    fontFamily: "PoltawskiNowy-Italic",
  }
});