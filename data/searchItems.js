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
   
    const args = {
        number: data.tel, 
        prompt: false, 
        skipCanOpen: true 
    }
  
    return (  
        <ScrollView > 
        <Surface style={styles.surface} elevation={2}>
            <Text style={styles.text_surface} key={data.title}>{data.title}</Text>
            <Text style={styles.tabs_subtitle} key={data.adres}>adres:  {data.adres}</Text>
            <Text style={styles.tabs_subtitle} key={data.epuap}>epuap:  {data.epuap}</Text>
            <TouchableWithoutFeedback icon="phone"style={styles.tabs_text} onPress={() => {
                call(args).catch(console.error);
            }}> 
            <Text style={styles.tabs_subtitle} key={data.tel}>tel.:  {data.tel}</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.tabs_subtitle} key={data.email}>email:  {data.email}</Text>
            <Text style={styles.tabs_subtitle} kwy={data.www}>www:  <A href={data.www}>{data.www}</A></Text>
            
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

        <Surface style={styles.surface} elevation={2}>
            <Text style={styles.text_surface} key={data.title} >{data.title}</Text>
            <Text style={styles.tabs_subtitle} key={data.adres} >{data.adres}</Text>

            <TouchableWithoutFeedback style={styles.tabs_text} onPress={() => {
                call(args).catch(console.error);
            }}> 
            <Text style={styles.tabs_subtitle} key={data.tel} >tel.:  {data.tel}</Text>
            </TouchableWithoutFeedback>
            
            <Text style={styles.tabs_subtitle} key={data.email} >email:  {data.email}</Text>
            <Text style={styles.tabs_subtitle} key={data.www} >www:  <A href={data.www}>{data.www}</A></Text>
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

        <Surface style={styles.surface} elevation={2}>
            <Text style={styles.text_surface} key={data.title} >{data.title}</Text>
            <Text style={styles.tabs_subtitle} key={data.adres} >{data.adres}</Text>
            <Text style={styles.tabs_subtitle} key={data.ap}>apelacja: {data.ap}</Text>
            <Text style={styles.tabs_subtitle} key={data.ap}>okręg: {data.ok}</Text>
            <TouchableWithoutFeedback style={styles.tabs_text} onPress={() => {
                call(args).catch(console.error);
            }}> 
            <Text style={styles.tabs_subtitle} key={data.tel} >tel.:  {data.tel}</Text>
            </TouchableWithoutFeedback>
            
            <Text style={styles.tabs_subtitle} key={data.email} >email:  {data.email}</Text>
            <Text style={styles.tabs_subtitle} key={data.www} >www:  <A href={data.www}>{data.www}</A></Text>

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