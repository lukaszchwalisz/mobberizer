import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q12() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>Czy pracodawca może odmówić ponownego zatrudnienia pracownika przywróconego do pracy decyzją sądu ?{"\n"}</Text>
        <Text style={styles.tabs_text}>
        Pracodawca nie może zatrudnić pracownika przywróconego do pracy w sytuacji,
        kiedy w ciągu 7 dni od przywrócenia do pracy nie zgłosił gotowości niezwłocznego podjęcia pracy,
        chyba że przekroczenie tego terminu nastąpiło z przyczyn niezależnych od pracownika.
        {"\n"}
        </Text>
        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: kodeks pracy, art. 48 §1{"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};
