import React from 'react';
import { View, Text, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Surface } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function P0({ navigation }) {

  const DATA = [
    {
      id: 'p1',
      title: 'Stres w pracy.',
    },
    {
      id: 'p2',
      title: 'Wypalenie zawodowe.',
    },
    {
      id: 'p3',
      title: 'Konlifkt.',
    },
    {
      id: 'p4',
      title: 'Mobbing.',
    },
    {
      id: 'p5',
      title: 'Uprzedzenia, stereotypy, dyskryminacja.',
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
        <Text style={styles.tabs_title}>Moje zdrowie </Text>
        <Text style={styles.tabs_subtitle}>Informacje na temat zdrowotnych skutków działań mobbingowych w miejscu pracy.
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