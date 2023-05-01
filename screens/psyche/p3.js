import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Divider } from 'react-native-paper';

export default function P3({ navigation, route }) {
  return (

    <ScrollView>
      <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Konlifkt w pracy</Text>
        <Text style={styles.tabs_subtitle}>Na czym polega ? Jak się rozwija ?
        </Text>
      </View>

      <View style={styles.contain}>
       <View style={styles.tabs_text}>
       <Text style={styles.tabs_text}>
       <Text style={styles.tabs_bold}>Definicja konfliktu.{"\n"}</Text>
       <Text style={{fontStyle:'italic'}}>(za: Morton Deautsch){"\n"}{"\n"}</Text> 
       <Text style={styles.cards_bold}>Konflikt </Text>
        to sytuacja, gdy dwie lub więcej strony, wzajemnie
        od siebie zależne spostrzegają różnice między sobą za niemożliwe do pogodzenia i w konsekwencji.
       </Text>
       <Divider/>

       <Text style={styles.tabs_text}>
       <Text style={styles.tabs_bold}>Źródła konfliktu.{"\n"}</Text>
        – komunikacja{"\n"}
        – potrzeby{"\n"}
        – samoocena{"\n"}
        – osobowość{"\n"}
        – role społeczne{"\n"}
        – wartości{"\n"}
        – kontrola nad zasobami
        
       </Text>
        <Divider/>

       <Text style={styles.tabs_text}>
       <Text style={styles.tabs_bold}>Struktura konfliktu.{"\n"}</Text>
        – poziom strukturalny - konflikt wynika ze sposobu zarządzania{"\n"}
        – poziom psychologiczny - konflikt rozgrywa się w relacjach międzyludzkich{"\n"}
        – poziom behawioralny - konflikt rozgrywa się w pośrednim lub bezpośrednim działaniu
       </Text>
        <Divider/>
       
       <Text style={styles.tabs_text}>
       <Text style={styles.tabs_bold}>Model incydentu konfliktowego{"\n"}</Text>
       <Text style={{fontStyle:'italic'}}>(za: James S. Coleman){"\n"}{"\n"}</Text>
        1. Pierwotny, pojedynczy przedmiot sporu.{"\n"}
        2. Naruszenie równowagi stosunków międzyludzkich.{"\n"}
        3. Ujawnienie się innych spornych problemów, dotąd stłumionych.{"\n"}
        4. Druga strona prezentuje swoje racje i argumenty.{"\n"}
        5. Druga strona wydaje się z gruntu zła.{"\n"}
        6. Wysuwanie osobistych zarzutów wobec drugiej strony.{"\n"}
        7. Konflikt uzależnia się od pierwotnego przedmiotu sporu.
       </Text>
       <Divider/>

       <Text style={styles.tabs_bold}>Diagnoza obszarów sytuacji konfliktowej, tzw. ”koło konfliktu”{"\n"}</Text>
       <Text style={styles.tabs_text}>
       <Text style={{fontStyle:'italic'}}>(za: Charles Moore){"\n"}{"\n"}</Text>
        <Text style={styles.cards_bold}>Konflikt relacji {"\n"}</Text>
        - związany jest z silnymi emocjami przeżywanymi w relacji z daną osobą.
        Przyczyną takiego stanu rzeczy mogą być stereotypy, zła komunikacja, negatywne wcześniejsze
        doświadczenia.{"\n"}{"\n"}
        <Text style={styles.cards_bold}>Konflikt wartości {"\n"}</Text>
        - wynika z odmiennych systemów wartości, różnych światopoglądów, a także
        z różnicy zasad i wartości codziennych czynności np.: stosunek do utrzymywania porządku w
        domu{"\n"}{"\n"}
        <Text style={styles.cards_bold}>Konflikt interesów {"\n"}</Text>
        - to sytuacja, gdy strony wzajemnie od siebie zależne, nie mogą osiągnąć
        swoich celów przez działania drugiej strony (osiągnięcie celu przez jedną stronę wyklucza
        osiągnięcie celu przez drugą stronę){"\n"}{"\n"}
        <Text style={styles.cards_bold}>Konflikt danych {"\n"}</Text>
        - pojawi się, kiedy strony konfliktu nie dysponują potrzebnymi danymi, mają
        różne informacje lub odmiennie je interpretują. Sytuacja taka może prowadzić do zaostrzenie
        konfliktu, kiedy strony oskarżają się o zatajenie danych bądź celowe wprowadzenie w błąd
        itp..{"\n"}{"\n"}
        <Text style={styles.cards_bold}>Konflikt strukturalny  {"\n"}</Text>
        - wynika ze struktury organizacji, która działając w sposób wadliwy,
        prowadzi do wielu konfliktów np.: niejasno określone kompetencje w odniesieniu do poszcze-
        gólnych stanowisk
       </Text>
       <Divider/>

       <Text style={styles.tabs_bold}>Style reagowania.</Text>
        <View style={styles.pics}>
        <Image    
          style={{width: 350, height: 350}}
          source={require('../../assets/images/strategie.png')}
        />
        </View>

       <Text style={styles.tabs_text}>
        <Text style={styles.cards_bold}>Unikanie  {"\n"}</Text>
        - sposób, w którym nikt nie osiąga swoich celów, to znaczy nie są zaspokajane ani
          własne potrzeby i interesy, ani potrzeby partnera{"\n"}{"\n"}
        <Text style={styles.cards_bold}>Dostosowanie się {"\n"}</Text>
        - kiedy rezygnujemy ze swoich celów i potrzeb, staramy się łagodzi sytuację
          i wówczas druga strona realizuje swoje cele{"\n"}{"\n"}
        <Text style={styles.cards_bold}>Rywalizacja {"\n"}</Text>
        - wówczas dążymy do osiągnięcia wszystkich celów i potrzeb własnych, kosztem
          porażki drugiej strony{"\n"}{"\n"}
        <Text style={styles.cards_bold}>Kompromis {"\n"}</Text>
        - kiedy obie strony osiągają jedynie część własnych potrzeb i celów, a z części rezygnują{"\n"}{"\n"}
        <Text style={styles.cards_bold}>Współpraca  {"\n"}</Text>
        - kiedy obie strony osiągają najważniejsze dla siebie cele i potrzeby.{"\n"}{"\n"}
        Jest to jedna ze strategii, która wymaga poświęcenie czasu, za to przynosi satysfakcję obu
        stronom, korzystna zwłaszcza w sytuacjach, kiedy relacja z drugą stroną bądź sam przedmiot
        sporu są szczególnie istotne. Strony wypracowują rozwiązanie, które pozwala na osiągnięcie
        najważniejszych dla nich postulatów.
        </Text>    
        <Divider/>
        
        <Text style={styles.tabs_text}>
       <Text style={styles.tabs_bold}>Porozumienie Bez Przemocy{"\n"}</Text>
       <Text style={{fontStyle:'italic'}}>(za: Marchall Rosenberg){"\n"}{"\n"}</Text>
        <Text style={styles.cards_bold}>Spostrzeżenie.  {"\n"}</Text>
        Przedstawienie faktów związanych z działaniem osoby, której działanie wpłynęło na nas.{"\n"}{"\n"}
        <Text style={styles.cards_bold}>Ujawnienie uczuć. {"\n"}</Text>
        Przedstawienie uczuć związanych z działaniem osoby (ból, cierpienie, irytacja, smutek, lęk).
          i wówczas druga strona realizuje swoje cele{"\n"}{"\n"}
        <Text style={styles.cards_bold}>Wyrażenie potrzeb. {"\n"}</Text>
        Przestawiamy nasze potrzeby związane z uczuciami, które ujawniliśmy poprzednio.{"\n"}{"\n"}
        <Text style={styles.cards_bold}>Prośba. {"\n"}</Text>
        Asertywna prośba do partnera relacji i zmianę stanu rzeczy zgodnego z naszymi oczekiwaniami.
        </Text>    
        </View>
        </View>
  </ScrollView>

  )
};