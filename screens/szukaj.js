import React from 'react';
import { View, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../styles/global.js';
import { useState } from 'react';
import { Header } from '../data/searchHeader.js';
import { RenderItem } from '../data/searchItems.js';
import { DATA } from '../data/data.js';

export default function Szukaj({ navigation, route}) {

  const [searchQuery, setSearchQuery] = useState(DATA);

    const handleSearch = (value) => {

      if (!value.length) return setSearchQuery(DATA);

      const filteredData = DATA.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
  
      if (filteredData.length) {
        setSearchQuery(filteredData);
      } else {
        setSearchQuery(DATA);
      };
    };

  return (
    <View style={styles.contain}>
     <FlatList 
      data={searchQuery}
      renderItem={RenderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Header onSearch={handleSearch} />}
      />
    </View>
  )
};
