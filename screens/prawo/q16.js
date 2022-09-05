import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q16({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}>
           <Card.Content>
             <Title style={styles.tabs_title}>W jakiej sytuacji pracodawca może rozwiązać umowę o pracę bez wypowiedzenia z winy pracownika ?</Title>
             <Paragraph style={styles.tabs_subtitle}>
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


