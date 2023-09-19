import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Button, Card, Divider} from 'react-native-paper';
import INFOLINIA from '../../components/infolinia.js';

export default function K4({ navigation, route })  {
      return (
            <ScrollView>
            <View style={styles.tabs_header}>
            <Text style={styles.tabs_title}>4. Podjęcie kolejnych działań.{"\n"}</Text>
            <Divider />
            <Text style={styles.tabs_text}>{"\n"}
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
            z innych okoliczności. O szczegółach postępowania piszemy w kolejnym kroku.{"\n"}
            </Text>

            <Divider /> 
            <View><Text>{"\n"}</Text></View>
            {/* <INFOLINIA /> */}

            <Card>
            <Card.Actions>
            
            <Button icon="pan-left" labelStyle={{fontSize: 24}} style={style.Togle} mode='contained' color="#bde0fe" uppercase={false}            
            onPress={() => {
            navigation.navigate('k3')
            }}>
            </Button>

            <Button icon="pan" labelStyle={{fontSize: 24}} style={style.Togle} mode='contained' color="#a2d2ff" uppercase={false}            
            onPress={() => {
            navigation.navigate('k0')
            }}>
            </Button>

            <Button icon="pan-right" labelStyle={{fontSize: 24}} style={style.Togle} mode='contained' color="#bde0fe" uppercase={false}            
            onPress={() => {
            navigation.push('k5')
            }}>
            </Button>
            
            </Card.Actions>
            </Card>

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
      },
      Togle: {
            flex: 1,
            padding:0,
            textAlign: "justify",
            marginVertical:5,
            marginHorizontal:5,
            padding:0,
            borderWidth: 0.5,
            borderRadius: 20,
          }
    });

