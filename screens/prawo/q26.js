import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q26({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}>
           <Card.Content>
             <Title style={styles.tabs_title}>Czy pracodawca jest zobowiązany do przeciwdziałania mobbingowi ?</Title>
             <Paragraph style={styles.tabs_subtitle}>
            W rozdziale I „Obowiązki pracodawcy” KP w art. 943 §1 pracodawca jest zobowiązany przeciwdziałać mobbingowi. Ustawodawca jednak nie określił
            precyzyjne w jaki sposób pracodawca ma przeciwdziałań mobbingowi.{"\n"}
            Zalecane jest, aby wyjaśnianie sytuacji mobbingowej w pracy odbywało się poprzez postępowanie pojednawczej ujęte dalej w Kodeksie Pracy. 
            Najczęściej jednak powoływane komisje antymobbigowe, których ramy działania, zasady powoływania oraz realizacja wytycznych na podstawie wniosków
            z postępowania nie są ujęte w KP.
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};
