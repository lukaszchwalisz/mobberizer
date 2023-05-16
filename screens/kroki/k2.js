import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Button, Divider} from 'react-native-paper';

export default function K2({ navigation })  {
      return (
            <ScrollView>
            <View style={styles.tabs_header}>
            <Text style={styles.tabs_title}>Krok 2. Zgłoszenie problemu.{"\n"}</Text>
            <Divider />
            <Text style={styles.tabs_subtitle}>{"\n"} 
            Zgodnie z zapisami kodeksu pracy za mobbing w pracy odpowiada pracodawca, tak więc wejście na stronę oficjalną powinno zacząć się
            od poinformowania pracodawcy. Może to być prośba o rozmowę albo w dalszej kolejności złożenie oficjalnego pisma
            z prośbą o odniesienie się oraz podjęcie stosownych działań. {"\n"}{"\n"}

            Kiedy zachowania mobbingowe występują na poziomie współpracowników (płaszczyzna horyzontalna, pozioma), sytuacja wydaje się oczywista, 
            jednak często sam pracodawca jest wskazany jako sprawca mobbingu (płaszczyzna wertykalna, pionowa). Fakt ten często powstrzymuje osoby
            mobbingowane od podjęcia stosownych działań. Podobnie jednak, kiedy wskazani w piśmie zostaną współpracownicy powstaje obawa związana z postrzeganiem
            swojej osoby w pracy. Ryzyko wiąże się z uznaniem za donoszącego, za pomawiającego; za osobę, która działa przeciwko grupie. {"\n"}{"\n"}

            Na każdym kroku moga pojawić się wątpliwości np. Czy mogę sobie zaszkodzić ? Czy będzie odpowiednia reakcja pracodawcy ?  Staramy się przyjrzeć się
            tym wątpliwościom w ramach konsultacji psychologicznych w stowarzyszeniu OSA. Ważne, aby osoba postępowała świadomie, bez lęku, nie odczuwając przymusu.
            Sama zadecyduje, kiedy będzie gotowa, aby zgłosić w swoim zakładzie pracy przypadki łamania prawa.{"\n"}
            </Text>
            <Divider /> 
            <View><Text>{"\n"}</Text></View>

            <Button style={styles.button} icon='walk' mode='outlined' color="#111" uppercase={false}            
            onPress={() => {
            navigation.push('k3')
            }}>
            Krok 3. Wybór strategii.
            </Button>

            <Button style={styles.button} icon='walk' mode='outlined' color="#111" uppercase={false}            
            onPress={() => {
                  navigation.navigate('k0')
            }}>
            Back
            </Button>


            </View>
            </ScrollView>
      )
}
