import React from 'react';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home  from './screens/home.js';
import Porady  from './screens/porady.js';
import Prawo  from './screens/prawo.js';
import Zdrowie from './screens/zdrowie.js';
import Szukaj  from './screens/szukaj.js';
import { styles } from './styles/global.js';

const Root = createStackNavigator()

function LogoTitle() {
  return (
    <View>
    <Text style={{color:"#FFF", fontSize: 18, alignItems: 'center'}}>mobberizer 0.01</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="Home" component={ Home } options={{  headerTitle: (props) => <LogoTitle {...props} />, headerTitleAlign: "center",
      headerStyle: { backgroundColor: '#2f2f2f' }}} />
        <Root.Screen name="Porady" component={ Porady } options={{ title: 'Krok po kroku',
        headerStyle: {backgroundColor: '#2f2f2f'}, 
        headerTintColor:  '#9FE2BF', 
        headerTitleStyle: { color: '#9FE2BF' }}} />
        <Root.Screen name="Prawo" component={ Prawo } options={{ headerShown: false}} /> 
        <Root.Screen name="Zdrowie" component={ Zdrowie } options={{ headerShown: false}} />
        <Root.Screen name="Szukaj" component={ Szukaj } options={{ title: 'Szukaj pomocy',
          headerStyle: {backgroundColor: '#2f2f2f'}, 
          headerTintColor:  '#9FE2BF', 
          headerTitleStyle: { color: '#9FE2BF' }}} />
      </Root.Navigator>
    </NavigationContainer>

  )
}
