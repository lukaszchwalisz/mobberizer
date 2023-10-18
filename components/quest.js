import React from 'react'
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { useState } from 'react';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { styles } from '../styles/global.js';

export default function Quest() {
    let [name, setName] = useState("");
    let [surname, setSurname] = useState("");
    let [login, setLogin] = useState("");


    const html = `
      <html>
        <body>
          <h1>Hi ${name} ${surname}</h1>
          <h1>Twój login to: ${login}</h1>
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
        <Text style={styles.tabs_text}>{"\n"}Podstawowe informacje.</Text>
        <Text style={styles.tabs_subtitle}>Wypełnij kwestionariusz spokojnie, bez pośpiechu, starając się odpowiedzieć na wszystkie pytania.</Text>
        <TextInput value={name} placeholder="Imię" style={style.textInput} onChangeText={(value) => setName(value)} />
        <TextInput value={surname} placeholder="Nazwisko" style={style.textInput} onChangeText={(value) => setSurname(value)} />
        <TextInput value={login} placeholder="Login" style={style.textInput} onChangeText={(value) => setLogin(value)} />
      
        <Button title="Zapisz" onPress={generatePdf} />
      </View>
    );
  }
  
  const style = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    textInput: {
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderWidth: .7,
        borderRadius: 10,
    },
    button: {
        padding:10,
        borderWidth: .7,
        borderRadius: 10,
        textAlign: "justify",
      },
  });