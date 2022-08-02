import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q25({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
             <Title style={styles.cards_title}>Czy pracodawca jest zobowiązany do przeciwdziałania dyskryminacji ?</Title>
             <Paragraph style={styles.cards}>
             W rozdziale I „Obowiązki pracodawcy” KP w art. 94 2b pracodawca jest zobowiązany:{"\n"}
            - przeciwdziałać dyskryminacji w zatrudnieniu, w szczególności ze  względu na płeć, wiek, niepełnosprawność, rasę, religię, narodowość, 
            przekonania polityczne, przynależność związkową, pochodzenie etniczne,  wyznanie, orientację seksualną, atakże ze względu na zatrudnienie
            na  czas określony lub nieokreślony albo wpełnym lub wniepełnym wymiarze czasu pracy


             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};

