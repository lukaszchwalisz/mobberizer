import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q11({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}>
           <Card.Content>
             <Title style={styles.tabs_title}>Ile dni obejmuje długość okresu wypowiedzenia umowy o pracę zawartej na okres próbny ?</Title>
             <Paragraph style={styles.tabs_subtitle}>
             Długość okresu wypowiedzenia umowy o pracę zawartej na okres próbny precyzyjnie wyjaśnia Art 34. KP.{"\n"}
                • 3 dni robocze, jeżeli okres próbny nie przekracza 2 tygodni{"\n"}
                • 1 tydzień, jeżeli okres próbny jest dłuższy niż 2 tygodnie{"\n"}
                • 2 tygodnie, jeżeli okres próbny wynosi 3 miesiące
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};

