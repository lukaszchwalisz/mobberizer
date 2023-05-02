import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../styles/global.js';
import { Divider, Surface } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Main({ navigation }) {

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
        <View>
        <TouchableWithoutFeedback style={styles.button} onPress={() => {
          navigacja.navigate(item.id)
        }}>
          <Surface style={styles.surface} elevation={2}>
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