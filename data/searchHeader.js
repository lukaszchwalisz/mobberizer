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
            borderRadius: 5,
            padding: 3,
            backgroundColor: "#f5f5dc", 
            // sflexDirection: "row",
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

  export {Header};