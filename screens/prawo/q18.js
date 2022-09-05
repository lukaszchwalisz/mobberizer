import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q18({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}> 
           <Card.Content>
             <Title style={styles.tabs_title}>Czy pracownik może rozwiązać umowę o pracę bez wypowiedzenia na podstawie orzeczenia lekarskiego ?</Title>
             <Paragraph style={styles.tabs_subtitle}>
             Tak. Jeżeli pracownik przedłuży orzeczenie lekarskie stwierdzające szkodliwy wpływ wykonywanej pracy na zdrowie pracownika, a pracodawca nie przeniesie
            go w terminie wskazanym w orzeczeniu lekarskim do innej pracy, odpowiedniej ze względu na stan zdrowia, możliwości i kwalifikacje pracownika. 
            (Art. 55 §1  KP)
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};
