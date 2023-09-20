import React from 'react';
import { StyleSheet } from 'react-native';
import { Drawer } from 'react-native-paper';
import call from 'react-native-phone-call';

export default function INFOLINIA ()  {

    const args = {
          number: "48665696372", 
          prompt: false, 
          skipCanOpen: true 
      }

    return (
        <Drawer.Item
        style={style.Button}
        icon="phone"
        label="INFOLINIA ANTYMOBBINGOWA"
        onPress={() => {call(args).catch(console.error);}}
        />
    )
};

const style = StyleSheet.create({
    Button: {
      flex: 1,
      padding:10,
      textAlign: "justify",
      marginVertical:5,
      marginHorizontal:20,
      borderWidth: 0.5,
      borderRadius: 20,
      borderBlockColor:"red",
    }
  });