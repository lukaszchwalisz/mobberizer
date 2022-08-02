import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q3({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
           <Title style={styles.cards_title}>Czy pracodawca może dowolnie wynagradzać różnych pracowników za pracę jednakowej wartości ?</Title>
             <Paragraph style={styles.cards}>Według Art. 18(3c). Kodeksu Pracy takie praktyki naruszają zasadę równego traktowania w zatrudnieniu.
              Osoba, wobec której ta zasada została naruszona ma prawo do odszkodowania. Powołanie się na zasadę nierównego traktowania nie może
              być później powodem do niekorzystnego traktowania pracownika.
             </Paragraph>
             <Paragraph style={styles.quotes}>
            Kodeks Pracy Art. 18(3c) {"\n"}
            § 1. Pracownicy mają prawo do jednakowego wynagrodzenia za jednakową pracę lub za pracę o jednakowej wartości.{"\n"}
            § 2. Wynagrodzenie, o którym mowa w § 1, obejmuje wszystkie składniki wynagrodzenia, bez względu na ich nazwę i charakter, a także inne świadczenia związane z
            pracą, przyznawane pracownikom w formie pieniężnej lub w innej formie niż pieniężna.{"\n"}
            § 3. Pracami o jednakowej wartości są prace, których wykonywanie wymaga od pracowników porównywalnych kwalifikacji zawodowych, potwierdzonych dokumentami przewidzianymi
            w odrębnych przepisach lub praktyką i doświadczeniem zawodowym, a także porównywalnej odpowiedzialności i wysiłku.{"\n"}
            Art. 18(3d). Osoba, wobec której pracodawca naruszył zasadę równego traktowania w zatrudnieniu, ma prawo do odszkodowania w wysokości nie niższej niż minimalne 
            wynagrodzenie za pracę, ustalane na podstawie odrębnych przepisów.{"\n"}
            Art. 18(3e). § 1. Skorzystanie przez pracownika z uprawnień przysługujących z tytułu naruszenia zasady równego traktowania w zatrudnieniu nie może być podstawą 
            niekorzystnego traktowania pracownika, a także nie może powodować jakichkolwiek negatywnych konsekwencji wobec pracownika, zwłaszcza nie może stanowić przyczyny
            uzasadniającej wypowiedzenie przez pracodawcę stosunku pracy lub jego rozwiązanie bez wypowiedzenia.
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};