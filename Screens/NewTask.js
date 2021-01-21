import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Button from "@Components/Button";
import { useFonts } from "expo-font";

const NewTask = () => {
  let [fontsLoaded] = useFonts({
    "Inter-Regular": require("../assets/Fonts/Inter-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Create New Task</Text>
      <View style={styles.textInputWrap}>
        <TextInput
          style={styles.input}
          secureTextEntry={false}
          placeholder={"New Task"}
          placeholderTextColor={"#939393"}
          returnKeyLabel={"Done"}
          returnKeyType={"done"}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={"ascii-capable"}
          underlineColorAndroid="transparent"
          editable={true}
        />
      </View>
      <View style={styles.textInputWrap}>
        <TextInput
          style={styles.textArea}
          secureTextEntry={false}
          placeholder={"Detail"}
          placeholderTextColor={"#939393"}
          returnKeyLabel={"Done"}
          returnKeyType={"done"}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          multiline={true}
          numberOfLines={10}
          underlineColorAndroid="transparent"
          keyboardType={"ascii-capable"}
          editable={true}
        />
      </View>
      <Button lable={"Create"} onPress={() => {}}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  titleText: {
    fontFamily: "Inter-Regular",
    fontSize: 22,
    fontWeight: "800",
    color: "#000000",
  },
  textInputWrap: {
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    marginVertical: 30,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.1,
    elevation: 4,
  },
  input: {
    height: 48,
    padding: 10,
    fontFamily: "Inter-Regular",
    fontSize: 20,
  },
  textArea: {
    height: 150,
    textAlignVertical: "top",
    padding: 10,
    fontFamily: "Inter-Regular",
    fontSize: 20,
  },
});

export default NewTask;
