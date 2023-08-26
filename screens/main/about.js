import React from 'react';
import { ScrollView, StyleSheet,View, Text, Image } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';


export default function About({navigation}) {
  return (
         <ScrollView style={styles.contain}>
           <View style={styles.tabs_header}> 
            <View style={style.image} >
              <Image
              style={{ width: 200, height: 200}}
              source={require('../../assets/icon.png')}
              />
            </View>
            <Text style={styles.tabs_text}> 
            <Text style={styles.tabs_bold}>Mobberizer </Text> 
             to aplikacja mobilna przeznaczona dla osób, które spotkały się z
             niewłaściwymi zachowaniami w pracy o charakterze mobbingowym i poszukują pomocy psychologicznej i
             prawnej, a także podstawowych informacji na temat mobbingu oraz porad jak zachować się z trudnej,
             stresującej sytuacji. {"\n"}
             </Text>
             <Text style={styles.tabs_text}>Wiele osób pada ofiarą zjawiska mobbingu w pracy,
             pomimo tego ma trudności w określeniem tego czy zasadnym jest uznać zachowanie
             przełożonego lub współpracowników za zachowania mobbingowe. Najczęściej w pierwszym
             odruchu odrzuca taką myśl, stara się jak najlepiej wykonywać zadania, realizować się
             w pracy, mając nadzieję, że sytuacja poprawi się. Jednak nie dość, że nie poprawia się
             to zachowania mobbingowe się nasilają. Wtedy stopniowo pojawia się poczucie bezradności,
             braku wpływu, zaczynają się problemy zdrowotne.{"\n"}</Text>
             
            <Text style={styles.tabs_text}>
            W takim momencie osoby najczęściej zaczynają poszukiwać pomocy poza zakładem pracy. Aplikacja
            stara się przekazać podstawową pigułkę informacji potrzebną w sytuacji kryzysowej w pracy.
            Wskazuje też na kolejne kroki jakie może podjąć w celu przeciwdziałania mobbingowi.      
              {"\n"}</Text>

             </View>

        </ScrollView>
  )
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    padding:50,
    alignItems: "center",
  }

});