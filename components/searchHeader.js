import React from "react";
import { View, StyleSheet, Text, TextInput, Image, ImageBackground } from "react-native";
import { styles } from '../styles/global.js';

const Header = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>FAQ </Text>
        <Text style={styles.tabs_subtitle}>Najczęściej zadawane pytania dotyczące mobbingu
        w miejscu pracy.{"\n"}
        </Text>
        <Image source={require('../assets/images/image37.png')} resizeMode="cover" style={style.image} />
         <View
          style={{
            borderWidth:1,
            borderRadius: 10,
            borderColor: "#457B9D",
            padding: 5,
            backgroundColor: "#a2d2ff", 
            alignItems: "center",
          }}
        >
        <TextInput
          placeholder="Szukaj"
          placeholderfontSize="14"
          placeholderTextColor={'#457B9D'}
          onChangeText={onSearch}
          style={{ flex: 1, fontSize:16, fontFamily:"Roboto", color:"#E63946"}} 
        />
      </View>
      </View>
    )
  };

  const Header_s1 = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Państwowa Inspecja Pracy - PIP </Text>
        <Text style={styles.tabs_subtitle}>- jednostki organizacyjne według województw{"\n"}</Text>
        <View
          style={{
            borderWidth:1,
            borderRadius: 10,
            borderColor: "#457B9D",
            padding: 5,
            backgroundColor: "#a2d2ff", 
            alignItems: "center",
          }}
        >
        <TextInput
          placeholder="Szukaj"
          placeholderfontSize="14"
          placeholderTextColor={'#457B9D'}
          onChangeText={onSearch}
          style={{ flex: 1, fontSize:16, fontFamily:"Roboto", color:"#E63946"}} 
        />
      </View>
      </View>
    )
  };

  const Header_s2 = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Stacje Sanitarno-Epidemiologiczne (Sanepid)</Text>
        <Text style={styles.tabs_subtitle}>- jednostki organizacyjne: wojewódzkie (WSSE), powiatowe (PSSE) oraz specjalne graniczne (GSSE).{"\n"}
        </Text>
        <View
          style={{
            borderWidth:1,
            borderRadius: 10,
            borderColor: "#457B9D",
            padding: 5,
            backgroundColor: "#a2d2ff", 
            alignItems: "center",
          }}
        >
        <TextInput
          placeholder="Szukaj"
          placeholderfontSize="14"
          placeholderTextColor={'#457B9D'}
          onChangeText={onSearch}
          style={{ flex: 1, fontSize:16, fontFamily:"Roboto", color:"#E63946"}} 
        />
      </View>
      </View>
    )
  };

  const Header_s3 = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Struktura sądów powszechnych.</Text>
        <Text style={styles.tabs_subtitle}>- sądy apelacyjne; sądy okręgowe; sądy rejonowe (ze szczególnym uzwględnieniem sądów pracy, tag: #wp).{"\n"}
        </Text>
        <View
          style={{
            borderWidth:1,
            borderRadius: 10,
            borderColor: "#457B9D",
            padding: 5,
            backgroundColor: "#a2d2ff", 
            alignItems: "center",
          }}
        >
        <TextInput
          placeholder="Szukaj"
          placeholderfontSize="14"
          placeholderTextColor={'#457B9D'}
          onChangeText={onSearch}
          style={{ flex: 1, fontSize:16, fontFamily:"Roboto", color:"#E63946"}} 
        />
      </View>
      </View>
    )
  };

  const Header_s4 = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Słownik</Text>
        <Text style={styles.tabs_subtitle}>- słownik terminów psychologicznych i prawnych związanych z mobbingiem w pracy{"\n"}</Text>
        <Image source={require('../assets/images/image46.png')} resizeMode="cover" style={style.image} />
      <View
          style={{
            borderWidth:1,
            borderRadius: 10,
            borderColor: "#457B9D",
            padding: 5,
            backgroundColor: "#a2d2ff", 
            alignItems: "center",
          }}
        >
        <TextInput
          placeholder="Szukaj"
          placeholderfontSize="14"
          placeholderTextColor={'#457B9D'}
          onChangeText={onSearch}
          style={{ flex: 1, fontSize:16, fontFamily:"Roboto", color:"#E63946"}} 
        />
      </View>
  
      </View>
    )
  };

  export {
    Header,
    Header_s1,
    Header_s2,
    Header_s3,
    Header_s4
  };

  const style = StyleSheet.create({
    image: {
      flex: 1,
      width: '100%', 
      height: 300, 
      marginBottom: 20, 
      padding:30,
      alignItems: "center",
    },
  })