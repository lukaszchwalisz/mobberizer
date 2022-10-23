import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function P1({ navigation, route }) {
  return (
         <ScrollView>

          <View style={styles.tabs_header}>
            <Text style={styles.tabs_title}>Stres w pracy.</Text>
            <Text style={styles.tabs_subtitle}>W jaki sposób stres oddziaływuje na zachowanie
             człowieka ? Do czego prowadzi nadmiar odczuwalnego stresu ?
            </Text>
          </View>
          <View style={styles.contain}>
          <View style={styles.tabs_text}>
              <Text style={styles.tabs_text}>
              <Text style={styles.tabs_bold}>Definicja: Stres.{"\n"}{"\n"}</Text>
              <Text style={styles.cards_bold}>Stres </Text>
              - definiowany jako dynamiczna relacja adaptacyjna pomiędzy możliwościami, a wymogami
              sytuacji. Relacja adaptacyjna charakteryzuje się brakiem równowagi. Próbą przywrócenia równo-
              wagi jest podejmowanie zachowań zaradczych (radzenie sobie ze stresem).{"\n"}{"\n"}
              Główną funkcją stresu jest więc przywrócenie równowagi w organizmie pobudzonym przez nagłą,
               niespodziewaną bądź niespotykaną sytuację. Stres uważa się za zjawisko szkodliwe, zagrażające
              zdrowiu, a nawet życiu. W rzeczywistości działanie niepożądane przynosi jedynie stres zbyt silny
              (przekraczający indywidualne możliwości adaptacyjne jednostki) lub zbyt długotrwały. Stres 
              umiarkowany zwiększa możliwości radzenia sobie z wymaganiami adaptacyjnymi otoczenia, dzięki czemu
              umożliwia rozwój psychiczny.{"\n"}
              </Text>
              <Divider/>

              <Text style={styles.tabs_text}>
              <View style={styles.pics}>
                <Image    
                  style={{width: 300, height: 320}}
                  source={require('./../../images/neustres.png')}
                />
              </View>
              <Text style={styles.cards_bold}>Eustres </Text>
              – bodziec pozytywnie mobilizujący do działania, nie na tyle mocny, aby zagrażać
              organizmowi, ale wystarczająco odczuwalny, że następuje mobilizacja i skupienie na działaniu.
              Jest to stres optymalny. Taki rodzaj stresu towarzyszy temu co odczuwamy, kiedy jesteśmy
              zmotywowani do wykonania zadania. To napięcie emocjonalne, kiedy myślimy tylko o jednej
              najważniejszej sprawie i jesteśmy skupieni na zadaniu, pozostawiając inne rzeczy na bok.{"\n"}{"\n"}
              <Text style={styles.cards_bold}>Dystres </Text>
              – reakcja organizmu na zagrożenie, świadomość niemożności realizacji zadania lub
              postawionych celów. Pojawia się po przekroczeniu optimum pobudzenia. Skutkiem działania
              dystresu jest wyczerpanie. Na tym etapie czujemy się coraz bardziej zniecierpliwieni i zmęcze-
              ni. Powoli zdajemy sobie sprawę, że nie podołamy zadaniu. Odczuwamy zmęczenie psychiczne
              i fizyczne. Pojawiają się takie dolegliwości jak nerwobóle, bezsenność, osłabienie.{"\n"}{"\n"}
              <Text style={styles.cards_bold}>Neustres </Text>
              – bodziec neutralny w działaniu, chociaż dla innych bywa on eustresowy lub dys-
              tresowy. Stan, kiedy powoli tracimy kontrolę nad własnym zachowaniem. Jesteśmy już tak
              pobudzeni, że trudno nam subiektywnie określić, czy jest to stan zagrażający czy też nie.
              Wydaje nam się, że może przesadzamy i chcemy doprowadzić zadanie do końca. Czasem może się
               nam wydawać, że nowe obowiązki, które spadły na nas nagle, nie przeszkodzą nam w
              wykonaniu zadania, a nasza determinacja doprowadzi do szczęśliwego końca.
             {"\n"}
             </Text>
             <Divider/>

             <Text style={styles.tabs_text}>
             <Text style={styles.tabs_bold}>Skutki zdrowotne i psychosomatyczne nadmiernego stresu.{"\n"}{"\n"}</Text>
             <Text style={styles.cards_bold}>Skutki psychiczne:</Text>
               {"\n"}
              - zakłócenia koncentracji {"\n"}
              - zaburzenia pamięci{"\n"}
              - stany zwątpienia {"\n"}
              - zaburzenia lękowe {"\n"}
              - załamania nerwowe {"\n"}
              - depresja, obniżony nastrój{"\n"}
              - myśli i próby samobójcze
              </Text>

              <Text style={styles.tabs_text}>
              <Text style={styles.cards_bold}>Skutki psychosomatyczne:</Text>
               {"\n"}
              - bóle głowy{"\n"}
              - bóle pleców{"\n"}
              - bóle karku {"\n"}
              - zakłócenia pracy serca {"\n"}
              - zaburzenia snu{"\n"}
              - zaburzenia oddychania{"\n"}
              - choroby skóry{"\n"}
              - ch. wrzodowe żołądka{"\n"}
              - ch. dwunastnicy i jelit{"\n"}
              - zawał mięśnia sercowego{"\n"}
              - udar mózgu{"\n"}
              - astma oskrzelowa{"\n"}
              </Text>
              <Divider/>
          
            <Text style={styles.tabs_text}>
             <Text style={styles.cards_bold}>Zaburzenia związane z przewlekłym stresem według klasyfikacji DSM IV i V.{"\n"}{"\n"}</Text>
             <Text style={styles.cards_bold}>Zaburzenia adaptacyjne </Text>
              – występują w sytuacji, kiedy stresor wywołał u kogoś depresję,
              lęk, zaburzenia behawioralne, żałobę; utrzymują się po ustaniu działania stresora nie dłużej
              niż 6 miesięcy:{"\n"}
              F43.20, z lękiem {"\n"}
              F43.22, z mieszanym nastrojem lękowym i depresyjnym {"\n"}
              F43.23, z problemem behawioralnym {"\n"}
              F43.24, z mieszanym problemem emocjonalnym i behawioralnym {"\n"}
              F43.25, nieokreślone {"\n"}{"\n"}
              <Text style={styles.cards_bold}>Ostre zaburzenie stresowe (F43.0) </Text>{"\n"}
              – pacjent przeżył traumatyczne wydarzenie bądź jego
              świadkiem; towarzyszą temu wspomnienia, marzenia senne, cierpienie psychiczne i fizyczne;
              próby unikania wspomnień nie przynoszą rezultatu; pojawia się negatywne nastawienie, brak
              pozytywnych emocji; zachowanie charakteryzuje się nadmierną wrażliwością, lękiem, obniżoną
               koncentracją, zaburzeniami snu, zaburzenie behawioralne{"\n"}
               – pacjent przestaje normalnie funkcjonować, interesować się światem; stan trwa od 3 dni do miesiąca.{"\n"}{"\n"}
              <Text style={styles.cards_bold}>Zespół stresu pourazowego PTSD (F43.10){"\n"} </Text>
              – gdy wskazane powyżej symptomy trwają dłużej niż miesiąc, kwalifikuje się do jako PTSD.
            </Text>
            </View>
          </View>
        </ScrollView>
  )
};





