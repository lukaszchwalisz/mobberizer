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
      icon: 'format-list-checkbox',
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
      <ImageBackground
      style={{ flex: 1 }}
      imageStyle={{ 
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        opacity: .5,
        // height:1000,
        }}
        source={
          require('../assets/images/main_drawler.png')
          }
        >
      <View>
        <View style={style.image} >
        <Image
        style={{ width: 105, height: 95}}
        source={require('../assets/icon_white.png')}
        />
        <Text style={styles.tabs_logo}>M o b b e r i z er</Text>
        </View>
        {/* <Divider />
        <View><Text>{"\n"}</Text></View> */}
      </View>
      </ImageBackground>
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