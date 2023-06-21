import { View, TextInput } from 'react-native'
import React from 'react'

const Searchbar = ({onSearch}) => {
  return (
   
      <View
          style={{
            borderWidth:1,
            borderRadius: 10,
            borderColor: "#457B9D",
            padding: 5,
            backgroundColor: "#a2d2ff", 
            alignItems: "center",
          }}
        >
        <TextInput
          placeholder="Szukaj"
          placeholderfontSize="14"
          placeholderTextColor={'#457B9D'}
          onChangeText={onSearch}
          style={{ flex: 1, fontSize:16, fontFamily:"Roboto", color:"#E63946"}} 
        />
      </View>
  )
}

export { Searchbar };