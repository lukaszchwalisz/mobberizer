import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q14({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
             <Title style={styles.cards_title}>Gdzie pracownik może się odwołać w razie nieuzasadnionego lub niezgodnego
              z prawem wypowiedzenia umowy przez pracodawcę ?</Title>
             <Paragraph style={styles.cards}>
             Pracownik może się odwołać do sądu pracy (Art. 44 KP) , w ciągu 21 dni od dnia doręczenia pisma wypowiadającego umowę o pracę (Art. 264 KP).
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};

