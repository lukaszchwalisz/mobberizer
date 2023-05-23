import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q1() {
  return (
         <ScrollView style={styles.contain}>
           <View style={styles.tabs_header}> 
             <Text style={styles.tabs_title}>Na czym polega zasada równego traktowania w zatrudnieniu ?{"\n"}</Text>
             <Text style={styles.tabs_text}>Równe traktowanie w zatrudnieniu oznacza niedyskryminowanie w sposób bezpośredni
              lub pośredni z takich przyczyn jak: nawiązywanie i rozwiązywanie stosunku pracy,  awansowania oraz dostępu
              do szkolenia w celu podnoszenia kwalifikacji zawodowych, w szczególności bez względu na płeć, wiek,
              niepełnosprawność, rasę, religię, narodowość, przekonania polityczne, przynależność związkową, 
              pochodzenie etniczne, wyznanie, orientację seksualną, zatrudnienie na czas określony lub nieokreślony, 
              zatrudnienie w pełnym lub w niepełnym wymiarze czasu pracy.{"\n"}
             </Text>
             <Divider />
             <Text style={styles.tabs_subtitle}>{"\n"}
	           podstawa prawna: kodeks pracy, art. 183a., od §1 do $5 {"\n"}
             </Text>
             </View>
        </ScrollView>
  )
};