import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q22({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}>
           <Card.Content>
             <Title style={styles.tabs_title}>Czy pracodawca jest zobowiązany pokrywać koszty podróży służbowej ?</Title>
             <Paragraph style={styles.tabs_subtitle}>
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
