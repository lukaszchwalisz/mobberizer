import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../styles/global.js';
import { Divider } from 'react-native-paper';


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
  return (
          <ScrollView>

          <View style={styles.tabs_header}>
            <Text style={styles.tabs_title}>Krok po kroku.</Text>
            <Text style={styles.tabs_subtitle}>Kolejne etapy postępowania w zwiazku z pojawianiem się zachowań mobbingowych w miejscu pracy.
            </Text>
          </View>

          <View style={styles.contain}>
          
              <View style={styles.tabs_text}>

              <Krok1 />
              <Divider/>

              <Krok2 />
              <Divider/>   

              <Krok3 />
              <Divider/>   

              <Krok4/>
              <Divider/>   

              <Krok5/>
              <Divider/>   

              </View>
        </View>
    </ScrollView>
    )
};

