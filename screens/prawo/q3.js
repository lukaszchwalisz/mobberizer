import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q3() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>W jaki sposób kodeks pracy wyodrębnia różne rodzaje i przejawy dyskryminacji ?{"\n"}</Text>
        <Text style={styles.tabs_text}>
        Kodeks pracy wyróżnia: {"\n"}{"\n"}
        <Text style={styles.tabs_bold}>dyskryminowanie bezpośrednie </Text>
        - występuje wtedy, kiedy pracownik z przyczyn wymienionych wyżej był,
         jest, mógłby być traktowany w porównywalnej sytuacji mniej korzystnie.{"\n"}{"\n"}
         <Text style={styles.tabs_bold}>dyskryminowanie pośrednie </Text>
        - istnieje wtedy, gdy na skutek pozornie neutralnego postanowienia,
         zastosowanego kryterium lub podjętego działania występują lub mogłyby wystąpić niekorzystne
         dysproporcje albo szczególnie niekorzystna sytuacja w zakresie przyczyn wymienionych powyżej,
         chyba że postanowienie, kryterium lub działanie jest obiektywnie uzasadnione ze względu na zgodny
         z prawem cel, który ma być osiągnięty, a środki służące osiągnięciu tego celu są właściwe i konieczne.{"\n"}{"\n"}

        Inne przejawy dyskryminawania ujęte w kodeksie pracy:{"\n"}{"\n"}
         - działanie polegające na zachęcaniu innej osoby do naruszenia zasady równego traktowania w
         zatrudnieniu lub nakazaniu jej naruszenia tej zasady;{"\n"}
         - niepożądane zachowanie, którego celem lub skutkiem jest naruszenie godnościpracownika i
         stworzenie wobec niego zastraszającej, wrogiej, poniżającej, upokarzającej lub uwłaczającej atmosfery (molestowanie){"\n"}
        </Text>
        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: kodeks pracy, art. 183a, od §1 do $5 {"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};
