import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q19() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>Czy można dochodzić swoich roszczeń w sprawach o mobbing w ramach ustawy o rozwiązywaniu sporów zbiorowych ?{"\n"}</Text>
        <Text style={styles.tabs_text}>
        Tak, można dochodzić swoich roszczeń w ramach ustawy o rozwiązywaniu sporów zbiorowych,
        jednak roszczenie musi dotyczyć wszystkich pracowników, nie dopuszcza się pojedyńczych roszczeń. {"\n"}
        </Text>

        <Text style={styles.quotes}>
        Ustawa o rozwiązywaniu sporów zbiorowych:{"\n"}{"\n"}
        
        Art. 1. Spór zbiorowy pracowników z pracodawcą lub pracodawcami może dotyczyć warunków pracy, płac lub świadczeń socjalnych
         oraz praw i wolności związkowych pracowników lub innych grup, którym przysługuje prawo zrzeszania się w związkach zawodowych.  {"\n"}{"\n"}

        Art. 4 {"\n"}
        §1. Nie jest dopuszczalne prowadzenie sporu zbiorowego w celu poparcia indywidualnych żądań pracowniczych, jeżeli ich
         rozstrzygnięcie jest możliwe w postępowaniu przed organem rozstrzygającym spory o roszczenia pracowników.{"\n"}
        </Text>

        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: ustawa o rozwiązywaniu sporów zbiorowych, art. 1, art. 4 §1{"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};
