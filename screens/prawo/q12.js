import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q12({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
             <Title style={styles.cards_title}>Ile dni obejmuje długość okresu wypowiedzenia umowy o pracę zawartej na czas nieokreślony
              lub określony uzależniony od okresu zatrudnienia o danego pracodawcy ?</Title>
             <Paragraph style={styles.cards}>
             Według Art.36 KP okresy wypowiedzenia wynoszą odpowiednio:{"\n"}
            • 2 tygodnie, jeżeli pracownik był zatrudniony krócej niż 6 miesięcy{"\n"}
            • 1  miesiąc, jeżeli pracownik był zatrudniony co najmniej 6 miesięcy{"\n"}
            • 3 miesiące, jeżeli pracownik był zatrudniony co najmniej 3 lata
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};

