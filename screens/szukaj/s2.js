import React from 'react';
import { View, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { useState } from 'react';
import { Header_s2 } from '../../data/searchHeader.js';
import { RenderItem_s2 } from '../../data/searchItems.js';
import { Sanepid } from '../../data/sanepid.js';

export default function S2({ navigation, route}) {

  const [searchQuery, setSearchQuery] = useState(Sanepid);

  const handleSearch = (value) => {

    if (!value.length) return setSearchQuery(Sanepid);

    const filteredData = Sanepid.filter((item) =>
      item.tag.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setSearchQuery(filteredData);
    } else {
      setSearchQuery(Sanepid);
    };
  };

  return (
    <View style={styles.contain}>
     <FlatList 
      data={searchQuery}
      renderItem={({ item }) => <RenderItem_s2 data={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Header_s2 onSearch={handleSearch} />}
      />
    </View>
  )
};