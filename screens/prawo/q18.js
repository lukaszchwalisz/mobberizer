import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q18() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>Na jakich zasadach można powołać komisję antymobbingową w zakładzie pracy ?{"\n"}</Text>
        <Text style={styles.tabs_text}>
        Komisje antymobbingowe nie mają dedykowanego umocowania prawnego. W celu zapewnienia najbardziej możliwej beztronności
         powołanej komisji, proponuje się, aby opierała się na zasady zawarte w dziale 12 KP "Rozpatrywanie sporów o
          roszczenia ze stosunku pracy", na podstawie postępowania pojednawczego, które jest umocowane prawnie.
        {"\n"}
        </Text>

        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: kodeks pracy, art.  242 - 258{"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};
