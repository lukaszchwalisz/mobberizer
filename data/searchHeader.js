import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from '../styles/global.js';

const Header = ({onSearch}) => {
    return (
      <View style={styles.tabs_header}>
        <Text style={styles.tabs_title}>Wyszukaj </Text>
        <Text style={styles.tabs_subtitle}>Informacje na temat instytucji pomocowych.
        </Text>

        <TextInput
          placeholder="Znajdź"
          onChangeText={onSearch}
          style={{ flex: 1 }}
        />

      </View>

    )
  };

  export {Header};