import React from 'react';
import { Text } from "react-native";
import { styles } from '../styles/global.js';
import { Surface } from 'react-native-paper';
import 'react-native-gesture-handler';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import A from 'react-native-a';
import call from 'react-native-phone-call';

const RenderItem = ({ data }) => {
    const navigation = useNavigation();
    
    return (  
        <ScrollView > 
        <TouchableWithoutFeedback onPress={() => {
        navigation.push(data.id)
        }}> 

        <Surface style={styles.surface} elevation={1}>
            <Text style={styles.tabs_text}>{data.title}</Text>
        </Surface>
        </TouchableWithoutFeedback>
        </ScrollView>
    );
}

const RenderItem_s1 = ({ data }) => {
   
    const args = {
        number: data.tel, 
        prompt: false, 
        skipCanOpen: true 
    }
  
    return (  
        <ScrollView > 
        <Surface style={styles.surface} elevation={1}>
            <Text style={styles.tabs_text}>{data.title}</Text>
            <Text style={styles.tabs_subtitle}>adres:  {data.adres}</Text>
            <Text style={styles.tabs_subtitle}>epuap:  {data.epuap}</Text>
            <TouchableWithoutFeedback icon="phone"style={styles.tabs_text} onPress={() => {
                call(args).catch(console.error);
            }}> 
            <Text style={styles.tabs_subtitle}>tel.:  {data.tel}</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.tabs_subtitle}>email:  {data.email}</Text>
            <Text style={styles.tabs_subtitle}>www:  <A href={data.www}>{data.www}</A></Text>
            {/* <Text style={styles.tabs_subtitle}>#tag:  {data.tag}</Text> */}
        </Surface>
        </ScrollView>
    );
}

const RenderItem_s2 = ({ data }) => {

    const args = {
        number: data.tel,
        prompt: false, 
        skipCanOpen: true 
    }

    return (  
        <ScrollView > 

        <Surface style={styles.surface} elevation={1}>
            <Text style={styles.tabs_text}>{data.title}</Text>
            <Text style={styles.tabs_subtitle}>{data.adres}</Text>

            <TouchableWithoutFeedback style={styles.tabs_text} onPress={() => {
                call(args).catch(console.error);
            }}> 
            <Text style={styles.tabs_subtitle}>tel.:  {data.tel}</Text>
            </TouchableWithoutFeedback>
            
            <Text style={styles.tabs_subtitle}>email:  {data.email}</Text>
            <Text style={styles.tabs_subtitle}>www:  <A href={data.www}>{data.www}</A></Text>
            {/* <Text style={styles.tabs_subtitle}>#tag:  {data.tag}</Text> */}
        </Surface>

        </ScrollView>
    );
}

const RenderItem_s3 = ({ data }) => {

    const args = {
        number: data.tel,
        prompt: false, 
        skipCanOpen: true 
    }

    return (  
        <ScrollView > 

        <Surface style={styles.surface} elevation={1}>
            <Text style={styles.tabs_text}>{data.title}</Text>
            <Text style={styles.tabs_subtitle}>{data.adres}</Text>
            <TouchableWithoutFeedback style={styles.tabs_text} onPress={() => {
                call(args).catch(console.error);
            }}> 
            <Text style={styles.tabs_subtitle}>tel.:  {data.tel}</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.tabs_subtitle}>email:  {data.email}</Text>
            <Text style={styles.tabs_subtitle}>www:  <A href={data.www}>{data.www}</A></Text>
            <Text style={styles.tabs_subtitle}>apelacja:
            <Text style={styles.tabs_subtitle}> {data.apelacja}</Text></Text>
            <Text style={styles.tabs_subtitle}>okręg: 
            <Text style={styles.tabs_subtitle}> {data.okręg}</Text></Text>
        </Surface>
        </ScrollView>
    );
}


export { 
        RenderItem, 
        RenderItem_s1, 
        RenderItem_s2,
        RenderItem_s3
    };