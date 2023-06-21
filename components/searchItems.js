import React from 'react';
import { ScrollView, TouchableWithoutFeedback, Text, View, StyleSheet } from "react-native";
import { styles } from '../styles/global.js';
import { Divider, Button} from 'react-native-paper';
import 'react-native-gesture-handler';
import {  } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import A from 'react-native-a';
import call from 'react-native-phone-call';

const RenderItem = ({ data }) => {
    const navigation = useNavigation();
    
    return (  
        <ScrollView > 
        <Text style={style.button}  onPress={() => {
        navigation.push(data.id)
        }}> 
        <Text style={style.tabs_text}>{data.title}</Text>
        </Text>
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
        <View style={styles.button}>
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
        </View>
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

        <View style={styles.button}>
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
        </View>

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

        <View style={styles.button}>
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
        </View>
        </ScrollView>
    );
}

const RenderItem_s4 = ({ data }) => {

    return (  
        <ScrollView > 
        <View style={style.button}>
            <Text style={styles.tabs_bold}>{data.title}{"\n"}</Text>
            <Divider />
            <Text style={style.tabs_text}>{"\n"}{data.content}</Text>
        </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    button: {
      flex: 1,
      padding:0,
      textAlign: "justify",
      marginVertical:5,
      marginHorizontal:20,
      padding:20,
      borderWidth: .7,
      borderRadius: 20,
      borderColor: "#d8e2dc",
    },
    tabs_text: {
        color: '#000',
        fontSize: 14,
        fontFamily: "Montserrat-Regular",
        textAlign: "justify",
        },

  });

export { 
        RenderItem, 
        RenderItem_s1, 
        RenderItem_s2,
        RenderItem_s3,
        RenderItem_s4
    };