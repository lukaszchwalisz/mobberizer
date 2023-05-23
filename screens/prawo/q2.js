import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q2() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>Czy pracodawca jest zobowiązany do przeciwdziałania dyskryminacji ?{"\n"}</Text>
        <Text style={styles.tabs_text}>
        Pracodawca jest zobowiązany:{"\n"}
        - przeciwdziałać dyskryminacji w zatrudnieniu, w szczególności ze względu na płeć, wiek, 
        niepełnosprawność, rasę, religię, narodowość, przekonania polityczne, przynależność związkową,
         pochodzenie etniczne, wyznanie, orientację seksualną, a także ze względu na zatrudnienie na czas określony
          lub nieokreślony albo w pełnym lub w niepełnym wymiarze czasu pracy{"\n"}
        </Text>
        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: kodeks pracy, art. 94 2b {"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};

