import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q2({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}>
           <Card.Content>
           <Title style={styles.tabs_title}>Czy przyzwolenie na nierówne traktowanie, dyskryminację czy molestowanie seksualnego ze strony pracodawcy 
           nie będzie nosiło za sobą konsekwencji prawnych ?{"\n"}</Title>
             <Paragraph style={styles.tabs_subtitle}>Paragrafy §6 i §7 Art. 18 Kodeksu Pracy odnoszą się do molestowania seksualnego, które może stanowić jedną z form
                  niepożądanych zachowań w pracy. Z paragrafu §7 jasno wynika, że podporządkowanie się pracodawcy odnośnie molestowania seksualnego, 
                  jak i podjęcie działań przeciwstawiających się molestowaniu seksualnemu nie niesie za sobą konsekwencji wobec pracownika.
             </Paragraph>
             <Paragraph style={styles.quotes}>
             Kodeks Pracy {"\n"}
            §6. Dyskryminowaniem ze względu na płeć jest także każde niepożądane zachowanie o charakterze seksualnym lub odnoszące się do płci pracownika, którego celem 
            lub skutkiem jest naruszenie godności pracownika, wszczególności stworzenie wobec niego zastraszającej, wrogiej, poniżającej, upokarzającej lub uwłaczającej
            atmosfery; na zachowanie to mogą się składać fizyczne, werbalne lub pozawerbalne elementy (molestowanie seksualne). {"\n"}
            §7. Podporządkowanie się przez pracownika molestowaniu lub molestowaniu seksualnemu, a także podjęcie przez niego działań przeciwstawiających się molestowaniu
            lub molestowaniu seksualnemu nie może powodować jakichkolwiek negatywnych konsekwencji wobec pracownika.
           </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};