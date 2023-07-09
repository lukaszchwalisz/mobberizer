import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Button, Divider} from 'react-native-paper';

export default function K2({ navigation })  {
      return (
            <ScrollView>
            <View style={styles.tabs_header}>
            <Text style={styles.tabs_title}>2. Zgłoszenie problemu.{"\n"}</Text>
            <Divider />
            <Text style={styles.tabs_text}>{"\n"} 
            Zgodnie z zapisami kodeksu pracy za mobbing w pracy odpowiada pracodawca, tak więc złoszenie wystąpienia zachowań mobbingowych w pracy powinno zacząć się
            od poinformowania pracodawcy. Może to być prośba o rozmowę albo w dalszej kolejności złożenie oficjalnego pisma
            z prośbą o odniesienie się do wskazanych niewłaściwych zachowań, weryfikacja i podjęcie stosownych działań. {"\n"}{"\n"}

            Kiedy zachowania mobbingowe występują na poziomie współpracowników (płaszczyzna horyzontalna, pozioma), sytuacja wydaje się oczywista z punktu widzenia
            pracodawcy, jednak często sam pracodawca jest wskazany jako sprawca mobbingu (płaszczyzna wertykalna, pionowa). Fakt ten często powstrzymuje osoby
            mobbingowane od podjęcia stosownych działań. Trudna sytuacja wydaje się także kiedy wskazani w piśmie zostaną współpracownicy, gdyż powstaje obawa związana z postrzeganiem
            swojej osoby w pracy. Ryzyko wiąże się z uznaniem za donoszącego, za pomawiającego; za osobę, która działa przeciwko grupie. {"\n"}{"\n"}

            Na każdym kroku moga pojawić się wątpliwości np. Czy mogę sobie zaszkodzić ? Czy będzie odpowiednia reakcja pracodawcy ?  Staramy się przyjrzeć się
            tym wątpliwościom w ramach konsultacji psychologicznych w stowarzyszeniu OSA. Ważne, aby osoba postępowała świadomie, bez lęku, nie odczuwając przymusu.
            Osoba sama zadecyduje, kiedy będzie gotowa, aby zgłosić w swoim zakładzie pracy przypadki łamania prawa pracy z zakresie wystąpienia zachowań mobbingowych .{"\n"}
            </Text>
            <Divider /> 
            <View><Text>{"\n"}</Text></View>

            <Button style={style.Button} mode='contained' color="#457B9D" uppercase={false}            
            onPress={() => {
            navigation.navigate('k3')
            }}>
            Następny krok
            </Button>

            <Button style={style.Button} mode='contained' color="#F1FAEE" uppercase={false}            
            onPress={() => {
            navigation.navigate('k1')
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
}

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