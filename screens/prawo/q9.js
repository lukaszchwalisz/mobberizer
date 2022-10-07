import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q9({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}>
           <Card.Content>
             <Title style={styles.tabs_title}>Czy pracodawca może z pracownikiem bez końca zawierać kolejne umowy na czas określony ?</Title>
             <Paragraph style={styles.tabs_subtitle}>Okres zatrudnienia na czas określony nie może przekraczać 33 miesięcy, a liczba umów nie może przekraczać 3.
              Jeżeli natomiast liczba umów jest większa niż w przepisie, kolejne umowy uznaje się za umowy na czas nieokreślony.
             </Paragraph>
             <Paragraph style={styles.quotes}>
             Art. 25(1) {"\n"}
             § 1. Okres zatrudnienia  na podstawie umowy o pracę na czas określony, a także łączny okres  zatrudnienia na podstawie umów o pracę na czas określony zawieranych
              między tymi samymi stronami stosunku pracy, nie może przekraczać 33 miesięcy, a łączna liczba tych umów nie może przekraczać trzech.{"\n"}
            § 2. Uzgodnienie między stronami w trakcie trwania umowy o pracę  na czas określony dłuższego okresu wykonywania pracy na podstawie tej  umowy uważa się za zawarcie, 
            od dnia następującego po dniu, w którym  miało nastąpić jej rozwiązanie, nowej umowy o pracę na czas określony  w rozumieniu § 1.{"\n"}
            § 3. Jeżeli okres zatrudnienia na podstawie umowy o pracę na czas  określony jest dłuższy niż okres, o którym mowa w§ 1, lub jeżeli liczba zawartych umów jest większa
            niż liczba umów określona w tym przepisie,  uważa się, że pracownik, odpowiednio od dnia następującego po upływie  okresu, o którym mowa w§ 1, lub od dnia zawarcia
              czwartej umowy opracę  na czas określony, jest zatrudniony na podstawie umowy opracę na czas  nieokreślony.
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};