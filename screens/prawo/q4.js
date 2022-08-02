import React from 'react';
import { ScrollView,TouchableOpacity,Text,} from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';
import A from 'react-native-a';



const url_pip="https://www.pip.gov.pl/pl/o-urzedzie/regulacje-prawne/2440,ustawa-o-panstwowej-inspekcji-pracy.html";
const url_sip="https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU19830350163/U/D19830163Lj.pdf";
const url_pis="https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU19850120049/U/D19850049Lj.pdf";


export default function Q4({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
           <Title style={styles.cards_title}>Jakie instytucje państwowe sprawują kontrolę nad przestrzeganiem prawa pracy ?</Title>
             <Paragraph style={styles.cards}>Instytucje, do których można się zwrócić z prośbą o pomoc o odnośnie kontroli
              przestrzegania prawa i higieny pracy: Państwowa Inspekcja Pracy oraz Państwowa Inspekcja Sanitarna. 
              Na terenie zakładu może powstać także Społeczna Inspekcja Pracy na podstawie odrębnych przepisów.
             </Paragraph>
             <Paragraph style={styles.quotes}>
            Kodeks Pracy Art. 18(4) {"\n"}
            § 1. Nadzór i kontrolę przestrzegania prawa pracy, w tym przepisów i zasad bezpieczeństwa i higieny pracy, sprawuje Państwowa Inspekcja Pracy.{"\n"}
            § 2. Nadzór i kontrolę przestrzegania zasad, przepisów higieny pracy i warunków środowiska pracy sprawuje Państwowa Inspekcja Sanitarna.{"\n"}
            § 3. Organizację i zakres działania inspekcji, o których mowa w § 1 i 2, określają odrębne przepisy.{"\n"}
            Art. 18(5). § 1. Społeczną kontrolę przestrzegania prawa pracy, w tym przepisów i zasad bezpieczeństwa i higieny pracy, sprawuje społeczna inspekcja pracy.{"\n"}
            § 2. Organizację, zadania i uprawnienia społecznej inspekcji pracy oraz zasady jej współdziałania z Państwową Inspekcją Pracy i innymi państwowymi organami 
            nadzoru i kontroli określają odrębne przepisy.{"\n"}{"\n"}
            Linki do wspomnianych ustaw: {"\n"}
              <A href={url_pip}>Ustawa o Państwowej Inspekcji Pracy</A>{"\n"}
              <A href={url_sip}>Ustawa o Społecznej Inspekcji Pracy</A>{"\n"}
              <A href={url_pis}>Ustawa o Państwowej Inspekcji Sanitarnej</A>
            </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};