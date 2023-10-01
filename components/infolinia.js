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
      <Text style={style.tabs_bold}>Szukasz pomocy ? Skontaktuj się z nami.</Text>
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

      </Card>
    )
};

const style = StyleSheet.create({
    Button: {
      marginVertical:0,
      marginHorizontal:10,
    },
    tabs_bold: {
      padding: 0,
      color: "magenta",
      fontSize: 12,
      fontFamily: "Montserrat-Bold",
  },
  });