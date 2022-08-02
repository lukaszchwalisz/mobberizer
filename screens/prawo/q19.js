import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q19({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
             <Title style={styles.cards_title}>Co może zrobić pracodawca w razie nieuzasadnionego rozwiązania umowy o pracy bez wypowiedzenia przez pracownika ?</Title>
             <Paragraph style={styles.cards}>
             Pracodawca może skierować sprawę do sądu pracy. Pracodawcy przysługuje roszczenie o odszkodowanie. (Art. 611  KP)
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};
