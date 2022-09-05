import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q24({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}>
           <Card.Content>
             <Title style={styles.tabs_title}>Ile wynosi wolna od potrąceń kwota wynagrodzenia za pracę ?</Title>
             <Paragraph style={styles.tabs_subtitle}>
             Wysokość kwoty wynagrodzenia wolnej od potrąceń określa Art. 87 1. §1:{"\n"}
            Wolna od potrąceń jest kwota wynagrodzenia za pracę wwysokości:{"\n"}
            1) minimalnego wynagrodzenia za pracę, ustalanego napodstawie  odrębnych przepisów, przysługującego pracownikom zatrudnionym wpełnym 
            wymiarze czasu pracy, po odliczeniu składek na ubezpieczenie społeczne,  zaliczki na podatek dochodowy od osób fizycznych oraz wpłat dokonywanych 
            do pracowniczego planu kapitałowego, jeżeli pracownik nie zrezygnował z ich dokonywania - przy potrącaniu sum egzekwowanych namocy tytułów 
            wykonawczych na pokrycie należności innych niż świadczenia  alimentacyjne;{"\n"}
            2) 75% wynagrodzenia określonego wpkt 1 - przy potrącaniu zaliczek pieniężnych udzielonych pracownikowi;{"\n"}
            3) 90% wynagrodzenia określonego wpkt 1 - przy potrącaniu kar pieniężnych przewidzianych wart. 108. {"\n"}
            §2. Jeżeli pracownik jest zatrudniony wniepełnym wymiarze czasu  pracy, kwoty określone w§1 ulegają zmniejszeniu proporcjonalnie do  wymiaru czasu pracy.
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};
