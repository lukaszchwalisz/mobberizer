import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';


export default function Kontakt() {
  return (
         <ScrollView style={styles.contain}>
           <View style={styles.tabs_header}> 
             <Text style={styles.tabs_title}>Kontakt.{"\n"}</Text>
             <Image
              style={{ flex: 1, width: '100%', height: 300, marginBottom: 20 }}
              source={
                require('../../assets/images/image45.png')
              }
            />  
        
             <Text style={styles.tabs_bold}>obsługa aplikacji:{"\n"}
             </Text>
             <Text style={styles.tabs_text}>autor:    Łukasz Chwalisz{"\n"}
                                            mail:     lukaszchwalisz@proton.me{"\n"}
             </Text>

             <Text style={styles.tabs_bold}>gobeliny:{"\n"}
             </Text>
             <Text style={styles.tabs_text}>autorka:  Kasia Menke{"\n"}
                                            mail:     katarzyna.menke@wp.pl{"\n"}
             </Text>

             <Text style={styles.tabs_bold}>pomoc:{"\n"}
             </Text>
             
             <Text style={styles.tabs_text}>Punkt Konsultacyjny OSA w Poznaniu{"\n"}
                                            mail:     osa-poznan@wp.pl{"\n"}
                                            tel.      +48 665 696 372{"\n"}
             </Text> 

             </View>
        </ScrollView>
  )
};
