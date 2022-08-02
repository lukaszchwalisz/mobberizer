import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q18({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
             <Title style={styles.cards_title}>Czy pracownik może rozwiązać umowę o pracę bez wypowiedzenia na podstawie orzeczenia lekarskiego ?</Title>
             <Paragraph style={styles.cards}>
             Tak. Jeżeli pracownik przedłuży orzeczenie lekarskie stwierdzające szkodliwy wpływ wykonywanej pracy na zdrowie pracownika, a pracodawca nie przeniesie
            go w terminie wskazanym w orzeczeniu lekarskim do innej pracy, odpowiedniej ze względu na stan zdrowia, możliwości i kwalifikacje pracownika. 
            (Art. 55 §1  KP)
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};
