import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q20({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
             <Title style={styles.cards_title}>Jakie są obowiązki pracodawcy w zakresie zatrudniania pracowników w formie telepracy ?</Title>
             <Paragraph style={styles.cards}>
             Zgodnie z Art. 30. § 1. KP rozwiązać umowę o pracę można na kilka sposobów:{"\n"}
            W rodziale IIa KP określone zostały warunki związane z zatrudnieniem pracownika w formie telepracy czyli pracy wykonywanej poza zakładem pracy, 
            z wykorzystaniem środków komunikacji elektronicznej (Art. 675. §1).{"\n"}
            Zgodnie z artykułem 6711.§1, pracodawca jest zobowiązany:{"\n"}
                • dostarczyć pracownikowi sprzęt niezbędny do wykonywania telepracy{"\n"}
                • ubezpieczyć sprzęt{"\n"}
                • pokryć koszty związane z instalacją, serwisem, kesploatacją i konserwacją sprzętu{"\n"}
                • zapewnić pracownikowi pomoc techniczną oraz niezbędne szkolenia w zakrese obsługi sprzętu
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};
