import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q16({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
             <Title style={styles.cards_title}>W jakiej sytuacji pracodawca może rozwiązać umowę o pracę bez wypowiedzenia z winy pracownika ?</Title>
             <Paragraph style={styles.cards}>
             Według Art.52 §1 KP:{"\n"}
            • ciężkiego naruszenia podstawowych obowiązków pracowniczych{"\n"}
            • popełnienia przestępstwa przez pracownika, stwierdzonego prawomocnym wyrokiem{"\n"}
            • utraty uprawnień koniecznych do wykonywania pracy na zajmowanym stanowisku
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};


