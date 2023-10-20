import React from 'react';
import { ScrollView, TouchableWithoutFeedback, Text, View, StyleSheet } from "react-native";
import { styles } from '../styles/global.js';
import { Divider } from 'react-native-paper';
import 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { A } from '@expo/html-elements';
import call from 'react-native-phone-call';

const Law_item = ({ data }) => {
    const navigation = useNavigation();
    
    return (  
        <ScrollView > 
        <Text style={style.button}  onPress={() => {
        navigation.push(data.id)
        }}> 
        <Text style={style.tabs_text}>{data.nr}.  {data.title}</Text>
        </Text>
        </ScrollView>
    );
}

const Dict_item = ({ data }) => {

    return (  
        <ScrollView > 
        <View style={style.button}>
            <Text style={style.tabs_title}>{data.title}{"\n"}</Text>
            <Divider />
            <Text style={styles.tabs_text}>{"\n"}{data.content}{"\n"}</Text>
            <Divider />
            <Text style={styles.tabs_italic}>{"\n"}{data.tag}</Text>

        </View>
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
            <Text style={style.tabs_title}>{data.title}{"\n"}</Text>
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>adres:</Text> {data.adres}</Text>
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>epuap:</Text> {data.epuap}</Text>

            <TouchableWithoutFeedback onPress={() => {
                call(args).catch(console.error);
            }}> 
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>tel.:</Text>  {data.tel}</Text>
            </TouchableWithoutFeedback>
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>email:</Text>  {data.email}</Text>
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>www:</Text> <A href={data.www}>{data.www}</A></Text>
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
            <Text style={style.tabs_title}>{data.title}{"\n"}</Text>
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>adres:</Text> {data.adres}</Text>

            <TouchableWithoutFeedback onPress={() => {
                call(args).catch(console.error);
            }}> 
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>tel.:</Text>  {data.tel}</Text>
            </TouchableWithoutFeedback>
            
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>email:</Text>  {data.email}</Text>
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>www:</Text> <A href={data.www}>{data.www}</A></Text>
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
            <Text style={style.tabs_title}>{data.title}{"\n"}</Text>
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>adres:</Text> {data.adres}</Text>
            <TouchableWithoutFeedback onPress={() => {
                call(args).catch(console.error);
            }}> 
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>tel.:</Text>  {data.tel}</Text>
            </TouchableWithoutFeedback>
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>email:</Text>  {data.email}</Text>
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>www:</Text> <A href={data.www}>{data.www}</A></Text>
        </View>
        </ScrollView>
    );
}

const RenderItem_s4 = ({ data }) => {

    const args = {
        number: data.tel,
        prompt: false, 
        skipCanOpen: true 
    }

    return (  
        <ScrollView > 

        <View style={style.button}>
            <Text style={style.tabs_title}>{data.title}{"\n"}</Text>
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>adres:</Text> {data.adres}</Text>
            <TouchableWithoutFeedback onPress={() => {
                call(args).catch(console.error);
            }}> 
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>tel.:</Text>  {data.tel}</Text>
            </TouchableWithoutFeedback>
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>email:</Text>  {data.email}</Text>
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>www:</Text> <A href={data.www}>{data.www}</A></Text>
        </View>
        </ScrollView>
    );
}

const RenderItem_s5 = ({ data }) => {

    const args = {
        number: data.tel,
        prompt: false, 
        skipCanOpen: true 
    }

    return (  
        <ScrollView > 

        <View style={style.button}>
            <Text style={style.tabs_title}>{data.title}{"\n"}</Text>
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>adres:</Text> {data.adres}</Text>
            <TouchableWithoutFeedback onPress={() => {
                call(args).catch(console.error);
            }}> 
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>tel.:</Text>  {data.tel}</Text>
            </TouchableWithoutFeedback>
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>email:</Text>  {data.email}</Text>
            <Text style={style.tabs_text}><Text style={styles.tabs_italic}>www:</Text> <A href={data.www}>{data.www}</A></Text>
        </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    button: {
      flex: 1,
      marginVertical:5,
      marginHorizontal:20,
      padding:20,
      borderWidth: .7,
      borderRadius: 10,
      borderColor: "#d8e2dc",
    },
    tabs_title: {
        color: '#000',
        fontSize: 16,
        fontFamily: "Lora-Bold",
    },
    tabs_text: {
        padding: 0,
        color: "#000",
        fontSize: 16,
        fontFamily: "Lora-Regular",
    },
  });

export { 
        Law_item, 
        Dict_item,
        RenderItem_s1, 
        RenderItem_s2,
        RenderItem_s3,
        RenderItem_s4,
        RenderItem_s5
    };