import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q16() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>Jakie roszczenia może wystosować pracownik wobec pracodawcy z tytułu doznawanego mobbingu ?{"\n"}</Text>
        <Text style={styles.tabs_text}>W kodeksie pracy ustawodawca określił jakiego rodzaju rozszczenia przysługują pracownikowi.{"\n"}
        </Text>

        <Text style={styles.quotes}>
        Art. 94 3{"\n"}
        § 3. Pracownik, u którego mobbing wywołał rozstrój zdrowia, może dochodzić od pracodawcy odpowiedniej sumy tytułem
         zadośćuczynienia pieniężnego za doznaną krzywdę.{"\n"}

        § 4. Pracownik, który doznał mobbingu lub wskutek mobbingu rozwiązał umowę o pracę, ma prawo dochodzić od pracodawcy
         odszkodowania w wysokości nie niższej niż minimalne wynagrodzenie za pracę, ustalane na podstawie odrębnych przepisów.{"\n"}
        </Text>

        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: kodeks pracy, art. 94 3 §3 i §4{"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};

