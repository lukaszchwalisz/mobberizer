import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../styles/global.js';
import { Divider, List } from 'react-native-paper';


const Krok1 = () => (
      <Text style={styles.tabs_text}>
      <Text style={styles.tabs_bold}>Krok 1. Diagnoza sytuacji.{"\n"}{"\n"}</Text>
      - formy zachowań mobbingowych {"\n"}
        - skutki zdrowotne{"\n"}
        - dotychczasowy czas trwania {"\n"}
        - kwestionariusz → [link]
      </Text>
)

const Krok2 = () => (
  <Text style={styles.tabs_text}>
  <Text style={styles.tabs_bold}>Krok 2. Zgłoszenie problemu.{"\n"}{"\n"}</Text>
  - rozmowa z osobą bezpośrednio stosujacą zachowania mobbingowe{"\n"}
  - prośba o rozmowę skierowana do pracodawcy {"\n"}
  - złożenie pisma opisującego dotychczasowe zachowania mobbingowe z prośbą o reakcją zgodnie z KP
  </Text>
)

const Krok3 = () => (
  <Text style={styles.tabs_text}>
  <Text style={styles.tabs_bold}>Krok 3. W oczekiwaniu na odpowiedź.{"\n"}{"\n"}</Text>
  <Text style={styles.cards_bold}>Pozytywna:{"\n"}</Text>
  - działania mające na celu zaprzestanie stosowania mobbingu{"\n"}
  - wprowadzenie koniecznych zmian w organizacji pracy{"\n"}{"\n"}
  <Text style={styles.cards_bold}>Negatywna:{"\n"}</Text>
  - nie udzielenie odpowiedzi{"\n"}
  - odpowiedź wymijająca{"\n"}
  - kontynuowanie działań mobbingowych
  </Text>
)
const Krok4 = () => (
  <Text style={styles.tabs_text}>
  <Text style={styles.tabs_bold}>Krok 4. Dalsze konsekwencje. {"\n"}{"\n"}</Text>
  - pismo ws mobbingu w pracy do wyższej instancji, kardy zarządzającej, ministerstwa itd.{"\n"}
  - prośba o powołanie przez pracodawcę komisji pojednawczej{"\n"}
  - zawiadomienie Społecznego Inspektora Pracy/związków zawodowych{"\n"}
  - zawiadomienie Państwowej Inspekcji Pracy{"\n"}
  - skierowanie sprawy do Sądu Pracy
  </Text>
)
const Krok5 = () => (
  <Text style={styles.tabs_text}>
  <Text style={styles.tabs_bold}>Krok 5. Przygotowanie.{"\n"}{"\n"}</Text>
  - obiektywne podejście do problemu, zdystansowanie{"\n"}
  - wynotowanie wszystkich działań mobbingowych{"\n"}
  - zebranie dokumentacji lekarskiej, psychiatrycznej{"\n"}
  - kontakt ze świadkami mobbingu{"\n"}
  - przygotowanie mentalne do ochrony swoich praw w sądzie{"\n"}
  - korzystanie z doświadczenia innych osób w podobnej sytuacji
  </Text> 
)

export default function Porady({ navigation, route }) {

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (

    <ScrollView>
    <List.AccordionGroup >
    <List.Accordion
        title="Diagnoza sytuacji."
        id="1"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <View><Text>W pierwszym okresie szczególnie zwróć uwagę {"\n"}na:</Text></View>
        <List.Item  title="-  formy zachowań mobbingowych" descriptionStyle={{color: 'red'}}/>
        <List.Item title="-  skutki zdrowotne" />
        <List.Item title="-  dotychczasowy czas trwania" />
      </List.Accordion>

      <List.Accordion
        title="Zgłoszenie problemu."
        id="2"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
       </List.Accordion>

       <List.Accordion
        title="Wybór strategii."
        id="3"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
       </List.Accordion>

       <List.Accordion
        title="Zawiadomienie instytucji."
        id="4"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
       </List.Accordion>

       <List.Accordion
        title="Przygotowanie do procesu."
        id="5"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
       </List.Accordion>
       </List.AccordionGroup>
   
   
     </ScrollView>
  )
};

