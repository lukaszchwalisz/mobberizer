import React from 'react';
import { View, StatusBar, StyleSheet} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../../components/main.js';
import Main_Drawler from '../../components/main_drawler.js';
import { styles } from '../../styles/global.js';
import { LinearGradient } from 'expo-linear-gradient';

function MainScreen() {
  return (
    <View style={style.contain}>
        <LinearGradient
        colors={['#FACBF5', '#1F8CF1']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.contain}
      >
        <Main />
        </LinearGradient>
        <StatusBar />
  </View>
  );
}

function CustomDrawerContent() {
  return (
    <View style={styles.contain}>
        <Main_Drawler />
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
      <Drawer.Screen name="Mobberizer" component={MainScreen} 
      options=
      {{ headerTitleAlign: "center",
      headerStyle: { backgroundColor: '#edf6f9'},
      // headerTitleStyle: { color: '#9FE2BF' },
      // headerTintColor:  '#9FE2BF'
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
  contain: {
    flex: 1,
    
  },


});