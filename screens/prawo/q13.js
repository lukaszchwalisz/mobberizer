import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q13({ navigation, route }) {
  return (
        <View style={styles.contain}>
          <ScrollView>
            <Card>
              <Card.Content>
                <Title style={styles.cards_title}>Czy pracodawca może zwolnić pracownika z obowiązku świadczenia pracy podczas trwania okresu wypowiedzenia ?</Title>
                <Paragraph style={styles.cards}>
                Według Art.362 KP:{"\n"}
                W związku z wypowiedzeniem umowy o pracę pracodawca może zwolnić pracownika z obowiązku  świadczenia  pracy  do  upływu  okresu wypowiedzenia. {"\n"}
                W okresie tego zwolnienia pracownik zachowuje prawo do wynagrodzenia.
                </Paragraph>
              </Card.Content>
            </Card>
          </ScrollView>
        </View>
  )
};
