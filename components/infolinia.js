import React from 'react';
import { View, Linking, Text, StyleSheet } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import call from 'react-native-phone-call';
import { styles } from '../styles/global.js';

export default function INFOLINIA ()  {

    const argslc = {
          number: "48665696372", 
          prompt: false, 
          skipCanOpen: true 
      }

    return (
      <Card>
      <Card.Content>
      <Text style={styles.tabs_subtitle}>Szukasz pomocy ? Skontaktuj się z nami.</Text>
      </Card.Content>
      <Card.Actions>
      <IconButton
      icon="email"
      size={30}
      onPress={() => {
        Linking.openURL('mailto:lukaszchwalisz@proton.me')}}
      />
      <IconButton
        icon="phone"
        size={30}
        onPress={() => {call(argslc).catch(console.error);}}
      />
      </Card.Actions>

      
      </Card>
    )
};

const style = StyleSheet.create({
    Button: {
      marginVertical:0,
      marginHorizontal:10,
    },
  });