import React from 'react';
import { View } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { useState } from 'react';
import { Header_s3 } from '../../components/searchHeader.js';
import { RenderItem_s3 } from '../../components/searchItems.js';
import { Courts } from '../../data/courts.js';

export default function S3() {

  const [searchQuery, setSearchQuery] = useState(Courts);

  const handleSearch = (value) => {

    if (!value.length) return setSearchQuery(Courts);

    const filteredData = Courts.filter((item) =>
      item.tag.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setSearchQuery(filteredData);
    } else {
      setSearchQuery(Courts);
    };
  };

  return (
    <View style={styles.contain}>
     <FlashList 
      data={searchQuery}
      renderItem={({ item }) => <RenderItem_s3 data={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Header_s3 onSearch={handleSearch} />}
      estimatedItemSize={377}
      />
    </View>
  )
};