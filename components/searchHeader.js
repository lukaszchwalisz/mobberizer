import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from '../styles/global.js';

const Header = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>FAQ </Text>
        <Text style={styles.tabs_subtitle}>Najczęściej zadawane pytania dotyczące mobbingu
        w miejscu pracy.{"\n"}{"\n"}
        Stan prawny: 04.05.2022 r.{"\n"}
        </Text>
        <View
          style={{
            borderWidth:.2,
            borderRadius: 50,
            padding: 3,
            backgroundColor: "#fff", 
            alignItems: "center",
          }}
        >
        <TextInput
          placeholder="Szukaj"
          placeholderfontSize="16"
          onChangeText={onSearch}
          style={{ flex: 1, fontSize:16, fontFamily:"Roboto"}} 
        />
        </View>
      </View>
    )
  };

  const Header_s1 = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Państwowa Inspecja Pracy - PIP </Text>
        <Text style={styles.tabs_subtitle}>Jednostki organizacyjne według województw.{"\n"}
        </Text>
        <View
          style={{
            borderWidth:.2,
            borderRadius: 50,
            padding: 3,
            backgroundColor: "#fff", 
            alignItems: "center",
          }}
        >
        <TextInput
          placeholder="Szukaj"
          placeholderfontSize="16"
          onChangeText={onSearch}
          style={{ flex: 1, fontSize:16, fontFamily:"Roboto"}} 
        />
        </View>
      </View>
    )
  };

  const Header_s2 = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Stacje Sanitarno-Epidemiologiczne (Sanepid)</Text>
        <Text style={styles.tabs_subtitle}>Jednostki organizacyjne wojewódzkie (WSSE), powiatowe (PSSE) oraz specjalne graniczne (GSSE).{"\n"}

        </Text>
        <View
          style={{
            borderWidth:.2,
            borderRadius: 50,
            padding: 3,
            backgroundColor: "#fff", 
            alignItems: "center",
          }}
        >
        <TextInput
          placeholder="Szukaj"
          placeholderfontSize="16"
          onChangeText={onSearch}
          style={{ flex: 1, fontSize:16, fontFamily:"Roboto"}} 
        />
        </View>
      </View>
    )
  };

  const Header_s3 = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Struktura sądów powszechnych.</Text>
        <Text style={styles.tabs_subtitle}>Sądy apelacyjne, sądy okręgowe, sądy rejonowe, ze szczególnym uzwględnieniem sądów pracy (tag: #wp).{"\n"}

        </Text>
        <View
          style={{
            borderWidth:.2,
            borderRadius: 50,
            padding: 3,
            backgroundColor: "#fff", 
            alignItems: "center",
          }}
        >
        <TextInput
          placeholder="Szukaj"
          placeholderfontSize="16"
          onChangeText={onSearch}
          style={{ flex: 1, fontSize:16, fontFamily:"Roboto"}} 
        />
        </View>
      </View>
    )
  };

  export {
    Header,
    Header_s1,
    Header_s2,
    Header_s3
  };