import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q19({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}>
           <Card.Content>
             <Title style={styles.tabs_title}>Co może zrobić pracodawca w razie nieuzasadnionego rozwiązania umowy o pracy bez wypowiedzenia przez pracownika ?</Title>
             <Paragraph style={styles.tabs_subtitle}>
             Pracodawca może skierować sprawę do sądu pracy. Pracodawcy przysługuje roszczenie o odszkodowanie. (Art. 611  KP)
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};
