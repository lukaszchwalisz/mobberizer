import React from 'react';
import { ScrollView, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function P5({ navigation, route }) {
  return (
         <ScrollView>
            <View style={styles.contain}>
              <View style={styles.tabs_header}>
            <Text style={styles.tabs_title}>Uprzedzenia, stereotypy, dyskryminacja.</Text>
            <Text style={styles.tabs_subtitle}>Rodzaje negatywnych postaw wobec drugiego człowieka.
            </Text>
          </View>

          <View style={styles.tabs_text}>

            <Text style={styles.tabs_text}>
            <Text style={styles.cards_bold}>Postawa </Text>
            - to trwała ocena, ludzi lub obiektów, pozytywna lub negatywna. Składa się z trzech komponentów:{"\n"}
            <Text style={styles.cards_bold}>komponent emocjonalny  </Text>
            – emocje i uczucia, jakie ludzie kojarzą z obiektem postawy{"\n"}
            <Text style={styles.cards_bold}>komponent poznawczy </Text>  
            – przekonania ludzi na temat właściwości obiektu{"\n"}
            <Text style={styles.cards_bold}>komponent behawioralny </Text>
            – działania ludzi wobec obiektu postawy{"\n"}{"\n"}
            W postawie nietolerancyjnej można wyróżnić wymienione wyżej komponenty:{"\n"}
            UPRZEDZENIA - komponent emocjonalny{"\n"}
            STEREOTYPY - komponent poznawczy{"\n"}
            DYSKRYMINACJA - komponent behawioralny
            </Text>
            <Divider/>

            <Text style={styles.tabs_text}>
            <Text style={styles.tabs_bold}>Uprzedzenia.{"\n"}{"\n"}</Text>

            <Text style={styles.cards_bold}>Definicje.{"\n"}{"\n"}</Text>

            Negatywna, nieuzasadniona postawa wobec jakieś grupy lub jej członków (D . Myers).{"\n"}
            Wroga bądź negatywna postawa dotycząca wyróżniającej się grupy ludzi, oparta wyłącznie na 
            przynależności do grupy (E. Aronson).{"\n"}
            Wędrująca opinia (emocjonalna) bez widomych dowodów na swe poparcie. (Ambrose Bierce, 1911).{"\n"}
            Uprzedzenia są źródłem do powstania stereotypów na temat swojego przedmiotu, co za tym
            idzie - zawężonego, tendencyjnego spojrzenia.{"\n"}{"\n"}
            
            <Text style={styles.cards_bold}>Źródła.{"\n"}</Text>
            – wychowanie i kultura{"\n"}
            – wspólna historia{"\n"}
            – negatywne doświadczenia{"\n"}
            – przekazy medialne{"\n"}{"\n"}


            <Text style={styles.cards_bold}>Rodzaje.{"\n"}</Text>

            – awersyjne – poczucie lęku, wstręt, nienawiść przed grupą traktowaną jako zagrożenie{"\n"}
            – dominatywne – poczucie wyższości nad grupą np..: mniejszością narodową, etniczną{"\n"}
            – kierowane emocjami takimi jak zawiść czy zazdrość np..: status społeczny i ekonomiczny{"\n"}
            – zinternalizowane – grupy, wobec których członków kierowane były/są uprzedzenia, zaczynają
            być uprzedzeni do siebie samych{"\n"}
            </Text>
            <Divider/>

            <Text style={styles.tabs_text}>
            <Text style={styles.tabs_bold}>Stereotypy.{"\n"}{"\n"}</Text>



            Pierwszy raz pojęcia stereotyp użył Walter Lippmann w książce „Public Opinion” (1922). 
            Stwierdził, że nosimy w umysłach obrazki, którymi posługujemy się oceniając innych.
            Stereotyp określa się jako przekonania na temat cech danej grupy, kształtowane najczęściej
            negatywnymi emocjami (uprzedzeniami); przekonania są wybiórcze, zero-jedynkowe, generalizujące
            wszystkich członków grupy.{"\n"}{"\n"}

            Gordon Allport (1954) określił stereotypizację jako prawo najmniejszego wysiłku poznawczego,
            które ma uwarunkowanie przystosowawcze, ale kierowanie się prostym schematem nie daje możli-
            wości indywidualnego poznania.{"\n"}{"\n"}

            <Text style={styles.cards_bold}>Formy stereotypizacji.{"\n"}{"\n"}</Text>
          
            <Text style={styles.cards_bold}>efekt oczekiwań {"\n"}</Text>
  
             – odbieranie osoby/ grupy zgodnie z naszymi oczekiwaniami samospełniające
             się proroctwo.{"\n"}
             – oczekiwania dotyczące innej osoby{"\n"}
             – wpływ na zachowanie tej osoby{"\n"}
             – osoba zachowuje się zgodnie z naszymi oczekiwaniami{"\n"}{"\n"}

             Przykład. Mobbing w pracy. Wykorzystanie zależności służbowej. obwinianie ofiary – ofiara
             sama jest sobie winna, wiara w sprawiedliwy świat{"\n"}{"\n"}

             <Text style={styles.cards_bold}>korelacja pozorna{"\n"}</Text>           
             – odkrywanie współzależności tam, gdzie faktycznie nie występują{"\n"}{"\n"}

             <Text style={styles.cards_bold}>dehumanizacja{"\n"}</Text>
            – klasyczna intelektualizacja przenosi w przestrzeń abstrakcyjną myśli i zda-
            mości danej jednostki cechy ludzkie, są uważani za przedmioty, zwierzęta, podludzi. 
          
            </Text>
            <Text style={styles.quotes}>
            Eksperyment Williama Ickesa (1982). Studenci zostali podzieleni w pracy. 
            Eksperymentator poinformował, że osoba w parze jest albo przyjazna albo wroga. 
            Wspomniany partner był współpracownikiem eksperymentatora i zachowywał się 
            neutralnie. Wyniki eksperymentu na podstawie ankiet ewaluacyjnych: jeżeli w parze
            poinformowano, że partner jest przyjazny, odbierano go przyjaźnie; jeżeli w parze
            przekazano informację, że partner jest wrogi to patrzono na niego z rezerwą i 
            interpretowano nieufnie jego zachowanie, choć tak naprawdę partner zachowywał się
            neutralnie.</Text>


            <Text style={styles.tabs_text}>
            <Text style={styles.cards_bold}>Reakcje na stereotyp.{"\n"}{"\n"}</Text>
             

            Patricia Devine (1989) opracowała dwustopniowy model poznawczego
            przetwarzania stereotypów.{"\n"}{"\n"}

            • automatyczne przetwarzanie – występuje wówczas, gdy pojawia się odpowiedni bodziec, który
            uaktywnia stereotypy wobec danej grupy społecznej pozostające w pamięci, które nie były
            brane pod uwagę przed działaniem bodźca; proces niekontrolowany, bez udziału świadomości.{"\n"}{"\n"}

            • kontrolowane przetwarzanie – decyzja o odrzuceniu lub zignorowaniu myślenia 
            stereotypowego; wymagane są przekonania osoby odwołujące się do postaw moralnych
            Przykład. Proces grupowy. Lęk przed wykluczeniem.{"\n"}{"\n"}


            <Text style={styles.cards_bold}>Zmiana stereotypu.{"\n"}{"\n"}</Text>

            Webber, Crocker (1983) opracowały modele zmiany strereotypów.{"\n"}{"\n"}
            • model buchalteryjny – pojawia się informacja niezgodna ze stereotypem, prowadząca do 
            przekształcenia stereotypu.{"\n"}{"\n"}
            • model przekształceniowy – informacja niezgodna ze stereotypem prowadząca do radykalnej
            zmiany stereotypu Model wykształcenia stereotypu – informacja niezgodna ze stereotypem
            prowadząca do stworzenia informacji niskiego rzędu (w celu jej przyswojenia), bez 
            konieczności zmieniania początkowego stereotypu.
            </Text>
            <Text style={styles.quotes}>
            Eksperyment. Webber i Crocker podzieliły badanych na grupy. Przekazywały do 
            grupy informacje niezgodne ze stereotypami o dwóch grupach zawodowych: bibliotekarzy
            i urzędników. W pierwszej przekazywały informację w sposób buchalteryjny (fakty 
            zaprzeczające były podawane kolejno po sobie). W drugiej grupie wprowadzono model
            przekształceniowy (silnie zaprzeczano stereotypom). Ostatnia grupa otrzymywała 
            informacje prowadzące do powstanie stereotypu niższego rzędu.</Text>

            <Text style={styles.tabs_text}>
            Ustalono, że stereotypy osłabiły model buchalteryjny oraz model stworzenia informacji
            niskiego rzędu, natomiast model przekształceniowy nie miał wpływu na osłabienie 
            stereotypów.{"\n"}
            - do pewnego stopnia wszyscy stereotypizujemy innych (oszczędność poznawcza){"\n"}
            - postawy emocjonalne są odporniejsze na zmiany niż emocjonalne (osoba silnie 
            uprzedzona jest bardziej zaangażowana w stereotypizację i przez to staje się fortecą).{"\n"}
            </Text>
            <Divider/>
            
            <Text style={styles.tabs_text}>
            <Text style={styles.tabs_bold}>Dyskryminacja.{"\n"}{"\n"}</Text>

            <Text style={styles.cards_bold}>Dyskryminacja </Text>
            to forma nieusprawiedliwionego okolicznościami nierównego traktowania, charak-
            teryzującego się długotrwałością i celowością, którego podstawą jest posiadanie przez daną osobę
            czy grupę określonej cechy np..: narodowość, poglądy polityczne, orientacja seksualna, rasa, wy-
            znawana religia, status społeczny, status finansowy, podległość służbowa itd..
            Nietolerancja. Brak akceptacji dla odmienności, które może doprowadzić do negatywnych re-
            akcji wobec poszczególnych jednostek (przejawiających się niechęcią, a niekiedy również agresją),
            ale również do podejmowania działań mających na celu ograniczenia praw całych grup, czyli dys-
            kryminacji.{"\n"}{"\n"}
            
            
            <Text style={styles.cards_bold}>Formy dyskryminacji.{"\n"}{"\n"}</Text>
            • Rasizm – dyskryminacja osób innego koloru skóry{"\n"}
            • Ksenofobia (np.. Antysemityzm) – dyskryminacja ze względu na pochodzenie etniczne np..:
            wobec Żydów, Arabów, Romów, Ukraińców itp..{"\n"}
            • Seksizm – dyskryminacja ze względu na płeć{"\n"}
            • Nietolerancja religijna – dyskryminacja ze względu na wyznawaną religię{"\n"}
            • Handicapizm – dyskryminacja osób niepełnosprawnych{"\n"}
            • Homofobia – dyskryminacja ze względu na orientacje seksualną{"\n"}
            • Mobbing – dyskryminacja w miejscu pracy polegająca na wykorzystywanie swoje pozycji{"\n"}
            służbowej{"\n"}
            • ? (przybywa grup dyskryminowanych){"\n"}
           </Text>
          </View>
          </View>
        </ScrollView>
  )
};
