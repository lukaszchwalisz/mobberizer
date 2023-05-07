import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, ImageBackground} from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../styles/global.js';
import { Button, Divider, Surface } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Main({ navigation }) {

  const navigacja = useNavigation();

  const DATA = [
    {
      id: 'Porady',
      icon: 'walk',
      title: 'Krok po kroku',
    },
    {
      id: 'Prawo',
      icon: 'comment-question-outline',
      title: 'Kwestie prawne',
    },
    {
      id: 'Zdrowie',
      icon: 'feather',
      title: 'Artykuły',
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
        <TouchableWithoutFeedback onPress={() => {
          navigacja.navigate(item.id)
        }}>
            <Button style={styles.button} icon={item.icon}  mode='outlined' color="#111" uppercase={false} >
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
        style={{margin: 10, width: 100, height: 100}}
        source={require('../assets/icon.png')}
        />
        <Text style={styles.tabs_logo}>M o b b e r i z er</Text>
        </View>
        <Divider />
      </View>
      /* </ImageBackground> */
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