import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function About() {
  return (
         <ScrollView style={styles.contain}>
           <View style={styles.tabs_header}> 
            <Text style={styles.tabs_title}>Mobberizer</Text>  
            <Text style={styles.tabs_subtitle}>to aplikacja mobilna przeznaczona dla osób, które spotkały się z
             niewłaściwymi zachowaniami w pracy o charakterze mobbingowym i poszukują pomocy psychologicznej i
             prawnej, a także podstawowych informacji na temat mobbingu oraz porad jak zachować się z trudnej,
             stresującej sytuacji. {"\n"}
             </Text>
             <Text style={styles.tabs_subtitle}>Wiele osób pada ofiarą zjawiska mobbingu w pracy,
             pomimo tego ma trudności w określeniem tego czy zasadnym jest uznać zachowanie
             przełożonego lub współpracowników za zachowania mobbingowe. Najczęściej w pierwszym
             odruchu odrzuca taką myśl, stara się jak najlepiej wykonywać zadania, realizować się
             w pracy, mając nadzieję, że sytuacja poprawi się. Jednak nie dość, że nie poprawia się
             to zachowania mobbingowe się nasilają. Wtedy stopniowo pojawia się poczucie bezradności,
             braku wpływu, zaczynają się problemy zdrowotne.{"\n"}</Text>
             
             <Text style={styles.tabs_subtitle}>
             W razie dalszych wątpliwości, istnieje możliwość kontaktu z psychologiem pracy ze stowarzyszenia antymobbingowego OSA.  
              {"\n"}</Text>
             </View>

        </ScrollView>
  )
};