import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import P0  from '../psyche/p0.js';
import P1  from '../psyche/p1.js';
import P2  from '../psyche/p2.js';
import P3 from '../psyche/p3.js';
import P4 from '../psyche/p4.js';
import P5 from '../psyche/p5.js';

const Psy = createStackNavigator()

export default function Zdrowie({ navigation, route }) {
  return (
       <Psy.Navigator>
             <Psy.Screen name="p0" component={ P0 } options={{ title: 'Moje zdrowie',
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
             <Psy.Screen name="p1" component={ P1 } options={{ title: 'Stres',
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
             <Psy.Screen name="p2" component={ P2 } options={{ title: 'Wypalenie zawodowe',        
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
             <Psy.Screen name="p3" component={ P3 } options={{ title: 'Konflikt',
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
             <Psy.Screen name="p4" component={ P4 } options={{ title: 'Mobbing', 
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
             <Psy.Screen name="p5" component={ P5 } options={{ title: 'Uprzedzenia, stereotypy, dyskryminacja',
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
       </Psy.Navigator>
  )
};




