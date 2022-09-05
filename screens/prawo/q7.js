import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q7({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}>
           <Card.Content>
             <Title style={styles.tabs_title}>Czy pracodawca może kontrolować służbową pocztę elektroniczną ?</Title>
             <Paragraph style={styles.tabs_subtitle}>Tak, pracodawca może wprowadzić kontrolę służbowej poczty elektronicznej,
              o ile nie narusza on tajemnicy korespondencji oraz innych dóbr osobistych pracownika.
             </Paragraph>
             <Paragraph style={styles.quotes}>
              Kodeks Pracy Art.22(3). {"\n"}
              §1. Jeżeli jest to niezbędne  do zapewnienia organizacji pracy umożliwiającej pełne wykorzystanie  czasu pracy oraz właściwego użytkowania udostępnionych 
              pracownikowi  narzędzi pracy, pracodawca może wprowadzić kontrolę służbowej poczty  elektronicznej pracownika (monitoring poczty elektronicznej).{"\n"}
              §2. Monitoring poczty elektronicznej nie może naruszać tajemnicy korespondencji oraz innych dóbr osobistych pracownika.
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};