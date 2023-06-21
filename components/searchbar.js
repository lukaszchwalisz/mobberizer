import { View, TextInput } from 'react-native'
import React from 'react'

const Searchbar = ({onSearch}) => {
  return (
   
    <View
          style={{
            borderWidth:2,
            borderRadius: 10,
            borderColor: "yellow",
            padding: 3,
            backgroundColor: "#000", 
            alignItems: "center",
          }}
        >
        <TextInput
          placeholder="Szukaj"
          placeholderfontSize="14"
          placeholderTextColor={'yellow'}
          onChangeText={onSearch}
          style={{ flex: 1, fontSize:14, fontFamily:"Roboto", color: '#d8e2dc'}} 
        />
       
    </View>
  )
}

export {Searchbar}