import React from 'react';
import { View, Image, StatusBar, StyleSheet,TouchableWithoutFeedback } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../components/main.js';



function MainScreen({ navigation }) {
  return (
    <View style={style.container}>
        <TouchableWithoutFeedback onPress={() => navigation.dispatch(DrawerActions.openDrawer())}> 
        <Image
        style={{margin: 10, width: 70, height: 70}}
        source={require('../images/logox.png')}
        />
        </TouchableWithoutFeedback>
        <StatusBar />
  </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <View style={style.container}>
        <Image
        style={{margin: 10, width: 50, height: 50}}
        source={require('../images/logox.png')}
      />
        <Main />
    </View>

  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="mobberizer 0.01" component={MainScreen} 
      options=
      {{ headerTitleAlign: "center",
      headerStyle: { backgroundColor: '#2f2f2f'},
      headerTitleStyle: { color: '#9FE2BF' },
      headerTintColor:  '#9FE2BF'
      }}
      />
    </Drawer.Navigator>
  );
}

export default function Home() {
  return (
   
      <MyDrawer />
   
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor:'#232323'
  },
  navigationContainer: {
    backgroundColor: "#232323"
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