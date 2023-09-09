import React from 'react';
import { View, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { useState } from 'react';
import { Dict_header } from '../../components/searchHeader.js';
import { Dict_item } from '../../components/searchItems.js';
import { Dict } from '../../data/dict.js';

export default function Słownik() {

  const [searchQuery, setSearchQuery] = useState(Dict);

  const handleSearch = (value) => {

    if (!value.length) return setSearchQuery(Dict);

    const filteredData = Dict.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setSearchQuery(filteredData);
    } else {
      setSearchQuery(Dict);
    };
  };

  return (
    <View style={styles.contain}>
     <FlatList 
      data={searchQuery}
      renderItem={({ item }) => <Dict_item data={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Dict_header onSearch={handleSearch} />}
      />
    </View>
  )
};




