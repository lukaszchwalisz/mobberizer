import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
import { styles } from '../../styles/global.js';
import A from 'react-native-a';

const url_fism="https://lukaszchwalisz.pythonanywhere.com/testy/kwestmobbing";

const Header = () => {
  return (
    <View style={styles.tabs_header} >
        <Text style={styles.tabs_title}>Kwestionariusz FiSM{"\n"}</Text>
         <Image
          style={{ flex: 1 }}
          source={
            require('../../assets/images/kwestionariusz.png')
          }
        />  
        
    </View>
  )
};

export default function Kwestionariusz() {
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

        <Text>
            <IconButton
            icon="hand-pointing-right"
            // color={Colors.red500}
            size={20}
            />    
        <A href={url_fism}> Kwestionariusz form i skutków mobbingu</A>{"\n"}</Text>
        </View>
        </ScrollView>
        
  )}


