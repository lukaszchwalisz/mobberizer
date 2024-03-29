import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home  from './screens/main/home.js';
import About  from './screens/main/about.js';
import Kontakt  from './screens/main/kontakt.js';
import Kwestionariusz  from './screens/main/kwestionariusz.js';
import Kroki  from './screens/main/kroki.js';
import Prawo  from './screens/main/prawo.js';
import Słownik from './screens/main/słownik.js';
import Baza  from './screens/main/baza.js';

import { useFonts } from 'expo-font';

const Root = createStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    'RoadRage-Regular': require('./assets/fonts/RoadRage/RoadRage-Regular.ttf'),
    'Lora-Bold': require('./assets/fonts/Lora/Lora-Bold.ttf'),
    'Lora-Italic': require('./assets/fonts/Lora/Lora-Italic.ttf'),
    'Lora-Regular': require('./assets/fonts/Lora/Lora-Regular.ttf'),
    'Lora-SemiBold': require('./assets/fonts/Lora/Lora-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="Home" component={ Home } options={{headerShown: false}}  />
        <Root.Screen name="About" component={ About } options={{ title: 'O aplikacji',
          }} />
        <Root.Screen name="Kontakt" component={ Kontakt } options={{ title: 'Kontakt',
          }} />
        <Root.Screen name="Kroki" component={ Kroki } options={{ headerShown: false
        // headerStyle: {backgroundColor: '#2f2f2f'}, 
        // headerTintColor:  '#9FE2BF', 
        // headerTitleStyle: { color: '#9FE2BF' }
        }} />
        <Root.Screen name="Prawo" component={ Prawo } options={{ headerShown: false}} /> 
        <Root.Screen name="Słownik" component={ Słownik } options={{ title: 'Słownik'}} />
        <Root.Screen name="Kwestionariusz" component={ Kwestionariusz } options={{ title: 'Kwestionariusz'}} />
        <Root.Screen name="Baza" component={ Baza } options={{ headerShown: false,
          }} />
      </Root.Navigator>
    </NavigationContainer>

  )
}
