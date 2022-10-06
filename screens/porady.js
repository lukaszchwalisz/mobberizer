import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../styles/global.js';
import { List } from 'react-native-paper';
import A from 'react-native-a';

const url_fism="https://lukaszchwalisz.pythonanywhere.com/testy/kwestmobbing";

const Krok1 = () => (
      <View style={styles.tabs_header}>
      <Text style={styles.tabs_title}>Krok 1. Diagnoza sytuacji.</Text>
      <Text style={styles.tabs_subtitle}>
      Na początku po prostu nie wiadomo co właściwie zmieniło się. Odczuwa się, że codzienne przychodzenie do pracy przestało sprawiać przyjemność. Relacje z pracodawcą i współpracownikami są jakieś inne, bardziej zdystansowane. Coraz trudniej
      doprosić się o załatwienie konkretnej rzeczy od kolegów, z czasem nie ma się już chęci, aby prosić. Na domiar złego ma się wrażenie bycia obserwowanym, może obgadywanym za plecami. Kiedy wchodzi się do biura, rozmowy cichną albo temat jest zmieniany. Współpracownicy rozmawiają ze sobą, nie zauważają Twojej obecności. Niby nie możesz do niczego se doczepić, ale czujesz, że nie jesteś traktowany poważnie. Zaczynasz się zastanawiać co jest nie tak z Tobą. Z czasem słabnie Twoja odporność,
      coraz częściej chorujesz, bierzesz L4, dłuższe zwolnienia. Kiedy wracasz do pracy, masz wrażenie, że wszyscy mają Tobie za złość, że robisz sobie wakacje, kiedy wszyscy pracują. Pracodawca wzywa Ciebie na dywanik, daje ostrzeżenia, że nie
      będzie tego dalej tolerował.{"\n"}{"\n"}
      Starasz się więc pracować z większym zaangażowaniem, choć nie możesz liczyć na nikogo. Pracodawca nie tylko nie docenia Twoich wysiłków, ale dodaje kolejne zadania, 
      które tylko zabierają Ci czas, a jednocześnie jesteś rozliczany ze swoich normalnych obowiązków. Z czasem przestajesz wyrabiać, bierzesz kolejne zwolnienie. 
      Tłumaczysz się pracodawcy jak wygląda sytuacja, ale on nie widzi problemu. To ty masz problem ! Zawsze możesz zmienić pracę. Odczuwasz silny stres, który 
      nie mija kiedy wracasz do domu. Nie masz ochoty rozmawiać z domownikami, jesteś zbyt zmęczony, co sprawia, że pogarszają się także relacje w Twoim domu.{"\n"}{"\n"}
      Aż w końcu nie wyrabiasz. Albo popełniasz błąd. Zapominasz o jakieś ważnej rzeczy. Firma jest narażona na koszty. Dostajesz naganę. Próbujesz się bronić, tłumaczysz,
      że pracujesz ponad swoje obowiązki, bez wsparcia. Masz wrażenie, że wszystkim sprawia przyjemność, że w końcu maja na Ciebie haka i od teraz za nawet drobne przewinienie
      możesz wylecieć z pracy. Zastanawiasz się co Ciebie spotkało. Czy to był mobbing ? Czy może przesadzasz ? Zaczynasz poszukiwać pomocy.{"\n"}{"\n"}
      Podany przykład może odnosić do wielu spraw, które są zgłaszane do Stowarzyszenia OSA. Na tym etapie szczególnie ważna jest diagnoza sytuacji, w jakieś się znajdujesz.
      Dopytujemy o formy zachowań mobbingowych, skutki zdrowotne, czas trwania, intensywność oraz dotychczasowe kroki, które już zostały podjęte. Wypełniasz stosowny kwestionariusz.
      W kolejnym kroku zaproponujemy Tobie kolejne działania.{"\n"}{"\n"}

      Link:{"\n"} <A href={url_fism}> Kwestionariusz form i skutków mobbingu</A>
      </Text>
      </View>
)

const Krok2 = () => (
      <View style={styles.tabs_header}>
      <Text style={styles.tabs_title}>Krok 2. Zgłoszenie problemu.</Text>
      <Text style={styles.tabs_subtitle}>

      Zgodnie z KP na mobbing w pracy odpowiada pracodawca, tak więc wejście na stronę oficjalną powinno zacząć się
      od poinformowania pracodawcy. Może to być prośba o rozmowę albo w dalszej kolejności złożenie oficjalnego pisma
      z prośbą o odniesienie się oraz podjęcie stosownych działań. {"\n"}{"\n"}

      Kiedy zachowania mobbingowe występują na poziomie współpracowników, sytuacja wydaje się oczywista, 
      jednak często sam pracodawca jest wskazany jako sprawca mobbingu. Fakt ten często powstrzymuje osoby
      mobbingowane od podjęcia stosownych działań. Jednak także w przypadku wskazania współpracowników
      występują wątpliwości związane z postrzeganiem swojej osoby w pracy -  uznanie za donoszącego, za pomawiającego,
      za osobę, która działa przeciwko grupie. Wątpliwości te staramy się rozwiązać w ramach konsultacji psychologicznych
      w stowarzyszeniu OSA, tak aby osoba świadomie i bez lęku była gotowa, aby zgłosić przypadki łamania prawa, pomimo
      wcześniejszych wątpliwości czy może sobie tym zaszkodzić.

      </Text>
      </View>
)

const Krok3 = () => (
      <View style={styles.tabs_header}>
      <Text style={styles.tabs_title}>Krok 3. Wybór strategii.</Text>
      <Text style={styles.tabs_subtitle}>
      Oficjalne zgłoszenie podejrzenia wystąpienia zachowań mobbingowych obliguje pracodawcę do podjęcia działań.
      Ustawodawca jednak precyzyjnie nie określił konkretnej procedury, jaką można w tym wypadku zastosować.
      Jako stowarzyszenie OSA rekomendujemy, aby powołanie komisji dyscyplinarnej, które odnosi się do wszelkich naruszeń
      prawa pracy i jest umocowana w KP. Ewentualnie powołanie komisji antymobbingowej, ale działającej na zasadach komisji 
      dyscyplinarnej (szczególnie, jeśli chodzi o skład komisji), jednak jak już wspomnieliśmy zakres pracy takiej komisji
      nie jest ujęty w prawie, a ustalenia dotyczące mobbingu nie są wiążące - pracodawca nadal może podejmować decyzję
      dotyczące wyeliminowania zachowan mobbingowych w pracy według własnego uznania. {"\n"}{"\n"}

      Nigdy nie należy zakładać złej woli ze strony pracodawcy. Coraz częściej zdarzają się przypadki, kiedy pracodawca poważnie
      podejdzie do zgłoszenia podejrzenia wystąpienia zachowań mobbingowych. Oprócz powołania komisji zajmującej się 
      wskazanymi przypadkami wystepowania mobbingu, może zaproponować pracownikom szkolenie antymobbingowe,
      aby uświadomić wszystkich i samego siebie na czym polega to zjawisko i jak jemu zapobiegać. {"\n"}{"\n"}

      Często jednak sprawa wygląda mniej pozytywnie. Pracodawca traktuje zgłoszenie podejrzenia mobbingu jako zagrożenie dla
      siebie i firmy. Niestety podejmuje działania, które mają w efekcie zamieść sprawę pod dywan, nie dopuszczając do obiektywnego
      wyjaśnienia sprawy. Prowadzi to do eskalacji zachowań mobbingowych i próbach zastraszenia pracownika, dalszej jego izolacji
      w grupie pracowników. Sytuacja staje się trudna, szczególnie na poziomie emocjonalnym i zdrowotnym. Często pogłebiają się
      zaburzenia psychosomatyczne, które nie pozwalają pracować i stają się zagrożeniem dla zdrowia pracownika.
      Zachęcamy jednak do dalszych działań, tym razem wykraczających poza zakład pracy.
  
      </Text>
      </View>
)
const Krok4 = () => (
      <View style={styles.tabs_header}>
      <Text style={styles.tabs_title}>Krok 4. Podjęcie kolejnych działań.</Text>
      <Text style={styles.tabs_subtitle}>
      - pismo ws mobbingu w pracy do wyższej instancji, kardy zarządzającej, ministerstwa itd.{"\n"}
      - prośba o powołanie przez pracodawcę komisji pojednawczej{"\n"}
      - zawiadomienie Społecznego Inspektora Pracy/związków zawodowych{"\n"}
      - zawiadomienie Państwowej Inspekcji Pracy{"\n"}
      - skierowanie sprawy do Sądu Pracy
      </Text>
      </View>
)
const Krok5 = () => (
    <View style={styles.tabs_header}>
    <Text style={styles.tabs_title}>Krok 5. Przygotowanie mentalne.</Text>
    <Text style={styles.tabs_subtitle}>
    - obiektywne podejście do problemu, zdystansowanie{"\n"}
    - wynotowanie wszystkich działań mobbingowych{"\n"}
    - zebranie dokumentacji lekarskiej, psychiatrycznej{"\n"}
    - kontakt ze świadkami mobbingu{"\n"}
    - przygotowanie mentalne do ochrony swoich praw w sądzie{"\n"}
    - korzystanie z doświadczenia innych osób w podobnej sytuacji
    </Text> 
    </View>
)
const Krok15 = () => (
  <View style={styles.tabs_header}>

      <Text style={styles.tabs_title}>Krok 1. Diagnoza sytuacji.</Text>
      <Text style={styles.tabs_subtitle}>
      - formy zachowań mobbingowych {"\n"}
        - skutki zdrowotne{"\n"}
        - dotychczasowy czas trwania {"\n"}
        - kwestionariusz
      </Text>

     <Text style={styles.tabs_title}>Krok 2. Zgłoszenie problemu.</Text>
      <Text style={styles.tabs_subtitle}>
      - rozmowa z osobą bezpośrednio stosujacą zachowania mobbingowe{"\n"}
      - prośba o rozmowę skierowana do pracodawcy {"\n"}
      - złożenie pisma opisującego dotychczasowe zachowania mobbingowe z prośbą o reakcją zgodnie z KP
      </Text>

      <Text style={styles.tabs_title}>Krok 3. Wybór strategii.</Text>
      <Text style={styles.tabs_subtitle}>
      <Text style={styles.tabs_subtitle}>Pozytywna:{"\n"}</Text>
      - działania mające na celu zaprzestanie stosowania mobbingu{"\n"}
      - wprowadzenie koniecznych zmian w organizacji pracy{"\n"}{"\n"}
      <Text style={styles.tabs_subtitle}>Negatywna:{"\n"}</Text>
      - nie udzielenie odpowiedzi{"\n"}
      - odpowiedź wymijająca{"\n"}
      - kontynuowanie działań mobbingowych
      </Text>

      <Text style={styles.tabs_title}>Krok 4. Podjęcie kolejnych działań.</Text>
      <Text style={styles.tabs_subtitle}>
      - pismo ws mobbingu w pracy do wyższej instancji, kardy zarządzającej, ministerstwa itd.{"\n"}
      - prośba o powołanie przez pracodawcę komisji pojednawczej{"\n"}
      - zawiadomienie Społecznego Inspektora Pracy/związków zawodowych{"\n"}
      - zawiadomienie Państwowej Inspekcji Pracy{"\n"}
      - skierowanie sprawy do Sądu Pracy
      </Text>

      <Text style={styles.tabs_title}>Krok 5. Przygotowanie mentalne.</Text>
      <Text style={styles.tabs_subtitle}>
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
          <Krok15 />
      </List.Accordion>
      </List.AccordionGroup>
    </ScrollView>
  )
};

