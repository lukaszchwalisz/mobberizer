import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q15({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
             <Title style={styles.cards_title}>Czy pracodawca może odmówić ponownego zatrudnienia pracownika przywróconego do pracy decyzją sądu ?</Title>
             <Paragraph style={styles.cards}>
            Zgodnie z Art. 30. § 1. KP rozwiązać umowę o pracę można na kilka sposobów:{"\n"}
            Pracodawca może nie zatrudnić pracownika przywróconego do pracy w sytuacji, 
            kiedy w ciągu 7 dni od przywrócenia do pracy nie zgłosił gotowości niezwłocznego
            podjęcia pracy, chyba że przekroczenie tego terminu nastąpiło z przyczyn niezależnych
            od pracownika (Art. 48 §1 KP).
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};



