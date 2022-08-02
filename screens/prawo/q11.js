import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q11({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
             <Title style={styles.cards_title}>Ile dni obejmuje długość okresu wypowiedzenia umowy o pracę zawartej na okres próbny ?</Title>
             <Paragraph style={styles.cards}>
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

