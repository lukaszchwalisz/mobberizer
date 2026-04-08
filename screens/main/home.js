import { View, StatusBar } from 'react-native';
import Main from '../../components/main.js';
import { styles } from '../../styles/global.js';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <View style={styles.contain}>
        <LinearGradient
        colors={['#3B97EC', 'white']}
        start={{x: 1, y: 0}}
        end={{x: 2, y: 1}}
        style={styles.contain}
      >
        <Main />
        </LinearGradient>
        <StatusBar />
    </View>
  );
};
