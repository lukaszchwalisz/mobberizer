import { View, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../../components/main.js';
import Main_Drawler from '../../components/main_drawler.js';
import { styles } from '../../styles/global.js';
import { LinearGradient } from 'expo-linear-gradient';

function MainScreen() {
  return (
    <View style={styles.contain}>
        <LinearGradient
        colors={['#3B97EC', 'white']}
        start={{x: 1, y: 0}}
        end={{x: 2, y: 1}}
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
        <LinearGradient
        colors={['white', '#3B97EC']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.contain}
      >
        <Main_Drawler />
        </LinearGradient>
    </View>

  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation={false}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={MainScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#3B97EC" },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function Home() {
  return (
      <MyDrawer />
  );
};
