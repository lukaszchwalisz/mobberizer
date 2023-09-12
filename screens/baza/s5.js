import React from 'react';
import { View, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { useState } from 'react';
import { Header_s5 } from '../../components/searchHeader.js';
import { RenderItem_s5 } from '../../components/searchItems.js';
import { NGOS } from '../../data/ngos.js';

export default function S5({ navigation, route}) {

  const [searchQuery, setSearchQuery] = useState(NGOS);

  const handleSearch = (value) => {

    if (!value.length) return setSearchQuery(NGOS);

    const filteredData = NGOS.filter((item) =>
      item.tag.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setSearchQuery(filteredData);
    } else {
      setSearchQuery(NGOS);
    };
  };

  return (
    <View style={styles.contain}>
     <FlatList 
      data={searchQuery}
      renderItem={({ item }) => <RenderItem_s5 data={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Header_s5 onSearch={handleSearch} />}
      />
    </View>
  )
};