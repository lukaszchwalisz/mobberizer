import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { Button, Card, Divider } from 'react-native-paper';
import INFOLINIA from '../../components/infolinia.js';

export default function K1 ({ navigation })  {

      const args = {
            number: "48665696372", 
            prompt: false, 
            skipCanOpen: true 
        }

      return (
            <ScrollView>
            <View style={styles.tabs_header}>
            <Text style={styles.tabs_title}>1. Diagnoza sytuacji.{"\n"}</Text>
            <Divider />
            <Text style={styles.tabs_text}>{"\n"} 
            Na początku nie masz pewności czy zaszły jakieś konkretne zmiany. Odczuwasz się, że codzienne przychodzenie do pracy przestało sprawiać przyjemność. 
            Relacje z pracodawcą i współpracownikami są jakieś inne, bardziej zdystansowane. Coraz trudniej doprosić się o załatwienie konkretnej rzeczy od kolegów/koleżanek,
            a z czasem nie ma się już chęci, aby prosić o cokolwiek.{"\n"}{"\n"} 
            
            Na domiar złego ma się wrażenie bycia obserwowanym, może nawet obgadywanym za plecami. Kiedy wchodzi się do biura, rozmowy cichną, temat rozmowy jest zmieniany. 
            Współpracownicy rozmawiają ze sobą, nie zauważają Twojej obecności. Niby wszystko pozostaje takie jakie było, ale czujesz, że nie jesteś traktowany poważnie. 
            Zaczynasz się zastanawiać co jest nie tak z Tobą. Spada motywacja do pracy. Z czasem słabnie Twoja odporność, coraz częściej chorujesz, bierzesz L4, dłuższe zwolnienia.
            Kiedy wracasz po zwolnieniu do pracy, masz wrażenie, że wszyscy mają Tobie za złość, że zrobiłeś/łaś sobie dłuższe wakacje. Pracodawca wzywa Ciebie na dywanik,
            daje ostrzeżenia, że nie będzie tego dalej tolerował. {"\n"}{"\n"}
            
            Starasz się więc pracować z większym zaangażowaniem, choć nie możesz już liczyć na nikogo. Pracodawca nie tylko nie docenia Twoich wysiłków, 
            ale dodatkowo daje Tobie kolejne zadania, które tylko zabierają Ci czas, a jednocześnie jesteś rozliczany/na ze swoich normalnych obowiązków. 
            Z czasem przestajesz wyrabiać się, rośnie poziom stresu, pojawia się inne dolegliwości psychosomatyczne, bierzesz kolejne zwolnienie itd. 
            Tłumaczysz się pracodawcy jak wygląda sytuacja, ale on nie widzi problemu. To ty masz problem. Przecież zawsze możesz zmienić pracę. Odczuwasz silny stres, który
            nie mija kiedy wracasz do domu. Tam często obarczasz domowników swoimi emocjami, z czasem oni już także już dość, a co sprawia, że pogarszają się także relacje w Twoim domu.{"\n"}{"\n"}
            
            Aż w końcu nie wyrabiasz. Albo popełniasz błąd. Zapominasz o jakieś ważnej rzeczy. Firma jest narażona na koszty. Mają Ciebie! Dostajesz naganę. Próbujesz się bronić, tłumaczysz,
            że pracujesz ponad swoje obowiązki, bez wsparcia. Masz wrażenie, że wszystkim sprawia przyjemność, że w końcu mają na Ciebie haka i od teraz za nawet drobne przewinienie
            możesz wylecieć z pracy. Zastanawiasz się co Ciebie spotkało. Czy to był mobbing ? Czy może przesadzasz ? Zaczynasz poszukiwać pomocy.{"\n"}{"\n"}
            
            Podany przykład może odnosić do wielu spraw, które są zgłaszane. Na tym etapie szczególnie ważna jest diagnoza sytuacji, w jakieś się znajdujesz.
            Dopytujemy o formy zachowań mobbingowych, skutki zdrowotne, czas trwania, intensywność oraz dotychczasowe kroki, które już zostały podjęte. Wypełniasz stosowny 
            <Text style={styles.tabs_bold}> kwestionariusz </Text>. W kolejnym kroku zaproponujemy Tobie kolejne działania.{"\n"}</Text>
            <Divider /> 
            <View><Text>{"\n"}</Text></View>

            <Card>
            <Card.Content>
            <Text style={styles.tabs_bold}>Czytasz dalej ?</Text>
            </Card.Content>
            <Card.Actions>
            <Button icon="pan" labelStyle={{fontSize: 24}} style={style.ButtonLeft}  mode='contained' color="#a2d2ff" uppercase={false}            
                  onPress={() => {
                  navigation.navigate('k0')
                  }}>
            </Button>
            <Button icon="pan-right" labelStyle={{fontSize: 24}} style={style.ButtomRight} mode='contained' color="#bde0fe" uppercase={false}            
            onPress={() => {
            navigation.push('k2')
            }}>
            </Button>
            </Card.Actions>
            <INFOLINIA />
            </Card>
           
            </View>
            </ScrollView>
      )
};

const style = StyleSheet.create({
      Button: {
            flex: 1,
            padding:10,
            textAlign: "justify",
            marginVertical:5,
            marginHorizontal:20,
            borderWidth: 0.5,
            borderRadius: 20,
      },
      ButtonLeft: {
            flex: 1,
            padding:0,
            textAlign: "justify",
            marginVertical:2,
            marginHorizontal:2.5,
            borderWidth: 0.5,
            borderTopLeftRadius:20,
            borderBottomLeftRadius:20,
      },
      ButtomRight: {
            flex: 1,
            padding:0,
            textAlign: "justify",
            marginVertical:2,
            marginHorizontal:2.5,
            borderWidth: 0.5,
            borderTopRightRadius:20,
            borderBottomRightRadius:20,
      },      
    });