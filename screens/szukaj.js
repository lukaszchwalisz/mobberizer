import React from 'react'
import { ScrollView, View, Text } from 'react-native';
import { styles } from '../styles/global.js';

export default function Szukaj (){
 
  return (
        <ScrollView style={styles.contain}>

        <View style={styles.tabs_header}>
          <Text style={styles.tabs_title}>Wyszukiwarka instytucji pomocowych</Text>
          <Text style={styles.tabs_subtitle}>Znajdź najbliższy sąd pracy, PIP, Sanepid.
          </Text>
        </View>

        </ScrollView>

  )
}