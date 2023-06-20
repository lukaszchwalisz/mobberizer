import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import S0  from '../baza/s0.js';
import S1  from '../baza/s1.js';
import S2  from '../baza/s2.js';
import S3  from '../baza/s3.js';

const Sear = createStackNavigator()

export default function Baza({ navigation, route }) {
  return (
       <Sear.Navigator>
             <Sear.Screen name="s0" component={ S0 } options={{ title: 'Baza danych',
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
             <Sear.Screen name="s1" component={ S1 } options={{ title: 'Państwowa Inspecja Pracy',
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
             <Sear.Screen name="s2" component={ S2 } options={{ title: 'Sanepid',        
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
             <Sear.Screen name="s3" component={ S3 } options={{ title: 'Sądy',        
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
       </Sear.Navigator>
  )
};
