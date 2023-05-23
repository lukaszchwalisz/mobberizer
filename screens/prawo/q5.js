import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q5() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>Czy przyzwolenie na nierówne traktowanie, dyskryminację lub molestowanie seksualne ze strony pracownika nie będzie nosiło za sobą konsekwencji prawnych ?{"\n"}</Text>
        <Text style={styles.tabs_text}>
        Podporządkowanie się przez pracownika molestowaniu lub molestowaniu seksualnemu,
         a także podjęcie przez niego działań przeciwstawiających się molestowaniu lub
          molestowaniu seksualnemu nie może powodować jakichkolwiek negatywnych konsekwencji
           wobec pracownika.
        {"\n"}
        </Text>
        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: kodeks pracy, art. 183a, §7{"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};