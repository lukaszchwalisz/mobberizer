import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Drawer } from 'react-native-paper';
import call from 'react-native-phone-call';

export default function Kontakt() {

  const args = {
    number: "48665696372", 
    prompt: false, 
    skipCanOpen: true 
    }

  return (
         <ScrollView style={styles.contain}>
           <View style={styles.tabs_header}> 
             {/* <Text style={styles.tabs_title}>Kontakt.{"\n"}</Text> */}
             <Image
              style={{ flex: 1, width: '100%', height: 300, marginBottom: 20, borderRadius: 10 }}
              source={
                require('../../assets/images/image45.png')
              }
            />
            <View><Text>{"\n"}</Text></View>  
             <Text style={style.tabs_title}>Łukasz Chwalisz</Text>
             <Text style={style.tabs_subtitle}>obsługa techniczna i merytoryczna aplikacji{"\n"}
             </Text>
             <Drawer.Item
                style={style.Button}
                icon="email"
                label="lukaszchwalisz@proton.me"
                onPress={() => {
                Linking.openURL('mailto:lukaszchwalisz@proton.me')}}
                />
              <Drawer.Item
              style={style.Button}
              icon="phone"
              label="+48 665 696 372"
              onPress={() => {call(args).catch(console.error);}}
              />
              
            <View><Text>{"\n"}</Text></View>

             <Text style={style.tabs_title}>Kasia Menke</Text>
             <Text style={style.tabs_subtitle}>fotografia, gobeliny{"\n"}
             </Text>

             <Drawer.Item
                style={style.Button}
                icon="email"
                label="katarzyna.menke@wp.pl"
                onPress={() => {
                Linking.openURL('mailto:katarzyna.menke@wp.pl')}}
                />
              <Drawer.Item
              style={style.Button}
              icon="phone"
              label="+48 665 751 559"
              onPress={() => {call(args).catch(console.error);}}
              />
             </View>
        </ScrollView>
  )
};

const style = StyleSheet.create({
  Button: {
    marginVertical:0,
    marginHorizontal:0,
  },
  tabs_title: {
      color: '#22223b',
      fontSize: 18,
      fontFamily: "PoltawskiNowy-Medium",
  },
  tabs_subtitle: {
      padding: 0,
      color: "#9a8c98",
      fontSize: 14,
      fontFamily: "PoltawskiNowy-Regular",
  },
});