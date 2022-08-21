import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from '../styles/global.js';

const Header = ({onSearch}) => {
    return (
        <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>FAQ </Text>
        <Text style={styles.tabs_subtitle}>Najczęściej zadawane pytania dotyczące mobbingu
        w miejscu pracy.{"\n"}{"\n"}
        Stan prawny: 04.05.2022 r.
        </Text>

        <TextInput
          placeholder="Szukaj według hasła"
          onChangeText={onSearch}
          style={{ flex: 1 }}
        />

      </View>

    )
  };

  export {Header};