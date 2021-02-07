import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCode from "./src/constant/ColorCode";
import Home from "./src/component/Home";
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:ColorCode.background_color}}>
        <Home/>
      </View>
    );
  }
}
