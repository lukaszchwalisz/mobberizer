import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q22({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
             <Title style={styles.cards_title}>Czy pracodawca jest zobowiązany pokrywać koszty podróży służbowej ?</Title>
             <Paragraph style={styles.cards}>
            Pracownikowi przysługują należności na pokrycie kosztów podróży służbowej do miejsca pracy poza miejcowością, w której znajduje się siedziba 
            pracodawcy albo poza stałym miejscem pracy (Art. 775. § 1).{"\n"}
            Warunki wypłacania należności  określa się w układzie zbiorowym pracy lub w regulaminie wynagradzania  albo w umowie o pracę, jeżeli pracodawca
            nie jest objęty układem  zbiorowym pracy lub nie jest obowiązany do ustalenia regulaminu (Art. 775. § 3).
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};
