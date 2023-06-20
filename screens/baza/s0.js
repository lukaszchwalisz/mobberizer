import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
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
      title: 'Stacje sanitarno-epidemiologiczne',
    },
    {
      id: 's3',
      title: 'Sądy powszechne',
    }
  ];


  const renderItem = ({ item }) => (
        <TouchableWithoutFeedback onPress={() => {
          navigation.push(item.id)
        }}> 

          <View style={styles.button}>
            <Text style={styles.tabs_text}>{item.title}</Text>
          </View>
        </TouchableWithoutFeedback>
  );

  const Header = () => {
    return (
      <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Wyszukiwarka instytucji pomocowych</Text>
        <Text style={styles.tabs_subtitle}>Znajdż dane adresowe instytucji publicznej.{"\n"}
        </Text>
        <Image
          style={{ flex: 1, width: '100%', height: 300 }}
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