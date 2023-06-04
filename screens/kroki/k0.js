import React from 'react';
import { View, Text, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Divider,Button } from 'react-native-paper';
import { } from 'react-native-gesture-handler';


export default function K0({ navigation }) {

  const DATA = [
    {
      id: 'k1',
      title: '1. Diagnoza sytuacji.',
    },
    {
      id: 'k2',
      title: '2. Zgłoszenie problemu.',
    },
    {
      id: 'k3',
      title: '3. Wybór strategii.',
    },
    {
      id: 'k4',
      title: '4. Realizacja strategii.',
    },
    {
      id: 'k5',
      title: '5. Przygotowanie mentalne.',
    }
  ];


  const renderItem = ({ item }) => (

          <Button style={styles.button}  icon='menu-right' mode='outlined' color="#111" uppercase={false}            
          onPress={() => {
            navigation.push(item.id)
          }}>
         <Text style={styles.tabs_text}>{item.title}</Text> 
          </Button>


  );

  const Header = () => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Krok po kroku </Text>
        <Text style={styles.tabs_subtitle}>Kolejne kroki prowadzące do poradzenia sobie z sytuacją mobbingową w pracy. {"\n"}
        </Text>
        <Divider /> 
          
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