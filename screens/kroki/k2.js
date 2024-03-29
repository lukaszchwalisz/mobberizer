import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Button, Card, Divider} from 'react-native-paper';
import INFOLINIA from '../../components/infolinia.js';

export default function K2({ navigation })  {
      return (
            <ScrollView>
            <View style={styles.tabs_header}>
            <Text style={styles.tabs_title}>2. Zgłoszenie problemu.{"\n"}</Text>
            <Divider />
            <Text style={styles.tabs_text}>{"\n"} 
            Zgodnie z zapisami kodeksu pracy za mobbing w pracy odpowiada pracodawca, tak więc zgłoszenie wystąpienia zachowań mobbingowych w pracy powinno zacząć się
            od poinformowania pracodawcy. Może to być prośba o rozmowę albo w dalszej kolejności złożenie oficjalnego pisma
            z prośbą o odniesienie się do wskazanych niewłaściwych zachowań, weryfikacja i podjęcie stosownych działań. {"\n"}{"\n"}

            Kiedy zachowania mobbingowe występują na poziomie współpracowników (płaszczyzna horyzontalna, pozioma), sytuacja wydaje się oczywista z punktu widzenia
            pracodawcy, jednak często sam pracodawca jest wskazany jako sprawca mobbingu (płaszczyzna wertykalna, pionowa). Fakt ten często powstrzymuje osoby
            mobbingowane od podjęcia stosownych działań. Trudna sytuacja wydaje się także kiedy wskazani w piśmie zostaną współpracownicy, gdyż powstaje obawa związana z postrzeganiem
            swojej osoby w pracy. Ryzyko wiąże się z uznaniem za donoszącego, za pomawiającego, za osobę, która działa przeciwko grupie. {"\n"}{"\n"}

            Na każdym kroku mogą pojawić się wątpliwości np.: Czy mogę sobie zaszkodzić ? Czy będzie odpowiednia reakcja pracodawcy ? Warto przyjrzeć się
            swoim wątpliwościom w ramach konsultacji psychologicznych. Ważne, aby postępować świadomie, bez lęku, nie odczuwając przymusu.
            Osoba sama zadecyduje, kiedy będzie gotowa, aby zgłosić w swoim zakładzie pracy przypadki łamania prawa pracy z zakresie wystąpienia zachowań mobbingowych.{"\n"}
            </Text>

            <Card>
            <Card.Content>
            <Text style={styles.tabs_subtitle}>Czytasz dalej ?</Text>
            </Card.Content>
            <Card.Actions>

            <Button icon="pan-left" labelStyle={{fontSize: 24}} style={style.ButtonLeft} mode='contained' color="#bde0fe" uppercase={false}            
            onPress={() => {
            navigation.navigate('k1')
            }}>
            </Button>

            <Button icon="pan" labelStyle={{fontSize: 24}} style={style.ButtonCenter} mode='contained' color="#a2d2ff" uppercase={false}            
            onPress={() => {
            navigation.navigate('k0')
            }}>
            </Button>

            <Button icon="pan-right" labelStyle={{fontSize: 24}} style={style.ButtomRight} mode='contained' color="#bde0fe" uppercase={false}            
            onPress={() => {
            navigation.navigate('k3')
            }}>
            </Button>

            </Card.Actions>
            <INFOLINIA />
            </Card>
            </View>
            </ScrollView>
      )
}

const style = StyleSheet.create({
      ButtonCenter: {
            flex: 1,
            padding:0,
            textAlign: "justify",
            borderWidth: 0.5,
            borderRadius: 5,
          },
      ButtonLeft: {
            flex: 1,
            padding:0,
            textAlign: "justify",
            marginVertical:5,
            marginHorizontal:5,
            borderWidth: 0.5,
            borderTopLeftRadius:20,
            borderBottomLeftRadius:20,
      },
      ButtomRight: {
            flex: 1,
            padding:0,
            textAlign: "justify",
            marginVertical:5,
            marginHorizontal:5,
            borderWidth: 0.5,
            borderTopRightRadius:20,
            borderBottomRightRadius:20,
      },  
    });