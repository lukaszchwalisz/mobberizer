import React from 'react';
import { ScrollView, TouchableWithoutFeedback, Text, View, StyleSheet } from "react-native";
import { styles } from '../styles/global.js';
import { Divider } from 'react-native-paper';
import 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { A } from '@expo/html-elements';
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
        <View style={style.button}>
            <Text style={styles.tabs_bold}>{data.title}{"\n"}</Text>
            <Text style={style.tabs_subtext}>adres:  {data.adres}</Text>
            <Text style={style.tabs_subtext}>epuap:  {data.epuap}</Text>
            <TouchableWithoutFeedback icon="phone"style={styles.tabs_text} onPress={() => {
                call(args).catch(console.error);
            }}> 
            <Text style={style.tabs_subtext}>tel.:  {data.tel}</Text>
            </TouchableWithoutFeedback>
            <Text style={style.tabs_subtext}>email:  {data.email}</Text>
            <Text style={style.tabs_subtext}>www:  <A href={data.www}>{data.www}</A></Text>
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

        <View style={style.button}>
            <Text style={styles.tabs_bold}>{data.title}{"\n"}</Text>
            <Text style={style.tabs_subtext}>{data.adres}</Text>

            <TouchableWithoutFeedback style={styles.tabs_text} onPress={() => {
                call(args).catch(console.error);
            }}> 
            <Text style={style.tabs_subtext}>tel.:  {data.tel}</Text>
            </TouchableWithoutFeedback>
            
            <Text style={style.tabs_subtext}>email:  {data.email}</Text>
            <Text style={style.tabs_subtext}>www:  <A href={data.www}>{data.www}</A></Text>
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

        <View style={style.button}>
            <Text style={styles.tabs_bold}>{data.title}{"\n"}</Text>
            <Text style={style.tabs_subtext}>{data.adres}</Text>
            <TouchableWithoutFeedback style={styles.tabs_text} onPress={() => {
                call(args).catch(console.error);
            }}> 
            <Text style={style.tabs_subtext}>tel.:  {data.tel}</Text>
            </TouchableWithoutFeedback>
            <Text style={style.tabs_subtext}>email:  {data.email}</Text>
            <Text style={style.tabs_subtext}>www:  <A href={data.www}>{data.www}</A></Text>
            <Text style={style.tabs_subtext}>apelacja:
            <Text style={style.tabs_subtext}> {data.apelacja}</Text></Text>
            <Text style={style.tabs_subtext}>okręg: 
            <Text style={style.tabs_subtext}> {data.okręg}</Text></Text>
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
            <Text style={style.tabs_text}>{"\n"}{data.content}{"\n"}</Text>
            <Divider />
            <Text style={{color:"#457B9D", fontSize: 12, fontFamily: "Montserrat-Regular",}}><A href={data.link}>{"\n"}{data.link}</A></Text>
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
        },
    tabs_subtext: {
        color: '#000',
        fontSize: 14,
        fontFamily: "Montserrat-Regular",
        },

  });

export { 
        RenderItem, 
        RenderItem_s1, 
        RenderItem_s2,
        RenderItem_s3,
        RenderItem_s4
    };