import React from 'react';
import { View } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { useState } from 'react';
import { Header_s4 } from '../../components/searchHeader.js';
import { RenderItem_s4 } from '../../components/searchItems.js';
import { GOV } from '../../data/gov.js';

export default function S4() {

  const [searchQuery, setSearchQuery] = useState(GOV);

  const handleSearch = (value) => {

    if (!value.length) return setSearchQuery(GOV);

    const filteredData = GOV.filter((item) =>
      item.tag.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setSearchQuery(filteredData);
    } else {
      setSearchQuery(GOV);
    };
  };

  return (
    <View style={styles.contain}>
     <FlashList
      data={searchQuery}
      renderItem={({ item }) => <RenderItem_s4 data={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Header_s4 onSearch={handleSearch} />}
      estimatedItemSize={11}
      />
    </View>
  )
};