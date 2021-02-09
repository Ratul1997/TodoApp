/// import libraries
import React, { Component, useState, useEffect, useRef } from "react";
import { Text, View, Button, FlatList, Dimensions } from "react-native";
import Header from "../common/Header";
import normalization from "../constant/normalization";
import { TodoModel } from "../models/TodoModel";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import Item from "./Item";

/// dimensions
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default function Home() {
  /// states declaration start
  const initialState = [
    new TodoModel("Course is Running"),
    new TodoModel("Have to spent time")
  ];
  const initialTextValue = "";
  const [textValue, setTextValue] = useState(initialTextValue);
  const [data, setData] = useState(initialState);
  
  /// render Flatlist Item
  const renderItem = ({ index, item }) => {
    return (
      <Item item={item} index={index} onUpdate={onUpdate} onDelete={onDelete} />
    );
  };

  ///update data
  const onUpdate = (newTitle, index) => {
    const previousTodoList = data;
    previousTodoList[index].title = newTitle;
    setData([...previousTodoList]);
  };

  ///onAdd
  const onSubmit = () => {
    const oldData = data;
    oldData.push(new TodoModel(textValue));
    setData(oldData);
    setTextValue(initialTextValue);
  };

  ///onDelete Data
  const onDelete = index => {
    console.log("Delete");
    const previousTodoList = data;
    previousTodoList.splice(index, 1);
    setData([...previousTodoList]);
  };
  return (
    <View style={{ flex: 1 }}>
      {/* header Start */}
      <Header title="Todo" />
      {/* header End */}

      {/* TextInput filed Start */}
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
          value={textValue}
          onChangeText={text => setTextValue(text)}
          multiline
        />
        <Button title="ADD" onPress={onSubmit} />
      </View>
      {/* TextInput filed End */}

      {/* FlatList Item Start*/}
      <View style={{ flex: 1, backgroundColor: "transparent" }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
      {/* FlatList Item End*/}
    </View>
  );
}
