import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home  from './screens/main/home.js';
import Porady  from './screens/main/porady.js';
import Prawo  from './screens/main/prawo.js';
import Zdrowie from './screens/main/zdrowie.js';
import Szukaj  from './screens/main/szukaj.js';
import { useFonts } from 'expo-font';

const Root = createStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-Thin': require('./assets/fonts/Inter/Inter-Thin.ttf'),
    'RoadRage-Regular': require('./assets/fonts/RoadRage/RoadRage-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

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
