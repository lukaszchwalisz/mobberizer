import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../styles/global.js';
import { Divider } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Main_Drawler({}) {

  const navigacja = useNavigation();

  const DATA = [
    {
      id: 'Porady',
      title: 'Krok po kroku',
    },
    {
      id: 'Zdrowie',
      title: 'Moje zdrowie',
    },
    {
      id: 'Prawo',
      title: 'Pytania prawne',
    },
    {
      id: 'Szukaj',
      title: 'Szukaj',
    }
  ];


  const renderItem = ({ item }) => (
        <TouchableWithoutFeedback style={styles.button} onPress={() => {
          navigacja.navigate(item.id)
        }}>
          <View>
          <Text style={style.container}>{item.title}</Text>
          </View>
        </TouchableWithoutFeedback>
        );

  const Header = () => {
    return (
      <View>
        <Text style={styles.tabs_logo}>M o b b e r i z er</Text>
        <Divider />
      </View>

    )
  };

  return (
     <FlatList 
      ListHeaderComponent={Header} 
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
  )
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color: "#9FE2BF",
    padding: 10,

  }

});