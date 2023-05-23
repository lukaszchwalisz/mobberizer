import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q13() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>Czy pracodawca jest zobowiązany do przeciwdziałania mobbingowi ?{"\n"}</Text>
        <Text style={styles.tabs_text}>
        W rozdziale I „Obowiązki pracodawcy” kodeksu pracy pracodawca jest zobowiązany przeciwdziałać mobbingowi.
         Ustawodawca jednak nie określił precyzyjne w jaki sposób pracodawca ma przeciwdziałań mobbingowi.{"\n"}{"\n"}

        Zalecane jest, aby wyjaśnianie sytuacji mobbingowej w pracy odbywało się poprzez postępowanie pojednawczej
         ujęte dalej w Kodeksie Pracy. Najczęściej jednak powoływane komisje antymobbigowe, których ramy działania,
        zasady powoływania oraz realizacja wytycznych na podstawie wniosków z postępowania nie są ujęte w kodeksie pracy.
          {"\n"}
        </Text>

        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: kodeks pracy, art. 943 §1{"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};