/// import libraries
import React, { Component, useState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Modal
} from "react-native";
import normalization from "../constant/normalization";
import { TextInput } from "react-native-gesture-handler";
import {
  Menu,
  MenuTrigger,
  MenuOption,
  MenuOptions
} from "react-native-popup-menu";
import ColorCode from "../constant/ColorCode";
import Entypo from "react-native-vector-icons/Entypo";

/// dimensions
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

/// Item Design
export default function Item(props) {
  ///get props data
  const { item } = props;

  /// initialize states
  const [isVisible, setIsVisible] = useState(false);
  const [textValue, setTextValue] = useState(item.title);

  ///handle update Button
  const onUpdate = () => {
    const { index } = props;
    props.onUpdate(textValue, index);
    setIsVisible(false);
  };

  /// handle onDelete Button
  const onDelete = () => {
    const { index } = props;
    props.onDelete(index);
  };

  return (
    <>
      <Menu>
        <MenuTrigger>
          <View
            style={{
              padding: normalization(15),
              borderRadius: normalization(10),
              elevation: 1,
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
            <Text>{item.title}</Text>
          </View>
        </MenuTrigger>

        {/* Menu Option */}
        <MenuOptions
          optionsContainerStyle={{
            marginLeft: normalization(SCREEN_WIDTH / 2),
            marginTop: normalization(40)
          }}
        >
          <MenuOption text="Update" onSelect={() => setIsVisible(true)} />
          <MenuOption text="Delete" onSelect={onDelete} />
        </MenuOptions>
      </Menu>

      <Modal
        animationType={"fade"}
        visible={isVisible}
        transparent={true}
        presentationStyle="overFullScreen"
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        {/* Background of Modal */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
        >
          {/*All views of Modal*/}
          <View
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: ColorCode.background_color,
              height: normalization(150),
              width: "80%",
              borderRadius: normalization(10),
              borderWidth: 1,
              borderColor: "#fff",
              marginTop: normalization(80),
              marginVertical: normalization(40)
            }}
          >
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              style={{
                position: "absolute",
                right: 0,
                top: normalization(-15),
                backgroundColor: "white",
                borderRadius: normalization(30),
                borderWidth: 1
              }}
            >
              <Entypo name="cross" size={normalization(30)} />
            </TouchableOpacity>

            <TextInput
              style={{
                width: "80%",
                borderColor: "gray",
                borderWidth: 1,
                textAlignVertical: "top"
              }}
              value={textValue}
              autoCorrect={false}
              onChangeText={text => setTextValue(text)}
              multiline
            />
            <Button title="Update" onPress={onUpdate} />
          </View>
        </View>
      </Modal>
    </>
  );
}
