import React from 'react';
import { Text } from "react-native";
import { styles } from '../styles/global.js';
import { Surface } from 'react-native-paper';
import 'react-native-gesture-handler';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";


const RenderItem = ({ data }) => {
    const navigation = useNavigation();
    
    return (  
        <ScrollView > 
        <TouchableWithoutFeedback style={styles.button} onPress={() => {
        navigation.push(data.id)
        }}> 

        <Surface style={styles.surface} elevation={2}>
            <Text style={styles.tabs_text}>{data.title}</Text>
        </Surface>
        </TouchableWithoutFeedback>
        </ScrollView>
    );
}

const RenderItem_s1 = ({ data }) => {
    const navigation = useNavigation();
    
    return (  
        <ScrollView > 
        <Surface style={styles.surface} elevation={2}>
            <Text style={styles.tabs_text}>{data.title}</Text>
            <Text style={styles.tabs_text}>adres:  {data.adres}</Text>
            <Text style={styles.tabs_text}>tel.:  {data.tel}</Text>
            <Text style={styles.tabs_text}>email:  {data.email}</Text>
            <Text style={styles.tabs_text}>www:  {data.www}</Text>
            <Text style={styles.tabs_text}>epuap:  {data.epuap}</Text>
        </Surface>
        </ScrollView>
    );
}

const RenderItem_s2 = ({ data }) => {
    const navigation = useNavigation();
    
    return (  
        <ScrollView > 

        <Surface style={styles.surface} elevation={2}>
            <Text style={styles.tabs_text}>{data.title}</Text>
            <Text style={styles.tabs_text}>tel.:  {data.tel}</Text>
            <Text style={styles.tabs_text}>email:  {data.email}</Text>
            <Text style={styles.tabs_text}>www:  {data.www}</Text>
            <Text style={styles.tabs_text}>PSSE:  {data.psse}</Text>
            <Text style={styles.tabs_text}>GSSE:  {data.gsse}</Text>
        </Surface>

        </ScrollView>
    );
}

export { 
        RenderItem, 
        RenderItem_s1, 
        RenderItem_s2
    };