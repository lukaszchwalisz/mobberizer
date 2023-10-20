import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Avatar, Card, Divider, IconButton } from 'react-native-paper';
import call from 'react-native-phone-call';

export default function Kontakt() {

  const argslc = {
    number: "48665696372", 
    prompt: false, 
    skipCanOpen: true 
    }

  const argskm = {
    number: "48665751559", 
    prompt: false, 
    skipCanOpen: true 
    }

  return (
         <ScrollView style={styles.contain}>
          <View style={styles.tabs_header}> 
             <Image
              style={{ flex: 1, width: '100%', height: 300, marginBottom: 20, borderRadius: 10 }}
              source={
                require('../../assets/images/image45.png')
              }
            />

            <Card style={style.Button}>

            <Card.Content>
              <Avatar.Image size={60} source={require('../../assets/images/lch.png')} />
              <Text style={styles.tabs_title}>{"\n"}Łukasz Chwalisz</Text>
              <Text style={styles.tabs_subtitle}>obsługa techniczna i merytoryczna aplikacji</Text>
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
              <Divider/>
            <View><Text>{"\n"}</Text></View>

            <Card.Content>
              <Avatar.Image size={60} source={require('../../assets/images/km0.jpg')} />
              <Text style={styles.tabs_title}>{"\n"}Kasia Menke</Text>
              <Text style={styles.tabs_subtitle}>fotografia, gobeliny</Text>
            </Card.Content>
              <Card.Actions>
                <IconButton
                icon="email"
                size={30}
                onPress={() => {
                  Linking.openURL('mailto:katarzyna.menke@wp.pl')}}
                />
                <IconButton
                  icon="phone"
                  size={30}
                  onPress={() => {call(argskm).catch(console.error);}}
                />
              </Card.Actions>
                </Card>
          </View>
        </ScrollView>
  )
};

const style = StyleSheet.create({
  Button: {
    flex: 1,
    padding:10,
    textAlign: "justify",
    borderWidth: 0.5,
    borderRadius: 10,
    elevation:0,
},
});