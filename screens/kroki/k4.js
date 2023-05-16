import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Divider } from 'react-native-paper';

export default function K4({ navigation, route })  {
      return (
            <ScrollView>
            <View style={styles.tabs_header}>
            <Text style={styles.tabs_title}>Krok 4. Podjęcie kolejnych działań.{"\n"}</Text>
            <Divider />
            <Text style={styles.tabs_subtitle}>{"\n"}
            Struktura hierarchiczna w zakładzie pracy, korporacji, instytucji publicznej składa się z wielu poziomów, które nadzorują swoje działania.
            Powiadomienie wyższej instancji w firmie o nieprawidłowościach na niższym szczeblu zawsze stanowi dla zwierzchników powód, aby sprawdzić
            czy rzeczywiście doszło do złamania prawa albo po prostu wyjaśnić zasadność skargi. {"\n"}{"\n"}

            W takim piśmie należy przedstawić historię zachowań mobbingowych, które miały miejsce w firmie - konkretnie wskazać się osoby,
            które zachowywały się w niewłaściwy sposób, a również jakie działania przeciwdziałające temu zjawisku podjęto dotychczas. Należy 
            wystosować konkretną prośbę, oczekiwanie o interwencję w sprawie, która przyniesie określony skutek - zaprzestanie zachowań mobbingowych.{"\n"}{"\n"}

            Dalszy brak skutecznych działań ze strony firmy albo próba zaprzeczania o zasadności skargi daje powód, aby sprawę zgłosić do przeznaczonych 
            do takich sytuacji instytucji, które zajmują się kontrolą przestrzegania prawa pracy: Państwowa Inspekcja Pracy, Państwowa Inspeckja Sanitarna.
            W przypadku Państwowej Inspekcji Pracy kontrola jest poprzedzona powiadomieniem pracodawcy, stąd istnieje ryzyko mataczenia
            (np. ukrywania ważnych dokumentów). PIP ma możliwość nie powiadomienia o kontroli, ale pracodawca ma wtedy 
            prawo żądać wyjaśnienia dotyczącego zasadności kontroli oraz treści zgłoszenia. PIP musi mieć bardzo mocne przestanki, aby dokonać 
            niezapowiedzianej kontroli, dlatego należy to brać pod uwagę.{"\n"}{"\n"}

            Ostatecznym krokiem jest założenie sprawy o mobbing w sądzie pracy. Wymaga to odpowiedniego przygotowania procesowego i mentalnego: 
            napisania pozwu wyjaśniającego dotychczasowy przebieg zdarzeń (najlepiej przez kancelarię adwokacką specjalizującą się w prawie pracy); 
            zgromadzenia dokumentacji medycznej, która jasno wskaże, że uszczerbek na zdrowiu był spowodowany zachowaniami mobbingowymi, a nie wynikał
            z innych okoliczności. O szczegółach postępowania piszemy w kolejnym kroku.
            </Text>

            <Divider /> 
            <View><Text>{"\n"}</Text></View>

            <Button style={styles.button} mode='outlined' color="#000" uppercase={false}
            title="Krok 5. Przygotowanie mentalne."            
            onPress={() => {
            navigation.push('k5')
            }}/>
            <Divider /> 
            <View><Text>{"\n"}</Text></View>
            <Button style={styles.button} title="Powrót" mode='outlined' color="#000" uppercase={false}            
            onPress={() => {
            navigation.navigate('k0')
            }}/>

            </View>
            </ScrollView>
      )
}

