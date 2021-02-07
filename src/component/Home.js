import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from "react-native";
import Header from "../common/Header";
import normalization from "../constant/normalization";
import { TodoModel } from "../models/TodoModel";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";

const Item = ({ title }) => (
  <TouchableOpacity onLongPress={()=>console.log("Long Pressed")}
    style={{
      padding: normalization(15),
      borderRadius: normalization(10),
      elevation: 3,
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 6
      },
      shadowOpacity: 0.35,
      marginHorizontal: normalization(5),
      marginVertical: normalization(5)
    }}
  >
    <Text>{title}</Text>
  </TouchableOpacity>
);

export default function Home() {
  const initialState = [
    new TodoModel("Course is Running"),
    new TodoModel("Have to spent time")
  ]
  const initialTextValue = ''
  const [textValue, setTextValue] = useState(initialTextValue)
  const [data, setData] = useState(initialState)
  const renderItem = ({ index, item }) => {
    return <Item title = {item.title}/>;
  };

  const onSubmit = () =>{
    const oldData = data
    oldData.push(new TodoModel(textValue))
    setData(oldData)
    setTextValue(initialTextValue)
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title="Todo" />
      <View
        style={{
          flexDirection: "row",
          height: normalization(50),
          justifyContent: "space-between",
          marginHorizontal: normalization(10),
          marginVertical: normalization(10)
        }}
      >
        <TextInput
          style={{
            width: "80%",
            borderColor: "gray",
            borderWidth: 1,
            textAlignVertical: "top"
          }}
          value ={textValue}
          onChangeText = {text =>  setTextValue(text)}
          multiline

        />
        <Button title="ADD" onPress = {onSubmit}/>
      </View>
      <View style={{ flex: 1, backgroundColor: "transparent" }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </View>
  );
}
