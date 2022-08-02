import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = () => (
  <View>
   <Image style={styles.logo} source = {require('../images/logo.png')} />
  </View>
)

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    height: "50%",
    width: "50%",
    
  },

})


export default Logo
