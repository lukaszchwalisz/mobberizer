import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../styles/global.js';
import { Button } from 'react-native-paper';


import { useNavigation } from '@react-navigation/native';

export default function Main() {

  const navigacja = useNavigation();

  const DATA = [
    {
      id: 'Kroki',
      icon: 'walk',
      title: 'Krok po kroku',
      color: '#caf0f8',
    },
    {
      id: 'Prawo',
      icon: 'comment-question-outline',
      title: 'Kwestie prawne',
      color: '#caf0f8',
    },
    {
      id: 'Słownik',
      icon: 'feather',
      title: 'Słownik',
      color: '#ade8f4',
    },
    {
      id: 'Baza',
      icon: 'magnify',
      title: 'Baza danych',
      color: '#ade8f4',
    },
    {
      id: 'Kwestionariusz',
      icon: 'clipboard-text-outline',
      title: 'Kwestionariusz',
      color: '#90e0ef',
    },

  ];


  const renderItem = ({ item }) => (

      <View>
        <Button style={styles.button} icon={item.icon} mode='contained' color={item.color} uppercase={false}            
        onPress={() => {
          navigacja.navigate(item.id)
        }}>

       <Text style={styles.tabs_title}>{item.title}</Text> 
       
        </Button>  

      </View>
        );

  const Header = () => {
    return (

      <View>
        <View style={style.image} >
        <Image
        style={{ width: 105, height: 95}}
        source={require('../assets/icon_white.png')}
        />
        <Text style={styles.tabs_logo}>M o b b e r i z er</Text>
        </View>
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
  image: {
    flex: 1,
    padding:50,
    alignItems: "center",
  },


});