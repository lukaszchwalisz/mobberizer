import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, Linking } from 'react-native';
import 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { styles } from '../../styles/global.js';


const Header = () => {
  return (
    <View style={styles.tabs_header} >
        <Text style={styles.tabs_title}>Kwestionariusz FiSM{"\n"}</Text>
         <Image
          style={{ flex: 1, width: '100%', height: 300 }}
          source={
            require('../../assets/images/image29.png')
          }
        />  
        
    </View>
  )
};

export default function Kwestionariusz({ navigation }) {
  return (
        
        <ScrollView style={styles.contain}>
        <Header />
        <View style={styles.tabs_header}> 
        <Text style={styles.tabs_text}> 
        Kwestionariusz opracowany na podstawie wieloletnich doświadczeń pracy z osobami mobbingowanymi pracy,
        opierający się na kryterium zachowań mobbingowych wg Heinza Leymanna - <Text style={styles.tabs_bold}>Leymann Inventory of Psychological Terror (LIPT)</Text>.
        {"\n"}{"\n"}
        Pytania dotyczą doznawanych form mobbingu i skutków dla zdrowia psychofizycznego, także okoliczności towarzyszących
        zachowaniom mobbingowym, próbom przeciwdziałania mobbingowi, poszukiwaniu pomocy prawnej, lekarskiej, instytucjonalnej.
        {"\n"}{"\n"}
        Wypełniony kwestionariusz może posłużyć jako cenne świadectwo dotychczasowych działań i instrukcja do dalszych kroków
        na drodze do zaprzestania działań mobbingowych w miejscu pracy bądź dochodzenia swoich praw na drodze sądowej.
        {"\n"}{"\n"}
        Kwestionariusz przystosowany jest do wypełnienia samodzielnego, jak i grupowego - osoby badane proszone są o ustalenie
        wspólnego <Text style={styles.tabs_italic}>loginu</Text>. 
        {"\n"}{"\n"}
        Na podstawie odpowiedzi zostanie przygotowany raport, który w sposób ilościowy przedstawi skalę
        zjawiska mobbingu, którego doświadczyły pojedyncze osoby, jak i grupa badana.{"\n"}
        </Text>

        <Button style={style.button} icon='clipboard-text-outline' mode='contained' color="#a2d2ff" uppercase={false}            
            onPress={() => {
              Linking.openURL('https://lukaszchwalisz.pythonanywhere.com/testy/kwestmobbing')
            }}>
            Kwestionariusz FiSM
            </Button>

        </View>

        </ScrollView>
        
  )}

  const style = StyleSheet.create({
    button: {
      flex: 1,
      justifyContent:'center',
      padding:10,
      borderWidth: .7,
      borderRadius: 20,
      borderColor: "#d8e2dc",
      textAlign: "justify",
      marginVertical:5,
      marginHorizontal:20,
    },
    tabs_text: {
        color: '#000',
        fontSize: 14,
        fontFamily: "Montserrat-Regular",
        },
    tabs_subtext: {
        color: '#000',
        fontSize: 14,
        fontFamily: "Montserrat-Regular",
        },

  });


