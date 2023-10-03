import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Searchbar } from 'react-native-paper';
import { styles } from '../styles/global.js';

const Law_header = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Pytania prawne.</Text>
        <Text style={styles.tabs_subtitle}>Najczęściej zadawane pytania dotyczące mobbingu w miejscu pracy.{"\n"}
        </Text>
        <Image source={require('../assets/images/image37.png')} resizeMode="cover" style={style.image} />
        <Searchbar
          placeholder="Szukaj"
          style={{
            padding: 5,
            borderWidth:1,
            borderRadius: 50,
            borderColor: "#a2d2ff",          
            backgroundColor: "white", 
          }}
          onChangeText={onSearch}
        />
      </View>
    )
  };

  const Dict_header = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Słownik.</Text>
        <Text style={styles.tabs_subtitle}>Terminy psychologiczne i prawne związane z mobbingiem w pracy.{"\n"}</Text>
        <Image source={require('../assets/images/image46.png')} resizeMode="cover" style={style.image} />
        
          <Searchbar
            placeholder="Szukaj"
            style={{
              padding: 5,
              borderWidth:1,
              borderRadius: 50,
              borderColor: "#a2d2ff",          
              backgroundColor: "white", 
            }}
            onChangeText={onSearch}
          />
       
        </View>
    )
  };

  const Header_s1 = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Państwowa Inspecja Pracy - PIP.</Text>
        <Text style={styles.tabs_subtitle}>Baza jednostek organizacyjnych PIP według województw.{"\n"}</Text>
        <View>
          <Searchbar
            placeholder="Szukaj"
            style={{
              padding: 5,
              borderWidth:1,
              borderRadius: 50,
              borderColor: "#a2d2ff",          
              backgroundColor: "white", 
            }}
            onChangeText={onSearch}
          />
        </View>
        </View>
    )
  };

  const Header_s2 = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Stacje Sanitarno-Epidemiologiczne - Sanepid.</Text>
        <Text style={styles.tabs_subtitle}>Baza jednostek organizacyjnych: wojewódzkie (WSSE), powiatowe (PSSE) oraz specjalne graniczne (GSSE).{"\n"}
        </Text>
        <View>
          <Searchbar
            placeholder="Szukaj"
            style={{
              padding: 5,
              borderWidth:1,
              borderRadius: 50,
              borderColor: "#a2d2ff",          
              backgroundColor: "white", 
            }}
            onChangeText={onSearch}
          />
        </View>
        </View>
    )
  };

  const Header_s3 = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Sądy powszechne.</Text>
        <Text style={styles.tabs_subtitle}>Struktura sądów powszechnych: sądy apelacyjne; sądy okręgowe; sądy rejonowe (#wp - sądy zawierające wydziały pracy).{"\n"}
        </Text>
        <View>
          <Searchbar
            placeholder="Szukaj"
            style={{
              padding: 5,
              borderWidth:1,
              borderRadius: 50,
              borderColor: "#a2d2ff",          
              backgroundColor: "white", 
            }}
            onChangeText={onSearch}
          />
        </View>
        </View>
    )
  };

  const Header_s4 = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Organy rządowe.</Text>
        <Text style={styles.tabs_subtitle}>Baza instytucji państwowych zajmujących się m.i. mobbingiem, dyskryminacją i prawami człowieka.{"\n"}
        </Text>
        <View>
          <Searchbar
            placeholder="Szukaj"
            style={{
              padding: 5,
              borderWidth:1,
              borderRadius: 50,
              borderColor: "#a2d2ff",          
              backgroundColor: "white", 
            }}
            onChangeText={onSearch}
          />
        </View>
        </View>
    )
  };

  const Header_s5 = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Organizacja pozarządowe.</Text>
        <Text style={styles.tabs_subtitle}>Baza organizacji pozarządowych zajmujących się m.i. mobbingiem, dyskryminacją i prawami człowieka.{"\n"}
        </Text>
        <View>
          <Searchbar
            placeholder="Szukaj"
            style={{
              padding: 5,
              borderWidth:1,
              borderRadius: 50,
              borderColor: "#a2d2ff",          
              backgroundColor: "white", 
            }}
            onChangeText={onSearch}
          />
        </View>
        </View>
    )
  };

  export {
    Law_header,
    Dict_header,
    Header_s1,
    Header_s2,
    Header_s3,
    Header_s4,
    Header_s5
  };

  const style = StyleSheet.create({
    image: {
      flex: 1,
      width: '100%', 
      height: 300, 
      marginBottom: 20, 
      padding:30,
      alignItems: "center",
      borderRadius: 10
    },
  })