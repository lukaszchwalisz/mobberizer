import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Button, Divider } from 'react-native-paper';

export default function K3({ navigation})  {
      return (
            <ScrollView>
            <View style={styles.tabs_header}>
            <Text style={styles.tabs_title}>Krok 3. Wybór strategii.{"\n"}</Text>
            <Divider />
            <Text style={styles.tabs_subtitle}>{"\n"} 
            Oficjalne zgłoszenie podejrzenia wystąpienia zachowań mobbingowych obliguje pracodawcę do stosownych podjęcia działań.
            Ustawodawca jednak precyzyjnie nie określił konkretnej procedury, jaką pracodawca może w tym wypadku zastosować.
            Jako stowarzyszenie OSA rekomendujemy, aby powołanie komisji pojednawczej (art 244. KP). Ewentualnie powołanie komisji
            antymobbingowej, ale działającej na zasadach postępowania pojednawczego (szczególnie, jeśli chodzi o skład komisji),
            jednak jak już wspomnieliśmy zakres pracy takiej komisji nie jest ujęty w prawie, a ustalenia dotyczące mobbingu nie są wiążące -
            pracodawca może więc przyjąć bądź odrzucić wyniki badania komisji według własnego uznania. {"\n"}{"\n"}

            Liczy się nastawienie. Nigdy nie należy zakładać złej woli ze strony pracodawcy. Coraz częściej zdarzają się przypadki, kiedy pracodawca poważnie
            podejdzie do zgłoszenia podejrzenia wystąpienia zachowań mobbingowych. Oprócz powołania komisji zajmującej się 
            wskazanymi przypadkami występowania mobbingu, pracownikom może zostać zaproponowane szkolenie antymobbingowe,
            aby uświadomić wszystkich i samego siebie na czym polega to zjawisko i jak jemu zapobiegać. Pracodawca może przeanalizować
            cały proces wystąpienia nieprawidłowości i dokonań wielu zmian w firmie, które będą w sensowny sposób przeciwdziałały
            zachowaniom mobbingowym w pracy.{"\n"}{"\n"}

            Innej sytuacja wygląda, kiedy pracodawca zareaguje mniej pozytywnie. Pracodawca może potraktować zgłoszenie podejrzenia mobbingu jako zagrożenie dla
            siebie i firmy oraz podejmuje działania, które mają w efekcie "zamieść sprawę pod dywan", nie dopuszczając do obiektywnego
            wyjaśnienia sprawy. W efekcie prowadzi to do dalszej eskalacji zachowań mobbingowych, próbach zastraszenia zgłaszającego, izolacji
            w grupie pracowników itd. Sytuacja staje się trudna, szczególnie na poziomie emocjonalnym i zdrowotnym. U osoby poddanej
            zachowaniom mobbingowym pogłębiają się zaburzenia psychosomatyczne, które nie pozwalają pracować i z czasem stają się zagrożeniem dla zdrowia pracownika. {"\n"}{"\n"}

            Może pojawić się zwątpienie, frustracja, pytania czy dotychczasowe działania mają sens. Konieczna jest w takich sytuacjach
            pomoc specjalistów zdrowia psychicznego oraz innych, którzy mogą zdiagnozować zmiany psychosomatyczne u osoby poddanej silnemu
            stresowi. W takiej sytuacji może pojawić się zwątpienie czy warto dalej działać. Staramy się wesprzeć takie osoby, przywołać 
            początkowe motywy, z którymi zwrócili się o pomoc. Kiedy wsparcie psychologiczne (indywidualne, bądź grupowe) przywróci gotowość
            do walki o przestrzeganie prawa pracy wobec dotychczasowego braku pozytywnych reakcji ze strony pracodawcy.
            W związku powyższym osoba mobbingowana podejmie działania wykraczające swoim zasięgiem poza zakład pracy.
            </Text>
            <Divider /> 
            <View><Text>{"\n"}</Text></View>
            <Button style={styles.button} mode='outlined' color="#111" uppercase={false}            
            onPress={() => {
            navigation.push('k4')
            }}>
            Krok 4. Podjęcie kolejnych działań.
            </Button>

            </View>
            </ScrollView>
      )
}
