import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import S0  from '../baza/s0.js';
import S1  from '../baza/s1.js';
import S2  from '../baza/s2.js';
import S3  from '../baza/s3.js';
import S4  from '../baza/s4.js';
import S5  from '../baza/s5.js';

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
             <Sear.Screen name="s2" component={ S2 } options={{ title: 'Stacje Sanitarno-Epidemiologiczne - Sanepid',        
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
             <Sear.Screen name="s3" component={ S3 } options={{ title: 'Sądy powszechne',        
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
             <Sear.Screen name="s4" component={ S4 } options={{ title: 'Organy rządowe',        
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
            <Sear.Screen name="s5" component={ S5 } options={{ title: 'Organizacje pozarządowe',        
              // headerStyle: {backgroundColor: '#2f2f2f'}, 
              // headerTintColor:  '#9FE2BF', 
              // headerTitleStyle: { color: '#9FE2BF' }
              }} />
       </Sear.Navigator>
  )
};
