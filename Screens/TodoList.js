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

const TodoList = () => {
  let [fontsLoaded] = useFonts({
    "Inter-Regular": require("../assets/Fonts/Inter-Regular.ttf"),
  });

  const [taskList, setTaskList] = useState([
    { id: 0, lable: "New Design for mobile design", value: true },
    { id: 1, lable: "Final Project", value: false },
    { id: 2, lable: "Check Email", value: false },
  ]);

  const handleDelete = (item) => {
    console.log('item',item)
    item.value = true
    taskList.push(item)
    setTaskList(taskList)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Todo App</Text>
      <View style={styles.textInputWrap}>
        <TextInput
          style={styles.input}
          secureTextEntry={false}
          placeholder={"Search"}
          placeholderTextColor={"#939393"}
          returnKeyLabel={"Done"}
          returnKeyType={"done"}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={""}
          editable={true}
        />
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.subtitleText}>Task List</Text>

        <ScrollView>
          {taskList &&
            taskList.map((item, index) => (
              <View style={styles.listItem} key={index}>
                <Text
                  style={
                    item.value ? styles.listItemTextStrike : styles.listItemText
                  }
                >
                  {item.lable}
                </Text>
                {!item.value && (
                  <TouchableOpacity onPress={() => handleDelete(item)}>
                    <Image source={ICONS.bin}></Image>
                  </TouchableOpacity>
                )}
              </View>
            ))}
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Add New Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontFamily: "Inter-Regular",
    fontSize: 22,
    fontWeight: "800",
    color: "#000000",
  },
  listContainer: {
    flex: 3,
  },
  subtitleText: {
    fontFamily: "Inter-Regular",
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    marginVertical: 30,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  listItemText: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    lineHeight: 18,
    color: "#000000",
  },
  listItemTextStrike: {
    textDecorationLine: "line-through",
    fontSize: 16,
    lineHeight: 18,
    color: "#000000",
  },
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
  textInputWrap: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderColor: "#939393",
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 30,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 48,
    padding: 10,
    fontFamily: "Inter-Regular",
    fontSize: 20,
  },
});

export default TodoList;
