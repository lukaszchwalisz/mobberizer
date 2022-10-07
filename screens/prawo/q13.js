import React from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q13({ navigation, route }) {
  return (

          <ScrollView style={styles.contain}>
            <Card style={styles.contain}>
              <Card.Content>
                <Title style={styles.tabs_title}>Czy pracodawca może zwolnić pracownika z obowiązku świadczenia pracy podczas trwania okresu wypowiedzenia ?</Title>
                <Paragraph style={styles.tabs_subtitle}>
                Według Art.362 KP:{"\n"}
                W związku z wypowiedzeniem umowy o pracę pracodawca może zwolnić pracownika z obowiązku  świadczenia  pracy  do  upływu  okresu wypowiedzenia. {"\n"}
                W okresie tego zwolnienia pracownik zachowuje prawo do wynagrodzenia.
                </Paragraph>
              </Card.Content>
            </Card>
          </ScrollView>
  )
};
