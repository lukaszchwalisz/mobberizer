import React from 'react';
import { View } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { useState } from 'react';
import { Header_s1 } from '../../components/searchHeader.js';
import { RenderItem_s1 } from '../../components/searchItems.js';
import { PIP } from '../../data/pip.js';

export default function S1() {

  const [searchQuery, setSearchQuery] = useState(PIP);

  const handleSearch = (value) => {

    if (!value.length) return setSearchQuery(PIP);

    const filteredData = PIP.filter((item) =>
      item.tag.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setSearchQuery(filteredData);
    } else {
      setSearchQuery(PIP);
    };
  };

  return (
    <View style={styles.contain}>
     <FlashList
      data={searchQuery}
      renderItem={({ item }) => <RenderItem_s1 data={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Header_s1 onSearch={handleSearch} />}
      estimatedItemSize={17}
      />
    </View>
  )
};