import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home  from './screens/home.js';
import Porady  from './screens/porady.js';
import Prawo  from './screens/prawo.js';
import Zdrowie from './screens/zdrowie.js';
import Szukaj  from './screens/szukaj.js';

const Root = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="Home" component={ Home } options={{headerShown: false}}  />
        <Root.Screen name="Porady" component={ Porady } options={{ title: 'Krok po kroku',
        headerStyle: {backgroundColor: '#2f2f2f'}, 
        headerTintColor:  '#9FE2BF', 
        headerTitleStyle: { color: '#9FE2BF' }}} />
        <Root.Screen name="Prawo" component={ Prawo } options={{ headerShown: false}} /> 
        <Root.Screen name="Zdrowie" component={ Zdrowie } options={{ headerShown: false}} />
        <Root.Screen name="Szukaj" component={ Szukaj } options={{ headerShown: false,
          headerStyle: {backgroundColor: '#2f2f2f'}, 
          headerTintColor:  '#9FE2BF', 
          headerTitleStyle: { color: '#9FE2BF' }}} />
      </Root.Navigator>
    </NavigationContainer>

  )
}
