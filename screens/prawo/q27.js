import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q27({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}>
           <Card.Content>
             <Title style={styles.tabs_title}>Jak jest zdefiniowany mobbing w ujęciu kodeksu pracy ?</Title>
             <Paragraph style={styles.tabs_subtitle}>
             Zgodnie z Art. 30. § 1. KP rozwiązać umowę o pracę można na kilka sposobów:{"\n"}
             W art. 943 §2 ustawodawca zdefiniował mobbing jako:{"\n"}
            „Mobbing oznacza działania lub zachowania dotyczące pracownika lub  skierowane przeciwko pracownikowi, polegające na uporczywym 
            i długotrwałym nękaniu lub zastraszaniu pracownika, wywołujące uniego  zaniżoną ocenę przydatności zawodowej, powodujące lub mające na celu 
            poniżenie lub ośmieszenie pracownika, izolowanie go lub wyeliminowanie  zzespołu współpracowników.”{"\n"}
            Wszystkie te elementy muszą wystąpić łącznie, aby zachowanie w pracy mogły zostać zakwalifikowane jako mobbing. Ustawodawca nie ujął 
            precyzyjnie okresu trwania zachowań mobbingowych. Sądy pracyw tym wypadku opierają się na praktyce z zakresu badania i przeciwdziałania mobbingowi, 
            gdzie ten okres wynosi conajmniej od 3 do 6 miesięcy, w zależności od intensywności zachowań mobbingowych.
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};

