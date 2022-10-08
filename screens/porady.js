import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../styles/global.js';
import { List } from 'react-native-paper';
import A from 'react-native-a';

const url_fism="https://lukaszchwalisz.pythonanywhere.com/testy/kwestmobbing";

const Krok1 = () => (
      <View style={styles.tabs_header}>
      <Text style={styles.tabs_title}>Krok 1. Diagnoza sytuacji.{"\n"}</Text>
      <Text style={styles.tabs_subtitle}>
      Na początku po prostu nie wiadomo co właściwie zmieniło się. Odczuwa się, że codzienne przychodzenie do pracy przestało sprawiać przyjemność. Relacje z pracodawcą i współpracownikami są jakieś inne, bardziej zdystansowane. Coraz trudniej
      doprosić się o załatwienie konkretnej rzeczy od kolegów, z czasem nie ma się już chęci, aby prosić.{"\n"}{"\n"} 
      
      Na domiar złego ma się wrażenie bycia obserwowanym, może obgadywanym za plecami. Kiedy wchodzi się do biura, rozmowy cichną albo temat jest zmieniany. Współpracownicy rozmawiają ze sobą, nie zauważają Twojej obecności. Niby nie możesz do niczego se doczepić, ale czujesz, że nie jesteś traktowany poważnie. Zaczynasz się zastanawiać co jest nie tak z Tobą. Z czasem słabnie Twoja odporność,
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
      <Text style={styles.tabs_title}>Krok 2. Zgłoszenie problemu.{"\n"}</Text>
      <Text style={styles.tabs_subtitle}>

      Zgodnie z KP na mobbing w pracy odpowiada pracodawca, tak więc wejście na stronę oficjalną powinno zacząć się
      od poinformowania pracodawcy. Może to być prośba o rozmowę albo w dalszej kolejności złożenie oficjalnego pisma
      z prośbą o odniesienie się oraz podjęcie stosownych działań. {"\n"}{"\n"}

      Kiedy zachowania mobbingowe występują na poziomie współpracowników (płaszczyzna horyzontalna, pozioma), sytuacja wydaje się oczywista, 
      jednak często sam pracodawca jest wskazany jako sprawca mobbingu(płaszczyzna wertykalna, pionowa). Fakt ten często powstrzymuje osoby
      mobbingowane od podjęcia stosownych działań. Powstaje obawa związana z postrzeganiem swojej osoby w pracy -  uznanie za donoszącego,
      za pomawiającego, za osobę, która działa przeciwko grupie. {"\n"}{"\n"}

      Na każdym kroku moga pojawić się wątpliwości np. czy moga sobie zaszkodzić ? Staramy się rozwiązać w ramach konsultacji psychologicznych
      w stowarzyszeniu OSA, tak aby osoba świadomie, bez lęku była gotowa, aby zgłosić przypadki łamania prawa.

      </Text>
      </View>
)

const Krok3 = () => (
      <View style={styles.tabs_header}>
      <Text style={styles.tabs_title}>Krok 3. Wybór strategii.{"\n"}</Text>
      <Text style={styles.tabs_subtitle}>
      Oficjalne zgłoszenie podejrzenia wystąpienia zachowań mobbingowych obliguje pracodawcę do podjęcia działań.
      Ustawodawca jednak precyzyjnie nie określił konkretnej procedury, jaką można w tym wypadku zastosować.
      Jako stowarzyszenie OSA rekomendujemy, aby powołanie komisji pojednawczej (art 244. KP). Ewentualnie powołanie komisji
      antymobbingowej, ale działającej na zasadach postępowania pojednawczego (szczególnie, jeśli chodzi o skład komisji),
      jednak jak już wspomnieliśmy zakres pracy takiej komisji nie jest ujęty w prawie, a ustalenia dotyczące mobbingu nie są wiążące -
      pracodawca może przyjąć wyniki działania komisji według własnego uznania. {"\n"}{"\n"}

      Nigdy nie należy zakładać złej woli ze strony pracodawcy. Coraz częściej zdarzają się przypadki, kiedy pracodawca poważnie
      podejdzie do zgłoszenia podejrzenia wystąpienia zachowań mobbingowych. Oprócz powołania komisji zajmującej się 
      wskazanymi przypadkami występowania mobbingu, może zaproponować pracownikom szkolenie antymobbingowe,
      aby uświadomić wszystkich i samego siebie na czym polega to zjawisko i jak jemu zapobiegać. Pracodawca może przeanalizować
      cały proces wystąpienia nieprawidłowości i dokonań wielu zmian w firmie, które będą w sensowny sposób niwelowały zaistnienie
      zachowań mobbingowych.{"\n"}{"\n"}

      Często jednak sprawa wygląda mniej pozytywnie. Pracodawca traktuje zgłoszenie podejrzenia mobbingu jako zagrożenie dla
      siebie i firmy oraz podejmuje działania, które mają w efekcie zamieść sprawę pod dywan, nie dopuszczając do obiektywnego
      wyjaśnienia sprawy. Prowadzi to do dalszej eskalacji zachowań mobbingowych, próbach zastraszenia zgłaszającego, izolacji
      w grupie pracowników. Sytuacja staje się trudna, szczególnie na poziomie emocjonalnym i zdrowotnym. U osoby poddanej
      zachowaniom mobbingowym pogłębiają się zaburzenia psychosomatyczne, które nie pozwalają pracować i 
      z czasem stają się zagrożeniem dla zdrowia pracownika. {"\n"}{"\n"}

      Może pojawić się zwątpienie,frustracja, pytania czy dotychczasowe działania mają sens. Konieczna jest w takich sytuacjach
      pomoc specjalistów zdrowia psychicznego oraz innych, którzy mogą zdiagnozować zmiany psychosomatyczne u osoby poddanej silnemu
      stresowi. Motywujemy do przekonania samego siebie, że warto nadal walczyć o swoje prawa, kiedy odczuje się gotowość, pewność i
      bezpieczeństwo. Dalsze kroki będą wiązały się z działaniami wykraczającymi swoim zasięgiem poza zakład pracy.
  
      </Text>
      </View>
)
const Krok4 = () => (
      <View style={styles.tabs_header}>
      <Text style={styles.tabs_title}>Krok 4. Podjęcie kolejnych działań.{"\n"}</Text>
      <Text style={styles.tabs_subtitle}>

      Struktura hierarchiczna w zakładzie pracy, korporacji, instytucji publicznej obejmuje wiele poziomów, które nadzorują swoje działania.
      Powiadomienie wyższej instancji w firmie o nieprawidłowościach na niższym szczeblu zawsze stanowi dla zwierzchników powód, aby sprawdzić
      czy rzeczywiście doszło do złamania prawa albo po prostu wyjaśnić zasadność skargi. {"\n"}{"\n"}

      W takim piśmie ponownie należy przedstawić historię zachowań mobbingowych, które miały miejsce w firmie - konkretnie wskazać się osoby,
      które zachowywały się w niewłaściwy sposób, a również jakie działania przeciwdziałające temu zjawisku podjęto dotychczas. Należy 
      wystosować konkretną prośbę, oczekiwanie o interwencję w sprawie, która przyniesie określony skutek - zaprzestanie zachowań mobbingowych.{"\n"}{"\n"}

      Dalszy brak skutecznych działań ze strony firmy albo próba zaprzeczania o zasadności skargi daje powód, aby sprawę zgłosić do przeznaczonych 
      do takich sytuacji instytucji, które zajmują się kontrolą przestrzegania prawa pracy: Państwowa Inspekcja Pracy, Sanepid (o zakresie działania
      wspomnianych instytucji w dziale prawnym). W przypadku Państwowej Inspekcji Pracy kontrola jest poprzedzona powiadomieniem pracodawcy, stąd
      istnieje ryzyko mataczenia (ukrywania ważnych obciążających dokumentów). PIP ma możliwość nie powiadomienia o kontroli, ale pracodawca ma wtedy 
      prawo żądać wyjaśnienia dotyczącego zasadności kontroli oraz treści zgłoszenia. PIP musi mieć bardzo mocne przestanki, aby dokonać 
      niezapowiedzianej kontroli, dlatego należy to brać pod uwagę.{"\n"}{"\n"}

      Ostatecznym krokiem jest założenie sprawy o mobbing w Sądzie Pracy. Wymaga to odpowiedniego przygotowania procesowego i mentalnego: 
      napisania pozwu wyjaśniającego dotychczasowy przebieg zdarzeń (najlepiej przez kancelarię adwokacką specjalizującą się w prawie pracy); 
      zgromadzenia dokumentacji medycznej, która jasno wskaże, że uszczerbek na zdrowiu był spowodowany zachowaniami mobbingowymi, a nie wynikał
      z innych okoliczności. O szczegółach postępowania piszemy w kolejnym kroku.
      </Text>
      </View>
)
const Krok5 = () => (
    <View style={styles.tabs_header}>
    <Text style={styles.tabs_title}>Krok 5. Przygotowanie mentalne.{"\n"}</Text>
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

