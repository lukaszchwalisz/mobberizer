import React from 'react';
import { Linking ,Text,StyleSheet } from 'react-native';
import { Card,Drawer } from 'react-native-paper';
import call from 'react-native-phone-call';
import { styles } from '../styles/global.js';

export default function INFOLINIA ()  {

    const args = {
          number: "48665696372", 
          prompt: false, 
          skipCanOpen: true 
      }

    return (
      <Card>
      <Card.Content>
      <Text style={styles.tabs_bold}>Szukasz pomocy ?</Text>
      </Card.Content>
        <Drawer.Item
        style={style.Button}
        icon="phone"
        abelStyle={{fontSize: 18}} 
        label="+48 665 696 372"
        onPress={() => {call(args).catch(console.error);}}
        />
        <Drawer.Item
        style={style.Button}
        icon="email"
        label="lukaszchwalisz@proton.me"
        onPress={() => {
        Linking.openURL('mailto:lukaszchwalisz@proton.me')}}
        />
        <Drawer.Item
        style={style.Button}
        icon="clipboard-text-outline"
        label="Kwestionariusz form i skutków mobbingu."
        onPress={() => {
          Linking.openURL('https://lukaszchwalisz.pythonanywhere.com/testy/kwestmobbing')
        }}/>


      </Card>
    )
};

const style = StyleSheet.create({
    Button: {
      flex: 1,
      padding:0,
      textAlign: "justify",
      marginVertical:2,
      marginHorizontal:2.5,
      // borderWidth: 0.5,
      // borderTopRightRadius:20,
      // borderBottomRightRadius:20,
      // borderBlockColor:"red",
    }
  });