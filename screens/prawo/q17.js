import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q17({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
             <Title style={styles.cards_title}>W jakich innych sytuacjach niż wina pracownika, pracownik może rozwiązać umowę o pracę bez wypowiedzenia ?</Title>
             <Paragraph style={styles.cards}>
             Według Art.53 §1  KP:{"\n"}
            • niezdolność do pracy na skutek choroby trwa dłużej niż 3 miesiące (w wypadku zatrudnienia krótszego niż 6 miesięcy){"\n"}
            • w razie usprawiedliwionej nieobecności pracownika w pracy z innych przyczyn niż wymienione wyżej{"\n"}
            </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};
