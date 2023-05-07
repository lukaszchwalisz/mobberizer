import React from 'react';
import { View, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { useState } from 'react';
import { Header } from '../../components/searchHeader.js';
import { RenderItem } from '../../components/searchItems.js';
import { Pytania } from '../../data/pytania.js';

export default function Q0({ navigation, route}) {

  const [searchQuery, setSearchQuery] = useState(Pytania);

  const handleSearch = (value) => {

    if (!value.length) return setSearchQuery(Pytania);

    const filteredData = Pytania.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setSearchQuery(filteredData);
    } else {
      setSearchQuery(Pytania);
    };
  };

  return (
    <View style={styles.contain}>
     <FlatList 
      data={searchQuery}
      renderItem={({ item }) => <RenderItem data={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Header onSearch={handleSearch} />}
      />
    </View>
  )
};