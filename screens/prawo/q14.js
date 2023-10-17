import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q14() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>W jaki sposób zdefiniowany jest mobbing w kodeksie pracy ?{"\n"}</Text>
        <Text style={styles.tabs_text}>
        W kodeksie pracy ustawodawca zdefiniował mobbing jako:{"\n"}</Text>
        <Text style={styles.quotes}>
        „Mobbing oznacza działania lub zachowania dotyczące pracownika lub skierowane przeciwko pracownikowi,
        polegające na uporczywym i długotrwałym nękaniu lub zastraszaniu pracownika, wywołujące u niego zaniżoną
        ocenę przydatności zawodowej, powodujące lub mające na celu poniżenie lub ośmieszenie pracownika,
        izolowanie go lub wyeliminowanie z zespołu współpracowników.”{"\n"}{"\n"}
      

        Wszystkie te elementy muszą wystąpić łącznie, aby zachowanie w pracy mogły zostać zakwalifikowane jako mobbing.
        Ustawodawca nie ujął precyzyjnie okresu trwania zachowań mobbingowych. Sądy pracy w tym wypadku opierają się na
        praktyce z zakresu badania i przeciwdziałania mobbingowi, gdzie ten okres wynosi conajmniej od 3 do 6 miesięcy,
        w zależności od intensywności zachowań mobbingowych.
        </Text>

        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: kodeks pracy, art. 943 §2{"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};
