import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q29({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}>
           <Card.Content>
             <Title style={styles.tabs_title}>Jakie roszczenia może wystosować pracownik wobec pracodawcy z tytułu doznawanego mobbingu ?</Title>
             <Paragraph style={styles.tabs_subtitle}>
            W art. 943 §3 i  § 4 KP ustawodawca określił jakiego rodzaju rozszczenia przysługują pracownikowi:{"\n"}
            §3. Pracownik, u którego mobbing wywołał rozstrój zdrowia, może  dochodzić od pracodawcy odpowiedniej sumy tytułem zadośćuczynienia  
            pieniężnego za doznaną krzywdę.{"\n"}
            § 4. Pracownik, który doznał mobbingu lub wskutek mobbingu rozwiązał  umowę opracę, ma prawo dochodzić od pracodawcy odszkodowania
            wwysokości nie niższej niż minimalne wynagrodzenie za pracę, ustalane  napodstawie odrębnych przepisów.
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};
