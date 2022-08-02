import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q5({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
             <Title style={styles.cards_title}>Czy możliwa jest zmiana zatrudnienia pracownika z umowy o pracę na umowę cywilnoprawną ?</Title>      
             <Paragraph style={styles.cards}>W art.22 §1(2)
            KP ustawodawca jasno stwierdza, że taka praktyka jest niedopuszczalna.
            </Paragraph>
             <Paragraph style={styles.quotes}>
            Kodeks Pracy Art. 22 {"\n"}
            § 1. Przez nawiązanie stosunku pracy pracownik zobowiązuje się do
            wykonywania pracy określonego rodzaju na rzecz pracodawcy i pod jego
            kierownictwem oraz  w miejscu  i czasie  wyznaczonym  przez pracodawcę,
            a pracodawca – do zatrudniania pracownika za wynagrodzeniem. {"\n"}
            § 1(1). Zatrudnienie w warunkach określonych w § 1 jest zatrudnieniem na
            podstawie stosunku pracy, bez względu na nazwę zawartej przez strony umowy. {"\n"}
            § 1(2). Nie jest dopuszczalne zastąpienie umowy o pracę umową cywilnoprawną
            przy zachowaniu warunków wykonywania pracy, określonych w § 1.
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};