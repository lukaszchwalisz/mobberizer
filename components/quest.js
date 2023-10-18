import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { styles } from '../styles/global.js';

export default function Quest() {
    let [name, setName] = useState("");

    const html = `
      <html>
        <body>
          <h1>Hi ${name}</h1>
          <p style="color: red;">Hello. Bonjour. Hola.</p>
        </body>
      </html>
    `;
  
    let generatePdf = async () => {
      const file = await printToFileAsync({
        html: html,
        base64: false
      });
  
      await shareAsync(file.uri);
    };
  
    return (
      <View style={style.container}>
        <Text style={styles.tabs_text}> Jak masz na imię ?</Text>
        <TextInput value={name} placeholder="Name" style={style.textInput} onChangeText={(value) => setName(value)} />
        
        
        <Button title="Generate PDF" onPress={generatePdf} />
      </View>
    );
  }
  
  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
      alignSelf: "stretch",
      padding: 8,
      margin: 8
    }
  });