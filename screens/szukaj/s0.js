import React from 'react';
import { View, Text, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Surface } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function S0({ navigation }) {

  const DATA = [
    {
      id: 's1',
      title: 'Państwowa Inspekcja Pracy',
    },
    {
      id: 's2',
      title: 'Sanepid',
    }
  ];


  const renderItem = ({ item }) => (
        <TouchableWithoutFeedback style={styles.button} onPress={() => {
          navigation.push(item.id)
        }}> 

          <Surface style={styles.surface} elevation={2}>
            <Text style={styles.tabs_text}>{item.title}</Text>
          </Surface>
        </TouchableWithoutFeedback>
  );

  const Header = () => {
    return (
      <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Wyszukiwarka instytucji </Text>
        <Text style={styles.tabs_subtitle}>Dane adresowe instytucji publicznych.
        </Text>
      </View>

    )
  };

  return (
    <View style={styles.contain}>
     <FlatList 
      ListHeaderComponent={Header} 
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
    </View>
  )
};