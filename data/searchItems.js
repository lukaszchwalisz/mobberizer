import React from 'react';
import { Text } from "react-native";
import { styles } from '../styles/global.js';
import { Surface } from 'react-native-paper';
import 'react-native-gesture-handler';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



const RenderItem = ({ item,navigation }) => (
    <TouchableWithoutFeedback style={styles.button} onPress={() => {
      navigation.push(item.id)
    }}> 

      <Surface style={styles.surface} elevation={2}>
        <Text style={styles.tabs_text}>{item.title}</Text>
      </Surface>
    </TouchableWithoutFeedback>
);

export { RenderItem }