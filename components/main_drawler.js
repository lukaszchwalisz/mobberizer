import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../styles/global.js';
import { Button } from 'react-native-paper';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Main_Drawler() {

  const navigacja = useNavigation();

  const DATA = [
    {
      id: 'About',
      icon: 'crop-free',
      title: 'O aplikacji',
      color: '#bde0fe',
    },
    {
      id: 'Kontakt',
      icon: 'email-outline',
      title: 'Kontakt',
      color: '#a2d2ff',
    }
  ];


  const renderItem = ({ item }) => (
        <View>
        <Button style={style.button} icon={item.icon} mode='contained' color={item.color} uppercase={false}            
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
        }}
      source={
        require('../assets/images/main_drawler.png')
      }
    >
      <View>
        <View style={style.image} >
        <Image
        style={{ width: 75, height: 70}}
        source={require('../assets/icon_white.png')}
        />
        {/* <Text style={styles.tabs_logo}>M o b b e r i z er</Text> */}
        </View>
   
        {/* <Divider /> */}
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
  button: {
    marginVertical:5,
    marginHorizontal:20,
    padding:10,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    padding:50,
    alignItems: "center",
  }

});