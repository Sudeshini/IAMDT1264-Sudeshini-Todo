import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from "react-native";
import ICONS from "@Assets/icon";
import { useFonts } from "expo-font";

const Button = (props) => {
  let [fontsLoaded] = useFonts({
    "Inter-Regular": require("../assets/Fonts/Inter-Regular.ttf"),
  });

  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={() => props.onPress}>
      <Text style={styles.buttonText}>{props.lable}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#E77E38",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
  },
  buttonText: {
    fontFamily: "Inter-Regular",
    marginVertical: 18,
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});

export default Button;
