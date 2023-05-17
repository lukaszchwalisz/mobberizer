import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Divider } from 'react-native-paper';

export default function P4({ navigation, route }) {
  return (

    <ScrollView>
      <View style={styles.contain}>
      <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Mobbing w pracy</Text>
        <Text style={styles.tabs_subtitle}>Na czym polega ? Jak się rozwija ?
        </Text>
      </View>

      <View style={styles.tabs_text}>
        
      <Text style={styles.tabs_text}>
       <Text style={styles.tabs_title}>Definicja Mobbingu.{"\n"}</Text>
       <Text style={{fontStyle:'italic'}}>(za wytycznymi Komisji Europejskiej){"\n"}{"\n"}</Text> 
       
       <Text style={styles.tabs_italic}>Mobbing </Text>
        to specyficzny rodzaj przemocy funkcjonujący w miejscu pracy, polegający na upo-
        rczywym i długotrwałym podejmowaniu działań, które w ofierze lub grupie ofiar wywołują obiek-
        tywnie uzasadnione poczucie krzywdy osobistej i zagrożenia zawodowego oraz negatywne skutki dla
        zdrowia fizycznego i psychicznego.{"\n"}{"\n"}  
        Zjawisko mobbingu ustawodawca zdefiniował w art.
        94(3) § 2 Kodeksu Pracy. Więcej o tym w dziale:{"\n"}  

        <Button
          title="Pytania prawne"
          color="#4682b4"
          onPress={() => {
            navigation.push('Prawo')
          }}
        />
      </Text>
      <Divider/>
      
      <Text style={styles.tabs_text}>
       <Text style={styles.tabs_bold}>Płaszczyzny sytuacji mobbingowej.{"\n"}{"\n"}</Text>

        <Text style={styles.cards_bold}>Diagonalna (pochyła). {"\n"}Relacja pracodawca – pracownik. {"\n"}</Text>
        - jedna strona ma przewagę nad drugą stroną, wynika to z podległości służbowej. Strona silniejsza zaczyna wykorzystywać ten
        fakt, stosując presję, nasilać zachowania mobbingowe, grożąc zwolnieniem z pracy itd.. Stro-
        na słabsza podporządkowuje się ze względu na swoją sytuację socjalną, nie mając wiedzy
        i kompetencji, aby się zjawisku przeciwstawić. Dotyczy to także osób, nie mobbingowanych
        bezpośrednio, ale wciągniętych przez mobbera w stosowanie przemocy w pracy wobec innego
        współpracownika. Osoby takie przystają na to pod groźbą utraty pracy, bojąc się, że same
        mogą stać się celem mobbera.{"\n"}{"\n"}
        <Text style={styles.cards_bold}>Horyzontalna (pozioma).{"\n"}Relacja pracownik – współpracownicy. {"\n"}</Text>
        - motywem może być działanie pracodawcy - mobbera, kiedy współpracownicy ofiary wybierają swoje dobro, unikają
        kłopotów. Także kiedy dołącza nowa osoba do zespołu i nie chce dostosować się do panujących
        nieformalnych obyczajów. Częstym motywem jest zazdrość i zawiść pomiędzy pracownikami
        o dobre notowania u pracodawcy. Mobbera stają się osoby, które czują się zagrożone swojej
        pozycji, boją się utraty przywilejów, premii, możliwości awansu.{"\n"}{"\n"}
        <Text style={styles.cards_bold}>Wertykalna (pionowa).{"\n"}Relacja pracownicy – pracodawca. {"\n"}</Text>
        - pojawiają się coraz częściej, choć nadal jest to przypadek stosunkowo rzadki. Następuje, kiedy grupa pracowników pozostaje
        w zmowie przeciwko pracodawcy, chcąc wymusić np. dodatkowe przywileje. Występuje w fir-
        mach, gdzie ze względu na specyfikę pracy utrudnione jest zwolnienie pracownika (nie ma
        takiej groźby), nowy pracodawca nie odnajduje się w nowej roli, w swoich prawach i obowiąz-
        kach. Formą pośrednią występuje kiedy mobbing ze strony pracowników wobec kierownika
        jest podsycany przez dyrekcję zakładu lub za jej przyzwoleniem.
      </Text>
      <Divider/>
      <Text style={styles.tabs_text}>
       <Text style={styles.tabs_bold}>Przebieg sytuacji mobbingowej.{"\n"}{"\n"}</Text>
        <Text style={styles.cards_bold}>Faza 1  {"\n"}</Text>
        - zaczyna się wraz z pojawieniem się konfliktu w pracy. Jedna ze stron konfliktu jako
        formę jego rozwiązania przyjmuje strategię, która pozwoli skutecznie pokonać druga stronę,
        wybiera mobbing, najczęściej łamiąc dotychczasowe zasady kultury organizacyjnej. Ofiara nie
        definiuje swojej sytuacji jeszcze jako mobbingu, tylko jako konflikt, który można rozwiązać.
        Podejmuje próby rozwiązania konfliktu, które okazują się ku jej zaskoczeniu nieskuteczne.{"\n"}{"\n"}

        <Text style={styles.cards_bold}>Faza 2{"\n"}</Text>
        - działania mobbera przybierają na sile, mają na celu stygmatyzować ofiarę, odizolowa-
        nie jej od grupy oraz wsparcia i sympatii innych współpracowników. Ofiara jest notorycznie
        obmawiana, poniżana, krytykowana, łamane są jej prawa pracownicze. Mobber wprost za-
        kazuje innym pracownikom kontaktów z osobą mobbingowaną przez co w coraz mniejszym
        stopniu może liczyć na wsparcie emocjonalne. W tej fazie uświadamia sobie, że doświadcza{"\n"}{"\n"}
 
        <Text style={styles.cards_bold}>Faza 3 {"\n"}</Text>
        - pojawiają się pierwsze skutki psychosomatyczne, coraz częściej osoba przebywa na
        zwolnieniu lekarskim. U osób mobbingowanych przejawia się wstręt do zakładu pracy i mob-
        bera (mobberów). Obniża się jakość wykonywanych obowiązków, co daje postawę mobberowi
        do eskalacji działań, pojawiają się wprost groźby zwolnienia z pracy. Osoba mobbingowa-
        na jest wtedy zrezygnowana, psychicznie i społecznie zdegradowana, bezradna. Pomimo tego
        faktu, uchodzi za osobą konfliktową, która działa przeciwko zespołowi pracowników. Mobber
        ma coraz więcej argumentów za zwolnieniem pracownika (gdy jest nim pracodawca) i często
        osoby są zwalniane.
      </Text>  
      <Divider/>

      <Text style={styles.tabs_text}>
       <Text style={styles.tabs_bold}>Formy mobbingu.{"\n"}</Text>
       <Text style={{fontStyle:'italic'}}> Kryterium zachowań mobbingowych wg Heinza Leymanna.{"\n"}{"\n"}</Text>
        
        <Text style={styles.cards_bold}>Działania utrudniające proces komunikowania się. {"\n"}</Text>
        – Ograniczanie lub utrudnianie ofierze możliwości wypowiadania się.{"\n"}
        – Przerywanie wypowiedzi.{"\n"}
        – Reagowanie na wypowiedzi agresją werbalną.{"\n"}
        – Bezzasadne krytykowanie wykonywanej pracy.{"\n"}
        – Dzwonienie poza godzinami pracy bez palącej potrzeby.{"\n"}
        – Stosowanie gróźb.{"\n"}
        – Prezentowanie ofierze poniżających i obraźliwych gestów.{"\n"}
        – Stosowanie krytyki nie wprost, pod postacią sarkazmu, aluzji.{"\n"}
        {"\n"}

        <Text style={styles.cards_bold}>Działania wpływające negatywnie na relacje społeczne.{"\n"}</Text>
        – Unikanie przez przełożonego kontaktu z ofiarą.{"\n"}
        – Ograniczenie istotnych kwestii, w których ofiara może zabierać głos.{"\n"}
        – Fizyczne odizolowanie ofiary poprzez przeniesienie stanowiska pracy w ustronne miejsce.{"\n"}
        – Ignorowanie ofiary.{"\n"}
        {"\n"}

        <Text style={styles.cards_bold}>Działania naruszające wizerunek ofiary. {"\n"}</Text>
        – Pomawianie.{"\n"}
        – Rozsiewanie plotek i prawdziwych tajemnic ofiary.{"\n"}
        – Ośmieszanie.{"\n"}
        – Sugerowanie zaburzeń psychicznych.{"\n"}
        – Żartowanie z życia osobistego.{"\n"}
        – Parodiowanie sposobu chodzenia, stylu wypowiedzi, mimiki twarzy.{"\n"}
        – Szykanowanie z powodu określonych poglądów politycznych lub przekonań religijnych.{"\n"}
        – Żartowanie z niepełnosprawności lub kalectwa.{"\n"}
        – Wyzwiska i poniżanie werbalne.{"\n"}
        – Zachowania o charakterze seksualnym.{"\n"}
        {"\n"}

        <Text style={styles.cards_bold}>Działania uderzające w pozycję zawodową ofiary. {"\n"}</Text>
        – Zlecanie zadań naruszających godność osobistą.{"\n"}
        – Kwestionowanie podejmowanych decyzji, nawet jeśli okazały się słuszne.{"\n"}
        – Pomijanie ofiary podczas przydzielania zadań.{"\n"}
        – Przydzielanie zadań bezsensownych, niepotrzebnych z punktu widzenia organizacji.{"\n"}
        – Przydzielanie zadań poniżej kwalifikacji i kompetencji.{"\n"}
        – Przydzielanie zadań nie mieszczących się w kwalifikacjach i kompetencjach pracownika.{"\n"}
        – Wydawanie sprzecznych poleceń.{"\n"}
        {"\n"}

        <Text style={styles.cards_bold}>Działania uderzające w zdrowie ofiary. {"\n"}</Text>
        – Zlecanie prac szkodliwych dla zdrowia bez odpowiednich środków ochronnych.{"\n"}
        – Groźby użycia siły fizycznej wobec ofiary.{"\n"}
        – Stosowanie przemocy fizycznej o nieznacznym nasileniu.{"\n"}
        – Znęcanie się fizyczne.{"\n"}
        – Działania o podłożu seksualnym, wykorzystanie seksualne{"\n"}
        – Przyczynianie do powstawania strat materialnych powodowanych przez ofiarę.{"\n"}
        – Wyrządzanie szkód psychicznych.{"\n"}
        </Text>
      </View>
    </View>
  </ScrollView>

  )
};

