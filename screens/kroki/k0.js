import React from 'react';
import { View, Text, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Surface, Divider,Button } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function K0({ navigation }) {

  const DATA = [
    {
      id: 'k1',
      title: 'I. Diagnoza sytuacji.',
    },
    {
      id: 'k2',
      title: 'II. Zgłoszenie problemu.',
    },
    {
      id: 'k3',
      title: 'III. Wybór strategii.',
    },
    {
      id: 'k4',
      title: 'IV. Realizacja strategii.',
    },
    {
      id: 'k5',
      title: 'V. Przygotowanie mentalne.',
    }
  ];


  const renderItem = ({ item }) => (
        // <TouchableWithoutFeedback onPress={() => {
        //   navigation.push(item.id)
        // }}> 

        //   <Surface style={styles.surface} elevation={2}>
        //     <Text style={styles.tabs_italic}>{item.title}</Text>
        //   </Surface>
        // </TouchableWithoutFeedback>

          <Button style={styles.button}  icon='menu-right' mode='outlined' color="#111" uppercase={false}            
          onPress={() => {
            navigation.push(item.id)
          }}>
          {item.title}
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