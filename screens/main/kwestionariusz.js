import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Kwestionariusz() {
  return (
        <ScrollView style={styles.contain}>
        <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>Kwestionariusz FiSM{"\n"}</Text>  
        <Text style={styles.tabs_subtitle}> 
        Kwestionariusz opracowany na podstawie wieloletnich doświadczeń pracy z osobami mobbingowanymi pracy,
        opierający się na kryterium zachowań mobbingowych wg Heinza Leymanna - <Text style={styles.tabs_italic}>Leymann Inventory of Psychological Terror (LIPT)</Text>.{"\n"}
        </Text>

        <Text style={styles.tabs_subtitle}> 
        Pytania dotyczą doznawanych form mobbingu i skutków dla zdrowia psychofizycznego, także okoliczności towarzyszących
        zachowaniom mobbingowym, próbom przeciwdziałania mobbingowi, poszukiwaniu pomocy prawnej, lekarskiej, instytucjonalnej.
        </Text>
          
        <Text style={styles.tabs_subtitle}> 
        Wypełniony kwestionariusz może posłużyć jako cenne świadectwo dotychczasowych działań i instrukcja do dalszych kroków
        na drodze do zaprzestania działań mobbingowych w miejscu pracy bądź dochodzenia swoich praw na drodze sądowej.{"\n"}
        </Text>

        <Text style={styles.tabs_subtitle}> 
        Kwestionariusz przystosowany jest do wypełnienia samodzielnego, jak i grupowego - osoby badane proszone są o ustalenie
        wspólnego <Text style={styles.tabs_italic}>loginu</Text>. Na podstawie odpowiedzi zostanie przygotowany raport, który w sposób ilościowy przedstawi skalę
        zjawiska mobbingu, którego doświadczyły pojedyncze osoby, jak i grupa badana.{"\n"}
        </Text>

        </View>

        </ScrollView>
  )}


