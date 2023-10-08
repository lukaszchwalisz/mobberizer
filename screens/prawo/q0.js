import React from 'react';
import { View } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { useState } from 'react';
import { Law_header } from '../../components/searchHeader.js';
import { Law_item } from '../../components/searchItems.js';
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
     <FlashList 
      data={searchQuery}
      renderItem={({ item }) => <Law_item data={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Law_header onSearch={handleSearch} />}
      estimatedItemSize={20}
      />
    </View>
  )
};