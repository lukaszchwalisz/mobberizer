import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q23({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
             <Title style={styles.cards_title}>Czy pracownikowi na czas niewykonywania pracy przysługuje wynagrodzenie ?</Title>
             <Paragraph style={styles.cards}>
             Zgodnie z Art. 81. § 1 KP, pracownikowi za czas niewykonywania pracy,  jeżeli był gotów do jej wykonywania, a doznał przeszkód z przyczyn 
            dotyczących pracodawcy, przysługuje 60% wynagrodzenia. Jeżeli przestój nastąpił z winy pracownika, wynagrodzenie nie przysługuje (Art. 81. § 2).
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};
