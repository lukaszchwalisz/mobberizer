import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, ImageBackground} from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../styles/global.js';
import { Button, Divider } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

export default function Main() {

  const navigacja = useNavigation();

  const DATA = [
    {
      id: 'Kroki',
      icon: 'walk',
      title: 'Krok po kroku',
    },
    {
      id: 'Prawo',
      icon: 'comment-question-outline',
      title: 'Kwestie prawne',
    },
    {
      id: 'Słownik',
      icon: 'feather',
      title: 'Słownik',
    },
    {
      id: 'Kwestionariusz',
      icon: 'format-list-checkbox',
      title: 'Kwestionariusz',
    },
    {
      id: 'Baza',
      icon: 'magnify',
      title: 'Baza danych',
    }
  ];


  const renderItem = ({ item }) => (

      <View>
        <Button style={styles.button} icon={item.icon} mode='outlined' color="#111" uppercase={false}            
        onPress={() => {
          navigacja.navigate(item.id)
        }}>
       <Text style={styles.tabs_text}>{item.title}</Text> 
        </Button>  
      </View>
        );

  const Header = () => {
    return (
      <View>
        <View style={style.image} >
        <Image
        style={{margin: 10, width: 100, height: 100}}
        source={require('../assets/icon.png')}
        />
        <Text style={styles.tabs_logo}>M o b b e r i z er</Text>
        </View>
        <Divider />
        <View><Text>{"\n"}</Text></View>
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
  }
});