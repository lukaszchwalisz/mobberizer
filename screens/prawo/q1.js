import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q1({ navigation, route }) {
  return (
         <ScrollView  style={styles.contain}>
           <Card  style={styles.contain}>
           <Card.Content>
             <Title style={styles.tabs_title}>Na czym polega zasada równego traktowania w zatrudnieniu ?{"\n"}</Title>
             <Paragraph style={styles.tabs_subtitle}>Na pytanie odpowiada II a rozdział w kodeksie pracy „Równe traktowanie w zatrudnieniu”.{"\n"}
             </Paragraph>
             <Paragraph style={styles.quotes}>
             Kodeks Pracy  Art. 18(3a). {"\n"}
             § 1. Pracownicy powinni być równo traktowani w zakresie nawiązania i rozwiązania stosunku pracy,
              warunków zatrudnienia, awansowania oraz dostępu do szkolenia w celu podnoszenia kwalifikacji zawodowych,
              w szczególności bez względu na płeć, wiek, niepełnosprawność, rasę, religię, narodowość, przekonania polityczne, przynależność związkową, pochodzenie etniczne,
               wyznanie, orientację seksualną, zatrudnienie na czas określony lub nieokreślony, zatrudnienie w pełnym lub w niepełnym wymiarze czasu pracy. {"\n"}
             §2. Równe traktowanie w zatrudnieniu oznacza niedyskryminowanie w jakikolwiek sposób, bezpośrednio lub pośrednio, z przyczyn określonych w §1.{"\n"}
             §3. Dyskryminowanie bezpośrednie istnieje wtedy, gdy pracownik z jednej lub z kilku przyczyn określonych w §1 był, jest lub mógłby być traktowany w porównywalnej sytuacji mniej korzystnie niż inni pracownicy.{"\n"}
             §4. Dyskryminowanie pośrednie istnieje wtedy, gdy na skutek pozornie neutralnego postanowienia, zastosowanego kryterium lub podjętego działania występują lub mogłyby wystąpić niekorzystne dysproporcje
             albo szczególnie niekorzystna sytuacja w zakresie nawiązania i rozwiązania stosunku pracy, warunków zatrudnienia, awansowania oraz dostępu do szkolenia w celu podnoszenia kwalifikacji
             zawodowych wobec wszystkich lub znacznej liczby pracowników należących do grupy wyróżnionej ze względu na jedną lub kilka przyczyn określonych w § 1, chyba że postanowienie, kryterium lub
             działanie jest obiektywnie uzasadnione ze względu na zgodny z prawem cel, który ma być osiągnięty, a środki służące osiągnięciu tego celu są właściwe i konieczne.{"\n"}
             §5. Przejawem dyskryminowania w rozumieniu §2 jest także:{"\n"}
             1) działanie polegające na zachęcaniu innej osoby do naruszenia zasady równego traktowania w zatrudnieniu lub nakazaniu jej naruszenia tej zasady;{"\n"}
             2) niepożądane zachowanie, którego celem lub skutkiem jest naruszenie godności pracownika i stworzenie wobec niego zastraszającej, wrogiej, poniżającej, upokarzającej lub uwłaczającej atmosfery (molestowanie).
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};