import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = () => (
  <View>
   <Image style={styles.logo} source = {require('../images/logox.png')} />
  </View>
)

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
    
  },

})


export default Logo
