import React from 'react';
import { View, Text, FlatList, StyleSheet, Image} from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../styles/global.js';
import { Divider, Surface, IconButton, Colors } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Main({ navigation }) {

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
          <Surface style={styles.surface} elevation={2}>
          <IconButton
            icon={item.icon}
            color={Colors.dark300}
            size={20}
            // onPress={() => console.log('Pressed')}
          /> 
            <Text style={styles.tabs_text}>{item.title}</Text>
          </Surface>
        </TouchableWithoutFeedback>     
        </View>
        );

  const Header = () => {
    return (
      <View>
        {/* <TouchableWithoutFeedback onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>  */}
        <View style={style.image} >
        <Image
        style={{margin: 10, width: 100, height: 100}}
        source={require('../assets/icon.png')}
        />
        <Text style={styles.tabs_logo}>M o b b e r i z er</Text>
        </View>
        {/* </TouchableWithoutFeedback> */}

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

  image: {
    flex: 1,
    padding:50,
    alignItems: "center",
  }

});