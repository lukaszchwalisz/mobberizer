import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q28({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}>
           <Card.Content>
             <Title style={styles.tabs_title}>Czy pracownik ma prawo rozwiązać umowę o pracę z powodu doznawania mobbingu w miejscu pracy ?</Title>
             <Paragraph style={styles.tabs_subtitle}>
            Tak, pracownik ma prawo rozwiązać umowę o pracy z powodu mobbingu. Kodeks pracy nakazuje w tym wypadku wskazać na przyczynę. {"\n"}
            W art. 943 §5 KP: „Oświadczenie pracownika orozwiązaniu umowy o pracę powinno  nastąpić na piśmie z podaniem przyczyny, o której mowa w §2,
            uzasadniającej rozwiązanie umowy.”

             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};
