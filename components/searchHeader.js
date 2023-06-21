import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import { styles } from '../styles/global.js';
import { Searchbar } from './searchbar.js';

const Header = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>FAQ </Text>
        <Text style={styles.tabs_subtitle}>Najczęściej zadawane pytania dotyczące mobbingu
        w miejscu pracy.{"\n"}
        </Text>
        <Image
          style={{ flex: 1, width: '100%', height: 300, marginBottom: 20 }}
          source={
            require('../assets/images/image37.png')
            }
        /> 

        <Searchbar />

        {/* <View
          style={{
            borderWidth:2,
            borderRadius: 10,
            borderColor: "yellow",
            padding: 3,
            backgroundColor: "#000", 
            alignItems: "center",
          }}
        >
        <TextInput
          placeholder="Szukaj"
          placeholderfontSize="14"
          placeholderTextColor={'yellow'}
          onChangeText={onSearch}
          style={{ flex: 1, fontSize:14, fontFamily:"Roboto", color: '#d8e2dc'}} 
        />
        </View> */}
 
      </View>
    )
  };

  const Header_s1 = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Państwowa Inspecja Pracy - PIP </Text>
        <Text style={styles.tabs_subtitle}>Jednostki organizacyjne według województw.{"\n"}
        </Text>
        <Searchbar />
      </View>
    )
  };

  const Header_s2 = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Stacje Sanitarno-Epidemiologiczne (Sanepid)</Text>
        <Text style={styles.tabs_subtitle}>Jednostki organizacyjne wojewódzkie (WSSE), powiatowe (PSSE) oraz specjalne graniczne (GSSE).{"\n"}
        </Text>
        <Searchbar />
      </View>
    )
  };

  const Header_s3 = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Struktura sądów powszechnych.</Text>
        <Text style={styles.tabs_subtitle}>Sądy apelacyjne, sądy okręgowe, sądy rejonowe, ze szczególnym uzwględnieniem sądów pracy (tag: #wp).{"\n"}
        </Text>
        <Searchbar />
      </View>
    )
  };

  const Header_s4 = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Słownik</Text>
        <Text style={styles.tabs_subtitle}>- słownik terminów psychologicznych i prawnych związanych z mobbingiem w pracy{"\n"}</Text>
        <Image
          style={{ flex: 1, width: '100%', height: 300, marginBottom: 20 }}
          source={
            require('../assets/images/image46.png')
            }
        /> 
        <Searchbar /> 
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