import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q8({ navigation, route }) {
  return (
         <ScrollView style={styles.contain}>
           <Card style={styles.contain}>
           <Card.Content>
             <Title style={styles.tabs_title}>Czy pracodawca może zatrudnić pracownika ponownie na okres próbny ?</Title>
             <Paragraph style={styles.tabs_subtitle}>Umowa na okres próbny nie może przekraczać 3 miesięcy. Ponowne zatrudnienia pracownika na okres próbny jest możliwe tylko pod określonymi warunkami:{"\n"}
            • pracownik może być zatrudniony w celu wykonywania innego rodzaju pracy{"\n"}
            • po upływie 3 lat pracownik może być ponownie zatrudniony na okres próbny w celu wykonywania tego samego rodzaju pracy, dopuszczalne jest tylko 
            jednokrotne ponowne zatrudnienie na okres próbny{"\n"}
            Z doświadczenia stowarzyszenia antymobbingowego OSA wynika, że pracodawca może spróbować ominąć ten przepis tworząc „teoretycznie” nowe stanowiska pracy.

             </Paragraph>
             <Paragraph style={styles.quotes}>
             Art.25. {"\n"}
             § 1. Umowę o pracę zawiera się na okres próbny, na czas nieokreślony albo na czas określony.{"\n"}
             § 2. Umowę o pracę na okres próbny, nieprzekraczający 3 miesięcy,  zawiera się w celu sprawdzenia kwalifikacji pracownika i możliwości jego  zatrudnienia w celu 
             wykonywania określonego rodzaju pracy.{"\n"}
             § 3. Ponowne zawarcie umowy o pracę na okres próbny z tym samym pracownikiem jest możliwe:{"\n"}
               1) jeżeli pracownik ma być zatrudniony w celu wykonywania innego rodzaju pracy;{"\n"}
               2) po upływie co najmniej 3 lat od dnia rozwiązania lub wygaśnięcia  poprzedniej umowy opracę, jeżeli pracownik ma być zatrudniony w celu  wykonywania tego 
              samego rodzaju pracy; w tym przypadku dopuszczalne jest jednokrotne ponowne zawarcie umowy na okres próbny.
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};