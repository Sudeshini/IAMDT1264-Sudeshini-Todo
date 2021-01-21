import React, { useState } from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";

const Splash = (props) => {
  let [fontsLoaded] = useFonts({
    "Inter-Regular": require("../assets/Fonts/Inter-Regular.ttf"),
  });

  return (
    <View style={styles.containerStyle} onPress={() => props.onPress}>
      <StatusBar backgroundColor={"#E77E38"} barStyle="dark-content" />
      <Text style={styles.text}>{"Todo App"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E77E38",
  },
  text: {
    fontFamily: "Inter-Regular",
    marginVertical: 18,
    fontSize: 30,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});

export default Splash;
