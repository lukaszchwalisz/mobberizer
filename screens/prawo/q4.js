import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q4() {
  return (
      <ScrollView style={styles.contain}>
      <View style={styles.tabs_header}> 
        <Text style={styles.tabs_title}>W jaki sposób kodeks pracy definiuje dyskryminację ze względu na płeć ?{"\n"}</Text>
        <Text style={styles.tabs_text}>
        Dyskryminowaniem ze względu na płeć jest także każde niepożądane zachowanie o charakterze seksualnym lub
         odnoszące się do płci pracownika, którego celem lub skutkiem jest naruszenie godności pracownika,
          w szczególności stwo-rzenie wobec niego zastraszającej, wrogiej, poniżającej, upokarzającej lub
           uwłaczającej atmosfery; na zachowanie to mogą się składać fizyczne, werbalne lub pozawerbalne elementy (molestowanie seksualne).{"\n"}
        </Text>
        <Divider />
        <Text style={styles.tabs_subtitle}>{"\n"}
        podstawa prawna: kodeks pracy, art. 183a, §6{"\n"}
        </Text>
        </View>
      </ScrollView>
  )
};