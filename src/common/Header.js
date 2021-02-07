import React, { useState } from "react";
import { View, Text } from "react-native";
import ColorCode from "../constant/ColorCode";
import normalize from '../constant/normalization'
export default function Header({title}) {
  return (
    <View
      style={{
        height: normalize(50),
        backgroundColor: ColorCode.primary_color,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
        <Text style={{color:ColorCode.text_color, fontSize:normalize(20)}}>{title}</Text>
    </View>
  );
}
