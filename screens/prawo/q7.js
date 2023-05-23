import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q7() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>Jakie instytucje państwowe sprawują kontrolę nad przestrzeganiem prawa pracy ?{"\n"}</Text>
        <Text style={styles.tabs_text}>
        Instytucje, do których można się zwrócić z prośbą o pomoc odnośnie kontroli przestrzegania prawa i higieny pracy: {"\n"}
        - Państwowa Inspekcja Pracy {"\n"}
        - Państwowa Inspekcja Sanitarna {"\n"}
        - Społeczna Inspekcja Pracy (na terenie zakładu pracy) 
        {"\n"}
        </Text>
        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: kodeks pracy, art. 18 4 (§1-§3), 18 5 (§1-§2); ustawa o państwowej inspekcji pracy;
        ustawa o państwowej inspekcji sanitarnej; ustawa o społecznej inspekcji pracy  
        {"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};