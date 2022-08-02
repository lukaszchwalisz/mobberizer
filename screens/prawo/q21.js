import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q21({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
             <Title style={styles.cards_title}>Czy pracodawca ma prawo kontrolować wykonywanie pracy w domu telepracownika ?</Title>
             <Paragraph style={styles.cards}>
             Jeżeli praca jest wykonywana w domu pracownika, pracodawca ma prawo przeprowadzać kontrolę:{"\n"}
            • wykonywania pracy{"\n"}
            • inwentaryzacji, konserwacji, serwisu, naprawy oraz instacji sprzętu koniecznego do wykonywania telepracy{"\n"}
            • w zakresie bezpieczeństwa i higieny pracy{"\n"}
            Przeprowadzenie kontroli w miejscu zamieszkania telepracownika może nastąpić za uprzednią zgodą telepracownika wyrażoną na piśmie albo za pomocą 
            środków komunikacji elektronicznej bądź innych środków przekazu na odległość (Art. 6714.§2).
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};


