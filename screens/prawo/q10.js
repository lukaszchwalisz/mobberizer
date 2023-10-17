import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q10() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>Jakiego typu roszczenia rozstrzygają sądy pracy ?{"\n"}</Text>
        <Text style={styles.tabs_text}>Sądy pracy rozstrzygają wszelkie rozszczenia ze stosunku pracy.{"\n"}
        </Text>

        <Text style={styles.quotes}>
          Art. 262. {"\n"}
          § 1. Spory o roszczenia ze stosunku pracy rozstrzygają sądy
          powszechne, zwane „sądami pracy”.{"\n"}
          § 2. Nie podlegają właściwości sądów pracy spory dotyczące:{"\n"}
          1) ustanawiania nowych warunków pracy i płacy;{"\n"}
          2) stosowania norm pracy.{"\n"}
          3) (uchylony){"\n"}
          § 3. Zasady tworzenia sądów pracy, organizację i tryb postępowania przed tymi
          sądami regulują odrębne przepisy.
        </Text>

        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: kodeks pracy, art. 24 §1 , art. 26 §1 - §3{"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};