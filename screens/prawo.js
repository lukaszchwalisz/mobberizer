import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Q0  from './prawo/q0.js';
import Q1  from './prawo/q1.js';
import Q2  from './prawo/q2.js';
import Q3 from './prawo/q3.js';
import Q4 from './prawo/q4.js';
import Q5 from './prawo/q5.js';
import Q6  from './prawo/q6.js';
import Q7  from './prawo/q7.js';
import Q8 from './prawo/q8.js';
import Q9 from './prawo/q9.js';
import Q10 from './prawo/q10.js';
import Q11  from './prawo/q11.js';
import Q12  from './prawo/q12.js';
import Q13  from './prawo/q13';
import Q14 from './prawo/q14.js';
import Q15 from './prawo/q15.js';
import Q16 from './prawo/q16.js';
import Q17  from './prawo/q17.js';
import Q18  from './prawo/q18.js';
import Q19 from './prawo/q19.js';
import Q20 from './prawo/q20.js';
import Q21  from './prawo/q21.js';
import Q22  from './prawo/q22.js';
import Q23  from './prawo/q23.js';
import Q24 from './prawo/q24.js';
import Q25 from './prawo/q25.js';
import Q26 from './prawo/q26.js';
import Q27  from './prawo/q27.js';
import Q28  from './prawo/q28.js';
import Q29 from './prawo/q29.js';



const Law = createStackNavigator()

export default function Prawo({ navigation, route }) {
  return (
       <Law.Navigator>
             <Law.Screen name="q0" component={ Q0 } options={{ title: 'Pytania prawne' }} />
             <Law.Screen name="q1" component={ Q1 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q2" component={ Q2 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q3" component={ Q3 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q4" component={ Q4 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q5" component={ Q5 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q6" component={ Q6 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q7" component={ Q7 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q8" component={ Q8 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q9" component={ Q9 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q10" component={ Q10 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q11" component={ Q11 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q12" component={ Q12 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q13" component={ Q13 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q14" component={ Q14 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q15" component={ Q15 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q16" component={ Q16 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q17" component={ Q17 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q18" component={ Q18 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q19" component={ Q19 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q20" component={ Q20 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q21" component={ Q21 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q22" component={ Q22 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q23" component={ Q23 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q24" component={ Q24 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q25" component={ Q25 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q26" component={ Q26 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q27" component={ Q27 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q28" component={ Q28 } options={{ title: 'FAQ' }} />
             <Law.Screen name="q29" component={ Q29 } options={{ title: 'FAQ' }} />
       </Law.Navigator>
  )
};

