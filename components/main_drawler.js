import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../styles/global.js';
import { Button, Divider } from 'react-native-paper';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Main_Drawler() {

  const navigacja = useNavigation();

  const DATA = [
    {
      id: 'About',
      icon: 'crop-free',
      title: 'O aplikacji',
      color: '#457B9D',
      nav: 'about',
    },
    {
      id: 'Kontakt',
      icon: 'email-outline',
      title: 'Kontakt',
      color: '#E63946',
      nav: 'kontakt',
    }
  ];


  const renderItem = ({ item }) => (
        <View>
        <Button style={style.button} icon={item.icon} mode='contained' color={item.color} uppercase={false}            
        onPress={() => {
          navigacja.navigate(item.id)
        }}>
        {item.title}
        </Button>
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
      // </ImageBackground>
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
  button: {
    marginVertical:5,
    marginHorizontal:20,
    padding:10,
    borderWidth: 0.5,
    borderRadius: 20,

  },
  image: {
    flex: 1,
    padding:50,
    alignItems: "center",
  }

});