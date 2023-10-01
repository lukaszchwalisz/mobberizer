import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Button, Card, Divider} from 'react-native-paper';
import INFOLINIA from '../../components/infolinia.js';

export default function K5({ navigation})  {
      return (
            <ScrollView>
            <View style={styles.tabs_header}>
            <Text style={styles.tabs_title}>5. Przygotowanie mentalne.{"\n"}</Text>
            <Divider />
            <Text style={styles.tabs_text}>{"\n"}
            Sprawy sądowe o mobbing wywołują wiele emocji, pochłaniają całkowicie, pozostawiają w poczuciu krzywdy, niesprawiedliwości. Pojawiają się ambiwalentne
            uczucia: lęku, złości, smutku, zemsty, bezradności. Dlatego należy bardzo dobrze przygotować się do sprawy sądowej, gdzie zalecane
            jest opanowanie emocji, jasne przedstawienie swojej sytuacji, uzasadnienie poparte dowodami. Na każdym etapie postępowania należy pamiętać,
            że roztrzygnięcie sprawy pozostaje w rękach sądu pracy. W wielu momentach może to kłócić z własnymi odczuciami, ale do końca rozprawy należy zachować pokorę.
            Energię warto więc poświęcić na jak najlepsze przedstawienie swoich argumentów, wypunktowanie wszelkich prób odwrócenia sytuacji przez
            obronę i pozwanego. Wymaga to odpowiedniego przygotowania, zarówno w sferze dowodowej, jak i mentalnej. Poniżej przedstawiamy kilka
            najważniejszych zasad jakimi warto się kierować:{"\n"}{"\n"}

            <Text style={styles.tabs_bold}> - obiektywne podejście do problemu, zdystansowanie się{"\n"}{"\n"}
            </Text>
            
            Charakter przeżyć związany z mobbingiem w pracy budzi wiele emocji, wspomnienia mogą wpływać negatywnie na nastrój. Często ponowne
            przywoływanie traumatycznych wydarzeń powoduje dyskonfort, poczucie bólu, krzywdy, rozpaczy. Samo przywołanie postaci
            mobbera w pamięci może wiązać się z traumatycznym lękiem. Dlatego też kiedy decydujemy się, aby skierować sprawę do sądu, powinniśmy podjąć wysiłek, aby
            spojrzeć na sprawę jeszcze raz, z dystansu, skupiając się na samych faktach: co zaszło? kiedy? dlaczego? kto brał udział? 
            
            Sąd otrzyma wersję wydarzeń od obydwu stron konfliktu, i na jej postawie, posiłkując sie badaniami biegłych psychologów, będzie starał się wydac wyrok.
            Na podstawie przedstawionych pism wyrobi sobie zdanie co tak naprawdę zaszło. Na tym etapie ważne jest najklarowniejsze przedstawienie okoliczności sprawy,
            skupiąc się na faktach i klarownej interpretacji zaistniałych wydarzeń, która druga strona będzie chciała podważyć. Dlatego ważne, aby dobrze z adwokatem
            omówić wcześniej każdy szczegół, aby być przygotowanym na pytania sądu, badź adwokata strony przeciwnej.{"\n"}{"\n"}

            <Text style={styles.tabs_bold}>- wynotowanie sobie wszystkich działań mobbingowych{"\n"}{"\n"}
            </Text>

            Pamięć ludzka jest zawodna - szczególnie, kiedy towarzyszy jej silny stres, co jest nieodłącznym towarzyszem spraw mobbingowych. Zachęcamy do
            najdokladniejszego opisania sytuacji w pracy od poczatku jej zaistnienia. Dobrą metodą jest prowadzenia dziennika, w których każda sytuacja mobbingowa
            będzie dobrze opisane i umieszczona w czasie (data, godzina). Do tego warto załączyć wszelką dokumentację, która będzie stanowiła dowód na poparcia
            własnych argumentów (np. maile, listy obecności, kopie pism).
            {"\n"}{"\n"}

            <Text style={styles.tabs_bold}>- zebranie dokumentacji lekarskiej, psychiatrycznej{"\n"}{"\n"}
            </Text>


            Równocześnie bardzo istotne jest zbieranie dokumentacji lekarskiej, która jasno wskazuje, że doznany uszczerbek na zdrowiu był spowodowany
            zachowaniami mobbingowymi w pracy. Według kodeksu pracy jest to warunek konieczny, aby sprawa kwalifikowała sie jako mobbing. Dlatego szczególnie
            uczulamy, aby każdego lekarza prosić o zaświadczenie poświadczające zgodnie z prawdą, że np. zaburzenia psychosomatyczne były wywołane stresującą
            sytuacją w pracy i nie stały za tym inne czynniki zdrowotne niepowiązane z mobbingiem.
            {"\n"}{"\n"}

            <Text style={styles.tabs_bold}>- kontakt ze świadkami mobbingu{"\n"}{"\n"}
            </Text>
            
            W sprawach o mobbing, często świadkowie są jednocześnie podwładnymi pozwanego. Wynika z tego konflikt interesow co ma swoje
            konsekwencje przy składaniu zeznań na sali sądowej. Wiele osób, współpracowników, którzy byli bezpośrednimi/pośrednimi świadkami mobbingu
            często zasłania się niepamiecią albo poświadcza nieprawdę na korzyść pracodawcy. Niemniej warto postarać się wysądować kto mógłby zeznawać
            i zgodnie z prawdą przedstawić sytuację w pracy. Najlepiej nawiązać kontakt z osobami, które wcześniej składały zawiadomienia o mobbing w
            pracy u tego samego pracodawcy i namówić do składania zeznań. Koniecznie należy pozostać uważnym na ich osobiste przeżycia, gdyż ponowne
            wspomninanie traumatycznych zdarzeń, może być bolesne i zniechęcać do bycia świadkiem w sądzie. Sąd oczywiście może wyznaczyć wskazane
            na świadków niezależnie od wcześniejszej zgody, ale warto wcześniej zrobić sobie grunt i mieć pewność, że osoba będzie mówiła zgodnie z prawdą
            jakie zachowania miały miejsce w pracy, kiedy tam pracowała.
            {"\n"}{"\n"}

            
            <Text style={styles.tabs_bold}>- korzystanie z doświadczenia innych osób w podobnej sytuacji{"\n"}{"\n"}
            </Text>

            Zachęcamy do kontakt ze stowarzyszeniem OSA, które od 20 lat zajmuje sie problematyką przeciwdziałania mobbingowi w Polsce, 
            w konsultacjach psychologicznych, prawniczych, a w szczególności do uczestnictwa w grupach wsparcia, gdzie następuje głęboka wymiana myśli i
            doświadczeń związanych z sytuacjami mobbingowymi. Wsparcie ze strony grupy jest ważne na każdym etapie rozwoju sprawy mobbingowej. {"\n"}
            </Text>
            <Divider /> 
            <View><Text>{"\n"}</Text></View>
         
            <Card>
            <Card.Content>
            <Text style={styles.tabs_bold}>Czytasz dalej ?</Text>
            </Card.Content>
            <Card.Actions>

            <Button icon="pan-left" labelStyle={{fontSize: 24}} style={style.ButtonLeft} mode='contained' color="#bde0fe" uppercase={false}           
            onPress={() => {
            navigation.navigate('k4')
            }}>
            </Button>

            <Button icon="pan" labelStyle={{fontSize: 24}} style={style.ButtomRight} mode='contained' color="#a2d2ff" uppercase={false}            
            onPress={() => {
            navigation.navigate('k0')
            }}>
            </Button>
            
            </Card.Actions>
            <INFOLINIA />
            </Card>

            </View>
            </ScrollView>
      )
};
const style = StyleSheet.create({
      ButtonLeft: {
            flex: 1,
            padding:0,
            textAlign: "justify",
            marginVertical:2,
            marginHorizontal:2.5,
            borderWidth: 0.5,
            borderTopLeftRadius:20,
            borderBottomLeftRadius:20,
      },
      ButtomRight: {
            flex: 1,
            padding:0,
            textAlign: "justify",
            marginVertical:2,
            marginHorizontal:2.5,
            borderWidth: 0.5,
            borderTopRightRadius:20,
            borderBottomRightRadius:20,
      },  
    });
