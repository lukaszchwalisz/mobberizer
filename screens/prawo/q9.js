import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q9() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>Czy postępowanie kontrolne Państwowej Inspekcji Pracy może mieć miejsce bez uprzedzenia kontrolowanego ?{"\n"}</Text>
        <Text style={styles.tabs_text}>Tak, postępowanie kontrolne może miejsce bez uprzedzenia.{"\n"}
        </Text>

        <Text style={styles.quotes}>
          Art. 24 {"\n"}
          §1. Inspektorzy pracy są uprawnieni do przeprowadzania, bez uprzedzenia i o każdej porze dnia i nocy,
          kontroli przestrzegania przepisów prawa pracy, w szczególności stanu bezpieczeństwa i higieny pracy oraz
          kontroli przestrzegania przepisów dotyczących legalności zatrudnienia w zakresie, o którym
          mowa w art. 10 ust. 1 pkt 3 i 4.{"\n"}{"\n"}

          Art. 26 {"\n"}
            §1. Kontrolę przeprowadza się w siedzibie podmiotu kontrolowanego oraz w innych miejscach wykonywania jego zadań lub
             przechowywania dokumentów finansowych i kadrowych.{"\n"}
            §2. Poszczególne czynności kontrolne mogą być wykonywane także w siedzibie jednostki 
            organizacyjnej Państwowej Inspekcji Pracy.{"\n"}
            §3. Przed podjęciem czynności kontrolnych inspektor pracy zgłasza swoją obecność podmiotowi kontrolowanemu,
             z wyjątkiem przypadków, gdy zgłoszenie to mogłoby mieć wpływ na wynik kontroli.{"\n"}
        </Text>

        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: ustawa o państwowej inspekcji pracy, art. 24 §1, art. 26 §1 -§3{"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};