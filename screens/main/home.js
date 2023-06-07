import React from 'react';
import { View, StatusBar} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../../components/main.js';
import Main_Drawler from '../../components/main_drawler.js';
import { styles } from '../../styles/global.js';

function MainScreen() {
  return (
    <View style={styles.contain}>
        <Main />
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
      // headerStyle: { backgroundColor: '#2f2f2f'},
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
