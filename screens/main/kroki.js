import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import K0  from '../kroki/k0.js';
import K1  from '../kroki/k1.js';
import K2  from '../kroki/k2.js';
import K3 from '../kroki/k3.js';
import K4 from '../kroki/k4.js';
import K5 from '../kroki/k5.js';

const Steps = createStackNavigator()

export default function Kroki() {
  return (
       <Steps.Navigator>
             <Steps.Screen name="k0" component={ K0 } options={{ title: 'Krok po kroku',
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
             <Steps.Screen name="k1" component={ K1 } options={{ title: 'Krok I',
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
             <Steps.Screen name="k2" component={ K2 } options={{ title: 'Krok II',        
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
             <Steps.Screen name="k3" component={ K3 } options={{ title: 'Krok III',
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
             <Steps.Screen name="k4" component={ K4 } options={{ title: 'Krok IV', 
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
             <Steps.Screen name="k5" component={ K5 } options={{ title: 'Krok V'
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
       </Steps.Navigator>
  )
};




