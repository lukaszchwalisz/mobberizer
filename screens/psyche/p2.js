import React from 'react';
import { ScrollView, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Divider } from 'react-native-paper';

export default function P2({ navigation, route }) {
  return (
         <ScrollView>
          
          <View style={styles.contain}>
          <View style={styles.tabs_header}>
            <Text style={styles.tabs_title}>Wypalenie zawodowe</Text>
            <Text style={styles.tabs_subtitle}>W jaki sposób wykryć pierwsze sygnały wypalenia zawodowego?
            </Text>
          </View>

          <View style={styles.tabs_text}>

            <Text style={styles.tabs_text}>
             <Text style={styles.cards_bold}>Wypalenie zawodowe </Text>
             – stan fizycznego, emocjonalnego i umysłowego wyczerpania przejawiają-
            cego się przez chroniczne zmęczenie. Towarzyszy mu negatywna postawa wobec pracy, ludzi i życia,
            poczucie bezradności i beznadziejności oraz obniżona samoocena, która przejawia się poczuciem
            własnej nieadekwatności, niekompetencji i zniechęceniem do pracy.
             </Text>
             <Divider/>

             <Text style={styles.tabs_text}>
             <Text style={styles.tabs_bold}>Główne czynniki:{"\n"}</Text>
             – stawanie sobie wysokich wymagań przy nierealistycznej ocenie wpływu na sytuację{"\n"}
             – działanie niezgodne z własnymi wartościami{"\n"}
             – perfekcjonizm i nadodpowiedzialność{"\n"}
             – defensywna postawa wobec trudności wyolbrzymianie porażek{"\n"}
             – brak poczucia relacji partnerskich i systemu wsparcia{"\n"}
             – słaba organizacja czasu pracy oraz życia poza pracą{"\n"}
             </Text>
            <Divider/>
            
             <Text style={styles.tabs_text}>
             <Text style={styles.tabs_bold}>Trójwymiarowa teoria wypalenia zawodowego{"\n"}{"\n"}</Text>
             <Text style={{fontStyle:'italic'}}>(za: Christina Maslach){"\n"}{"\n"}</Text> 

             <Text style={styles.cards_bold}>Emocjonalne wyczerpanie {"\n"}</Text>
             - uczucie pustki i braku sił wywołane subiektywnie nadmiernymi wymaganiami
              psychologicznymi i emocjonalnymi{"\n"}{"\n"}
              <Text style={styles.cards_bold}>Depersonalizacja {"\n"}</Text>
             - poczucie bezduszności, bezosobowości, obniżenie wrażliwości wobec in-
            nych, cynizm.{"\n"}{"\n"}
            <Text style={styles.cards_bold}>Obniżenie oceny własnych dokonań, negatywne przewartościowanie {"\n"}</Text>
             - poczucie zmarnowania czasu i wysiłku na swoim stanowisku pracy.
            Wypalenie zawodowe nie następuje z dnia na dzień. Jest to proces stopniowy systematyczny, w
            którym można wyróżnić kolejne etapy.
             </Text>
             <Divider/>

             <Text style={styles.tabs_text}>
             <Text style={styles.tabs_bold}>Etapy wypalenia zawodowego: {"\n"}{"\n"}</Text>
             <Text style={styles.cards_bold}>Miesiąc miodowy {"\n"}</Text>
             - zauroczenie pracą, satysfakcja z osiągnięć zawodowych, pracownik pełen
               energii, zapału i optymizmu{"\n"}{"\n"}
              <Text style={styles.cards_bold}>Przebudzenie {"\n"}</Text>
             - utrzymanie obrazu idealnego pracownika, pracuje ponad miarę, często po
              godzinach, zaczyna zauważać, że jego ocena pracy jest nierealistyczna.{"\n"}{"\n"}
            <Text style={styles.cards_bold}>Szorstkość {"\n"}</Text>
             - w realizację zadań, także tych podstawowych, wkłada się coraz więcej wysiłku,
              pojawiają się konflikty z klientami i współpracownikami{"\n"}{"\n"}
              <Text style={styles.cards_bold}>Wypalenie pełnoobjawowe {"\n"}</Text>
             - poczucie pustki, samotności, myśli ucieczkowe, stany depresyjne;
              pełne wyczerpanie psychiczne i fizyczne{"\n"}{"\n"}
             <Text style={styles.cards_bold}>Odradzanie się {"\n"}</Text>
             - rekonwalescencja, leczenie ran powstałych w wyniku kolejnych stadiów
              wypalenia, powrót do normalnego sposobu pracy bogatszy w nowe doświadczenia
             </Text>
              <Divider/>          
            
             <Text style={styles.tabs_bold}>Co może zrobić pracownik i pracodawca ?</Text>
             <Text style={styles.tabs_text}>
             <Text style={styles.cards_bold}>Rady dla pracownika:{"\n"}</Text>
              - podaj weryfikacji swoje cele i priorytety{"\n"}
              - oceń wymagania, które stoją przez Tobą{"\n"}
              - zwiększ dystans do otoczenia, jeżeli kontakty kosztują zbyt dużo{"\n"}
              - podnoś umiejętności radzenia sobie ze stresem{"\n"}
              - korzystaj ze wparcia osób bliskich i rodziny{"\n"}
              - daj sobie prawo do odpoczynku, relaksu, przyjemności.{"\n"}{"\n"}
              
              <Text style={styles.cards_bold}>Rady dla pracodawcy:{"\n"}</Text>
              - powierzaj pracownikom zadania adekwatne do ich możliwości i kompetencji{"\n"}
              - udzielaj obiektywnej i konstruktywnej oceny{"\n"}
              - stwarzaj możliwości uczenia się i rozwoju zawodowego (szkolenia itd.){"\n"}
              - adekwatnie wynagradzaj pracowników{"\n"}
              - dbaj o kulturę organizacyjną w firmie opartą na pozytywnych relacjach interpersonalnych
              </Text>
          </View>
          </View> 
        </ScrollView>
  )
};

