import React from 'react';
import { View, Text, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Surface } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function K0({ navigation }) {

  const DATA = [
    {
      id: 'k1',
      title: 'Krok I. Diagnoza sytuacji.',
    },
    {
      id: 'k2',
      title: 'Krok 2. Zgłoszenie problemu.',
    },
    {
      id: 'k3',
      title: 'Krok 3. Wybór strategii.',
    },
    {
      id: 'k4',
      title: 'Krok 4. Realizacja strategii.',
    },
    {
      id: 'k5',
      title: 'Krok 5. Przygotowanie mentalne.',
    }
  ];


  const renderItem = ({ item }) => (
        <TouchableWithoutFeedback onPress={() => {
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
        <Text style={styles.tabs_title}>Krok po kroku </Text>
        <Text style={styles.tabs_subtitle}>Kolejne kroki prowadzące do poradzenia sobie z sytuacją mobbingową w pracy. 
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