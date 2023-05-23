import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q8() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>Jakie są kompetencje kontrolne Państwowej Inspekcji Pracy ?{"\n"}</Text>
        <Text style={styles.tabs_text}>Kompetencje kontrolne Państwowej Inspekcji Pracy określa ustawa.{"\n"}
        </Text>
        <Text style={styles.quotes}>
        Ustawa o Państwowej Inspekcji Pracy.  {"\n"}
        Art. 1. Państwowa Inspekcja Pracy jest organem powołanym do sprawowania nadzoru i
        kontroli przestrzegania prawa pracy, w szczególności przepisów i zasad bezpieczeństwa
          i higieny pracy, a także przepisów dotyczących legalności zatrudnienia i innej pracy
          zarobkowej w zakresie określonym w ustawie.{"\n"}{"\n"}

        Do zadań Państwowej Inspekcji Pracy należy:  {"\n"}
        Art. 10 §1. Nadzór i kontrola przestrzegania przepisów prawa pracy, w szczególności  
        przepisów i zasad bezpieczeństwa i higieny pracy, przepisów dotyczących  
        stosunku pracy, wynagrodzenia za pracę i innych świadczeń wynikających ze  
        stosunku pracy, czasu pracy, urlopów, uprawnień pracowników związanych  
        z rodzicielstwem, zatrudniania młodocianych i osób niepełnosprawnych;{"\n"}{"\n"}

        Postępowanie kontrolne:{"\n"}
        Art. 21. Postępowanie kontrolne ma na celu ustalenie stanu faktycznego w zakresie przestrzegania
         prawa pracy, w szczególności przepisów i zasad bezpieczeństwa i higieny pracy, a także przepisów
          dotyczących legalności zatrudnienia oraz udokumentowanie dokonanych ustaleń.{"\n"}
        </Text>

        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: ustawa o państwowej inspekcji pracy, art. 1, art. 10 §1, art. 21{"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};