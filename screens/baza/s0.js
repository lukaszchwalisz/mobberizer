import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Button  } from 'react-native-paper';

export default function S0({ navigation }) {

  const DATA = [
    {
      id: 's1',
      title: 'Państwowa Inspekcja Pracy',
    },
    {
      id: 's2',
      title: 'Stacje sanitarno-epidemiologiczne',
    },
    {
      id: 's3',
      title: 'Sądy powszechne',
    },
    {
      id: 's4',
      title: 'Organy rządowe',
    },
    {
      id: 's5',
      title: 'Organizacje pozarządowe',
    },
  ];


  const renderItem = ({ item }) => (
        <View> 
          <Button style={styles.button}  mode='outlined' color="#fff" uppercase={false}            
          onPress={() => {
            navigation.push(item.id)
          }}>
          <Text style={styles.tabs_text}>{item.title}</Text> 
          </Button>
        </View>
  );

  const Header = () => {
    return (
      <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Wyszukiwarka instytucji pomocowych</Text>
        <Text style={styles.tabs_subtitle}>Znajdź dane adresowe instytucji publicznej.{"\n"}
        </Text>
        <Image
          style={{ flex: 1, width: '100%', height: 300, borderRadius: 10 }}
          source={
            require('../../assets/images/image43.png')
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