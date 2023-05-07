import React from 'react';
import { View, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../../styles/global.js';
import { useState } from 'react';
import { Header_s3 } from '../../data/searchHeader.js';
import { RenderItem_s3 } from '../../data/searchItems.js';
import { Courts } from '../../data/courts.js';

export default function S3({ navigation, route}) {

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
     <FlatList 
      data={searchQuery}
      renderItem={({ item }) => <RenderItem_s3 data={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Header_s3 onSearch={handleSearch} />}
      />
    </View>
  )
};