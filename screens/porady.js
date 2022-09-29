import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../styles/global.js';
import { List, Divider } from 'react-native-paper';


const Krok1 = () => (
      <View>
      <Text style={styles.tabs_bold}>Krok 1. Diagnoza sytuacji.</Text>
      <Text style={styles.tabs_text}>
      - formy zachowań mobbingowych {"\n"}
        - skutki zdrowotne{"\n"}
        - dotychczasowy czas trwania {"\n"}
        - kwestionariusz
      </Text>
      </View>
)

const Krok2 = () => (
      <View>
      <Text style={styles.tabs_bold}>Krok 2. Zgłoszenie problemu.</Text>
      <Text style={styles.tabs_text}>
      - rozmowa z osobą bezpośrednio stosujacą zachowania mobbingowe{"\n"}
      - prośba o rozmowę skierowana do pracodawcy {"\n"}
      - złożenie pisma opisującego dotychczasowe zachowania mobbingowe z prośbą o reakcją zgodnie z KP
      </Text>
      </View>
)

const Krok3 = () => (
      <View>
      <Text style={styles.tabs_bold}>Krok 3. Wybór strategii.</Text>
      <Text style={styles.tabs_text}>
      <Text style={styles.cards_bold}>Pozytywna:{"\n"}</Text>
      - działania mające na celu zaprzestanie stosowania mobbingu{"\n"}
      - wprowadzenie koniecznych zmian w organizacji pracy{"\n"}{"\n"}
      <Text style={styles.cards_bold}>Negatywna:{"\n"}</Text>
      - nie udzielenie odpowiedzi{"\n"}
      - odpowiedź wymijająca{"\n"}
      - kontynuowanie działań mobbingowych
      </Text>
      </View>
)
const Krok4 = () => (
      <View>
      <Text style={styles.tabs_bold}>Krok 4. Podjęcie kolejnych działań.</Text>
      <Text style={styles.tabs_text}>
      - pismo ws mobbingu w pracy do wyższej instancji, kardy zarządzającej, ministerstwa itd.{"\n"}
      - prośba o powołanie przez pracodawcę komisji pojednawczej{"\n"}
      - zawiadomienie Społecznego Inspektora Pracy/związków zawodowych{"\n"}
      - zawiadomienie Państwowej Inspekcji Pracy{"\n"}
      - skierowanie sprawy do Sądu Pracy
      </Text>
      </View>
)
const Krok5 = () => (
    <View>
    <Text style={styles.tabs_bold}>Krok 5. Przygotowanie mentalne.</Text>
    <Text style={styles.tabs_text}>
    - obiektywne podejście do problemu, zdystansowanie{"\n"}
    - wynotowanie wszystkich działań mobbingowych{"\n"}
    - zebranie dokumentacji lekarskiej, psychiatrycznej{"\n"}
    - kontakt ze świadkami mobbingu{"\n"}
    - przygotowanie mentalne do ochrony swoich praw w sądzie{"\n"}
    - korzystanie z doświadczenia innych osób w podobnej sytuacji
    </Text> 
    </View>
)

const Header = () => {
  return (
    <View style={styles.tabs_header}>
      <Text style={styles.tabs_title}>Krok po kroku </Text>
      <Text style={styles.tabs_subtitle}>Kolejne kroki prowadzące do poradzenia sobie z sytuacją mobbingową w pracy. 
      </Text>
    </View>

  )
}

export default function Porady({ navigation, route }) {

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (

    <ScrollView style={styles.contain}>
      <Header />
      <List.AccordionGroup>
      <List.Accordion title="Diagnoza sytuacji" id="1" theme={{colors: {text: "#50FFD0"}}} 
      style={{backgroundColor:"#2f2f2f"}} >
        <Krok1 />
      </List.Accordion>
      <List.Accordion title="Zgłoszenie problemu" id="2"theme={{colors: {text: "#50FFD0"}}} 
      style={{backgroundColor:"#2f2f2f"}}>
        <Krok2 />
      </List.Accordion>
        <List.Accordion title="Wybór strategii" id="3"theme={{colors: {text: "#50FFD0"}}} 
      style={{backgroundColor:"#2f2f2f"}}>
        <Krok3 />
      </List.Accordion>
        <List.Accordion title="Podjęcie kolejnych działań" id="4"theme={{colors: {text: "#50FFD0"}}} 
      style={{backgroundColor:"#2f2f2f"}}>
          <Krok4 />
        </List.Accordion>
      <List.Accordion title="Przygotowanie mentalne" id="5"theme={{colors: {text: "#50FFD0"}}} 
      style={{backgroundColor:"#2f2f2f"}}>
          <Krok5 />
      </List.Accordion>
      <List.Accordion title="Podsumowanie" id="6"  theme={{colors: {text: "#50FFD0"}}} 
      style={{backgroundColor:"#2f2f2f"}}>
          <Krok1 />
          <Krok2 />
          <Krok3 />
          <Krok4 />
          <Krok5 />
      </List.Accordion>
      </List.AccordionGroup>
    </ScrollView>
  )
};

