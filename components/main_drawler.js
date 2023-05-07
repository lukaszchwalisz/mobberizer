import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../styles/global.js';
import { Button, Divider } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Main_Drawler({}) {

  const navigacja = useNavigation();

  const DATA = [
    {
      id: 'Porady',
      icon: 'stairs',
      title: 'Krok po kroku',
    },
    {
      id: 'Zdrowie',
      icon: 'library',
      title: 'Artykuły',
    },
    {
      id: 'Prawo',
      icon: 'layers',
      title: 'Kwestie prawne',
    },
    {
      id: 'Szukaj',
      icon: 'magnify',
      title: 'Szukaj',
    }
  ];


  const renderItem = ({ item }) => (
        <View>
        <TouchableWithoutFeedback onPress={() => {
          navigacja.navigate(item.id)
        }}>
          <Button style={styles.button} icon={item.icon} mode='outlined' color="#111" uppercase={false} >
          {item.title}
          </Button>
        </TouchableWithoutFeedback>    
        </View>
        );

  const Header = () => { 
    return (
    //   <ImageBackground
    //   style={{ flex: 1 }}
    //   imageStyle={{ 
    //     borderTopLeftRadius: 0,
    //     borderTopRightRadius: 0,
    //     borderBottomLeftRadius: 25,
    //     borderBottomRightRadius: 25,
    //     }}
    //   source={
    //     require('../assets/images/pallete.png')
    //   }
    // >
      <View>
        <View style={style.image} >
        <Image
        style={{margin:0, width: 50, height: 50}}
        source={require('../assets/icon.png')}
        />
        <Text style={styles.tabs_logo}>M o b b e r i z er</Text>
        </View>
   
        {/* <Divider /> */}
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

  },
  image: {
    flex: 1,
    padding:50,
    alignItems: "center",
  }

});