import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Divider,Button } from 'react-native-paper';
import { } from 'react-native-gesture-handler';


export default function K0({ navigation }) {

  const DATA = [
    {
      id: 'k1',
      title: 'Diagnoza sytuacji',
    },
    {
      id: 'k2',
      title: 'Zgłoszenie problemu',
    },
    {
      id: 'k3',
      title: 'Wybór strategii',
    },
    {
      id: 'k4',
      title: 'Realizacja strategii',
    },
    {
      id: 'k5',
      title: 'Przygotowanie mentalne',
    }
  ];


  const renderItem = ({ item }) => (
          <View>
          <Button style={styles.button}  mode='contained' color="#fff" uppercase={false}            
          onPress={() => {
            navigation.push(item.id)
          }}>
         <Text style={styles.tabs_text}>{item.title}</Text> 
          </Button>
        </View>

  );

  const Header = () => {
    return (
        <View style={styles.tabs_header} >
        <Text style={styles.tabs_title}>Krok po kroku </Text>
        <Text style={styles.tabs_subtitle}>Kolejne kroki prowadzące do poradzenia sobie z sytuacją mobbingową w pracy. {"\n"}
        </Text>
        <Image
          style={{ flex: 1, width: '100%', height: 300 }}
          source={
            require('../../assets/images/image30.png')
          }
        />  
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