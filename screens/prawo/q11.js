import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q11() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>W jakim czasie można się odwołać od wypowiedzenia umowy o pracę w sądzie pracy ?{"\n"}</Text>
        <Text style={styles.tabs_text}>W ciągu 21 dni.{"\n"}
        </Text>

        <Text style={styles.quotes}>
          Art. 264. {"\n"}
          § 1. Odwołanie od wypowiedzenia umowy o pracę wnosi się do sądu
          pracy w ciągu 21 dni od dnia doręczenia pisma wypowiadającego umowę o pracę.{"\n"}
          § 2. Żądanie przywrócenia do pracy lub odszkodowania wnosi się do sądu pracy
          w ciągu 21 dni od dnia doręczenia zawiadomienia o rozwiązaniu umowy o pracę bez
          wypowiedzenia lub od dnia wygaśnięcia umowy o pracę.{"\n"}
          § 3. Żądanie nawiązania umowy o pracę wnosi się do sądu pracy w ciągu 21 dni
          od dnia doręczenia zawiadomienia o odmowie przyjęcia do pracy.{"\n"}{"\n"}
          
          Art. 265. {"\n"}
          § 1. Jeżeli pracownik nie dokonał bez swojej winy w terminie
          czynności, o których mowa w art. 97 § 21 i w art. 264, sąd pracy na jego wniosek
          postanowi przywrócenie uchybionego terminu.{"\n"}
          § 2. Wniosek o przywrócenie terminu wnosi się do sądu pracy w ciągu 7 dni od
          dnia ustania przyczyny uchybienia terminu. We wniosku należy uprawdopodobnić
          okoliczności uzasadniające przywrócenie terminu.{"\n"}
        </Text>

        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: kodeks pracy, art. 264 §1-§3 , art. 265 §1 - §2{"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};
