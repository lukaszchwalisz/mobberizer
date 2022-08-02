import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../../styles/global.js';


export default function Q10({ navigation, route }) {
  return (
         <ScrollView>
           <Card>
           <Card.Content>
             <Title style={styles.cards_title}>W jaki sposób pracownik i pracodawca mogą rozwiązać umowę o pracę ?</Title>
             <Paragraph style={styles.cards}>
             Zgodnie z Art. 30. § 1. KP rozwiązać umowę o pracę można na kilka sposobów:{"\n"}
            • za porozumieniem stron{"\n"}
            • przez oświadczenie jednej ze stron z zachowaniem okresu wypowiedzenia{"\n"}
            • przez oświadczenie jednej ze stron bez zachowania okresu wypowiedzenia{"\n"}
            • z upływem czasu, na który umowa została zawarta
             </Paragraph>
           </Card.Content>
         </Card>
        </ScrollView>
  )
};