import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q17({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}>
           <Card.Content>
             <Title style={styles.tabs_title}>W jakich innych sytuacjach niż wina pracownika, pracownik może rozwiązać umowę o pracę bez wypowiedzenia ?</Title>
             <Paragraph style={styles.tabs_subtitle}>
             Według Art.53 §1  KP:{"\n"}
            • niezdolność do pracy na skutek choroby trwa dłużej niż 3 miesiące (w wypadku zatrudnienia krótszego niż 6 miesięcy){"\n"}
            • w razie usprawiedliwionej nieobecności pracownika w pracy z innych przyczyn niż wymienione wyżej{"\n"}
            </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};
