import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q20() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>Czy sąd bierze pod uwagę dowody z nagrań dokonanych bez zgody lub wiedzy osoby nagrywanej ?{"\n"}</Text>
        <Text style={styles.tabs_text}>
        Sąd może dopuścić dowody zebrane w sposób dokonany bez zgody i wiedzy osoby nagrywanej, ale osoba nagrywana bez zgody może także dochodzić
        swoich praw w osobnym postepowaniu.
        </Text>

        <Text style={styles.quotes}>
        Kodeks postępowania cywilnego:{"\n"}{"\n"}
        Art. 308. {"\n"}
        § 1. Sąd może dopuścić dowód z filmu, telewizji, fotokopii, fotografii, planów, rysunków oraz płyt lub taśm dźwiękowych i
         innych przyrządów utrwalających albo przenoszących obrazy lub dźwięki.{"\n"}
        § 2. Dowody, o których mowa w paragrafie poprzedzającym, sąd przeprowadza, stosując odpowiednio przepisy o dowodzie z oględzin
         oraz o dowodzie z dokumentów.{"\n"}
        </Text>

        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: kodeks postepowania cywilnego, art. 308 §1, §2{"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};