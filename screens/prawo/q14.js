import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q14({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}>
           <Card.Content>
             <Title style={styles.tabs_title}>Gdzie pracownik może się odwołać w razie nieuzasadnionego lub niezgodnego
              z prawem wypowiedzenia umowy przez pracodawcę ?</Title>
             <Paragraph style={styles.tabs_subtitle}>
             Pracownik może się odwołać do sądu pracy (Art. 44 KP) , w ciągu 21 dni od dnia doręczenia pisma wypowiadającego umowę o pracę (Art. 264 KP).
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};

