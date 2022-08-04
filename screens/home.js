import React, { useRef, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import 'react-native-gesture-handler';
import Main from '../components/main.js';
import { styles } from '../styles/global.js';
import { Card, Title, Paragraph } from 'react-native-paper';  
 

const Home = ({ navigation, route }) => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = () => (
    <View style={style.container}>
        <Image
        style={{margin: 10, width: 50, height: 50}}
        source={require('../images/logox.png')}
      />
        <Main />

    </View>
  );

  return (

          <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={navigationView}
          >
        <View style={style.container}>
         <Image
          style={{margin: 10, width: 50, height: 50}}
          source={require('../images/logox.png')}
          />
        <Text style={styles.tabs_bold}>mobberizer 0.01</Text>
          {/* <Main /> */}
          </View> 
        </DrawerLayoutAndroid>


      );
    };

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor:'#232323'
  },
  navigationContainer: {
    backgroundColor: "white"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  },
  image: {
    margin: 10,
    width: 50,
    height: 300
  }
});

export default Home;