import React from 'react';
import { View, Text, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Divider } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function Q0({ navigation, route }) {

  const DATA = [
    {
      id: 'q1',
      title: 'Na czym polega zasada równego traktowania w zatrudnieniu ?',
    },
    {
      id: 'q2',
      title: 'Czy przyzwolenie na nierównego traktowanie,dyskryminację czy molestowanie seksualnego ze strony pracodawcy nie będzie nosiło za sobą konsekwencji prawnych ?',
    },
    {
      id: 'q3',
      title: 'Czy pracodawca może dowolnie wynagradzać różnych pracowników za pracę jednakowej wartości ?',
    },
    {
      id: 'q4',
      title: 'Jakie instytucje państwowe sprawują kontrolę nad przestrzeganiem prawa pracy ?',
    },
    {
      id: 'q5',
      title: 'Czy możliwa jest zmiana zatrudnienia pracownika z umowy o pracę na umowę cywilnoprawną ?',
    },
    {
      id: 'q6',
      title: 'Czy i w jaki sposób pracodawca może monitorować pracę pracowników ?',
    },
    {
      id: 'q7',
      title: 'Czy pracodawca może kontrolować służbową pocztę elektroniczną ?',
    },
    {
      id: 'q8',
      title: 'Czy pracodawca może zatrudnić pracownika ponownie na okres próbny ?',
    },
    {
      id: 'q9',
      title: 'Czy pracodawca może z pracownikiem bez końca zawierać kolejne umowy na czas określony ?',
    },
    {
      id: 'q10',
      title: 'W jaki sposób pracownik i pracodawca mogą rozwiązać umowę o pracę ?',
    },
    {
      id: 'q11',
      title: 'Ile dni obejmuje długość okresu wypowiedzenia umowy o pracę zawartej na okres próbny ?',
    },
    {
      id: 'q12',
      title: 'Ile dni obejmuje długość okresu wypowiedzenia umowy o pracę zawartej na czas nieokreślony lub określony uzależniony od okresu zatrudnienia o danego pracodawcy ?',
    },
    {
      id: 'q13',
      title: 'Czy pracodawca może zwolnić pracownika z obowiązku świadczenia pracy podczas trwania okresu wypowiedzenia ?',
    },
    {
      id: 'q14',
      title: 'Gdzie pracownik może się odwołać w razie nieuzasadnionego lub niezgodnego z prawem wypowiedzenia umowy przez pracodawcę ?',
    },
    {
      id: 'q15',
      title: 'Czy pracodawca może odmówić ponownego zatrudnienia pracownika przywróconego do pracy decyzją sądu ?',
    },
    {
      id: 'q16',
      title: 'W jakiej sytuacji pracodawca może rozwiązać umowę o pracę bez wypowiedzenia z winy pracownika ?',
    },
    {
      id: 'q17',
      title: 'W jakich innych sytuacjach niż wina pracownika, pracownik może rozwiązać umowę o pracę bez wypowiedzenia ?',
    },
    {
      id: 'q18',
      title: 'Czy pracownik może rozwiązać umowę o pracę bez wypowiedzenia na podstawie orzeczenia lekarskiego ?',
    },
    {
      id: 'q19',
      title: 'Co może zrobić pracodawca w razie nieuzasadnionego rozwiązania umowy o pracy bez wypowiedzenia przez pracownika ?',
    },
    {
      id: 'q20',
      title: 'Jakie są obowiązki pracodawcy w zakresie zatrudniania pracowników w formie telepracy ?',
    },
    {
      id: 'q21',
      title: 'Czy pracodawca ma prawo kontrolować wykonywanie pracy w domu telepracownika ?',
    },
    {
      id: 'q22',
      title: 'Czy pracodawca jest zobowiązany pokrywać koszty podróży służbowej ?',
    },
    {
      id: 'q23',
      title: 'Czy pracownikowi na czas niewykonywania pracy przysługuje wynagrodzenie ?',
    },
    {
      id: 'q24',
      title: 'Ile wynosi wolna od potrąceń kwota wynagrodzenia za pracę ?',
    },
    {
      id: 'q25',
      title: 'Czy pracodawca jest zobowiązany do przeciwdziałania dyskryminacji ?',
    },
    {
      id: 'q26',
      title: 'Czy pracodawca jest zobowiązany do przeciwdziałania mobbingowi ?',
    },
    {
      id: 'q27',
      title: 'Jak jest zdefiniowany mobbing w ujęciu kodeksu pracy ?',
    },
    {
      id: 'q28',
      title: 'Czy pracownik ma prawo rozwiązać umowę o pracę z powodu doznawania mobbingu w miejscu pracy ?',
    },
    {
      id: 'q29',
      title: 'Jakie roszczenia może wystosować pracownik wobec pracodawcy z tytułu doznawanego mobbingu ?',
    }
  ];

  const renderItem = ({ item }) => (
        <TouchableWithoutFeedback style={styles.button} onPress={() => {
          navigation.push(item.id)
        }}>
        <View>
          <Divider/>
          <Text style={styles.tabs_text}>{item.title}</Text>
        </View>
        </TouchableWithoutFeedback>
  );

  const Header = () => {
    return (
      <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>FAQ </Text>
        <Text style={styles.tabs_subtitle}>Najczęściej zadawane pytania dotyczące mobbingu
        w miejscu pracy.{"\n"}{"\n"}
        Stan prawny: 04.05.2022 r.
        </Text>
      </View>

    )
  };

  return (
    
     <FlatList 
      ListHeaderComponent={Header} 
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}   
      />
    

  )
};