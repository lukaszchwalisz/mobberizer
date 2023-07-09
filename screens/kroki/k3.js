import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Button, Divider} from 'react-native-paper';

export default function K3({ navigation})  {
      return (
            <ScrollView>
            <View style={styles.tabs_header}>
            <Text style={styles.tabs_title}>3. Wybór strategii.{"\n"}</Text>
            <Divider />
            <Text style={styles.tabs_text}>{"\n"} 
            Oficjalne zgłoszenie podejrzenia wystąpienia zachowań mobbingowych obliguje pracodawcę do stosownych podjęcia działań.
            Ustawodawca jednak precyzyjnie nie określił konkretnej procedury, jaką pracodawca może w tym wypadku zastosować.
            Jako stowarzyszenie OSA rekomendujemy, aby powołanie komisji pojednawczej w ramach uregulowanego prawnie postępowania pojednawczego (art 244. KP).
            Najczęściej z zakładach pracy obowiązuje tzw. "wewnętrzna polityka antymobbingowa", która zakłada powołanie "komisji antymobbingowej". Warto jednak przypomnieć,
            że jak już wspomniano wcześniej, zakres działalności i struktura formowania się składu takiej komisji nie jest ujęty prawnie, a ustalenia nie są wiążące -
            pracodawca może więc przyjąć bądź odrzucić wyniki badania komisji według własnego uznania, jeżeli uzna to za stosowne. {"\n"}{"\n"}

            Oczywiście nigdy nie należy zakładać złej woli ze strony pracodawcy. Coraz częściej zdarzają się przypadki, kiedy pracodawca poważnie
            podchodzi do zgłoszenia podejrzenia wystąpienia zachowań mobbingowych i szybko reaguje uruchamiając zakładowe procedury antymobbowe.
            W ramach wspomnianych działań zakłady pracy często oferują pracownikom szkolenie antymobbingowe, w celu przybliżenia na czym polega to zjawisko i jak jemu zapobiegać,
            według jakiej procedury działać. Pracodawca ma możliwość przeanalizować cały proces wystąpienia nieprawidłowości i dokonać wielu zmian w firmie, które będą w sensowny sposób przeciwdziałały
            zachowaniom mobbingowym w pracy.{"\n"}{"\n"}

            Innej sytuacja wygląda, kiedy pracodawca zareaguje mniej pozytywnie. Pracodawca może potraktować zgłoszenie podejrzenia mobbingu jako zagrożenie dla
            siebie i firmy oraz podjąć działania, które mają w efekcie "zamieść sprawę pod dywan", nie dopuszczając do obiektywnego
            wyjaśnienia sprawy. W efekcie prowadzi to do dalszej eskalacji zachowań mobbingowych, próbach zastraszenia zgłaszającego, izolacji
            w grupie pracowników itd. Sytuacja staje się trudna, szczególnie na poziomie emocjonalnym i zdrowotnym. U osoby poddanej
            zachowaniom mobbingowym pogłębiają się zaburzenia psychosomatyczne, które nie pozwalają pracować i z czasem stają się zagrożeniem dla zdrowia pracownika. {"\n"}{"\n"}

            Może pojawić się zwątpienie, frustracja, pytania o sensowność dotychczasowych działań. Zalecana jest w takich sytuacjach
            pomoc specjalistów zdrowia psychicznego oraz innych, którzy mogą zdiagnozować zmiany psychosomatyczne u osoby poddanej silnemu
            stresowi. Staramy się wesprzeć takie osoby, odwołać się do zasobów - przywołać motywację do pracy, która często była żrodłem siły i zadowolenia;
            do poczucia sprawiedliwości i odpowiedzialności za siebie i swoje zdrowie psychiczne i somatyczne. {"\n"}{"\n"}
            
            W sytuacji, kiedy podjęto szereg działań dotyczących uświadomienia zaistnienia zachowań mobbingowych, pracodawca nadal nie podejmuje żadnych kroków
            w celu poprawy sytuacji w pracy, osoba mobbingowana może podjąć działania wykraczające swoim zasięgiem poza zakład pracy.{"\n"}
            </Text>
            <Divider /> 
            <View><Text>{"\n"}</Text></View>

            <Button style={style.Button} mode='contained' color="#457B9D" uppercase={false}            
            onPress={() => {
            navigation.push('k4')
            }}>
            Następny krok
            </Button>

            <Button style={style.Button} mode='contained' color="#F1FAEE" uppercase={false}            
            onPress={() => {
            navigation.navigate('k2')
            }}>
            Cofnij
            </Button>

            <Button style={style.Button} mode='contained' color="#E63946" uppercase={false}            
            onPress={() => {
            navigation.navigate('k0')
            }}>
            Powrót
            </Button>

            </View>
            </ScrollView>
      )
};
const style = StyleSheet.create({
      Button: {
        flex: 1,
        padding:0,
        textAlign: "justify",
        marginVertical:5,
        marginHorizontal:20,
        padding:10,
        borderWidth: 0.5,
        borderRadius: 20,
      }
    });