import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q6() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>Czy pracodawca może dowolnie wynagradzać różnych pracowników za pracę jednakowej wartości ?{"\n"}</Text>
        <Text style={styles.tabs_text}>
        Nie, gdyż tego typu praktyki naruszają zasadę równego traktowania w zatrudnieniu. {"\n"}
        </Text>
        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: kodeks pracy, art. 18 (3c - 3e){"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};