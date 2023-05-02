import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import S0  from '../szukaj/s0.js';
import S1  from '../szukaj/s1.js';
import S2  from '../szukaj/s2.js';
import S3  from '../szukaj/s3.js';

const Sear = createStackNavigator()

export default function Szukaj({ navigation, route }) {
  return (
       <Sear.Navigator>
             <Sear.Screen name="s0" component={ S0 } options={{ title: 'Wyszukiwarka instytucji',
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
