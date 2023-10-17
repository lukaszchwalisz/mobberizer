import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q15() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>Czy pracownik ma prawo rozwiązać umowę o pracę z powodu doznawania mobbingu w miejscu pracy ?{"\n"}</Text>
        <Text style={styles.tabs_text}>
        Tak, pracownik ma prawo rozwiązać umowę o pracy z powodu mobbingu. Kodeks pracy nakazuje w tym wypadku wskazać
         na przyczynę. {"\n"}{"\n"}

        W art. 94 3 §5 kodeksu pracy: {"\n"}</Text>

        <Text style={styles.quotes}>
        „Oświadczenie pracownika o rozwiązaniu umowy o pracę powinno nastąpić na piśmie z podaniem przyczyny,
        o której mowa w § 2, uzasadniającej rozwiązanie umowy.”{"\n"}
        </Text>
        
        
        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: kodeks pracy, art. 94 3 §5{"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};


