import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from "react-native";
import ICONS from "@Assets/icon";
import { useFonts } from "expo-font";
import Button from "@Components/Button";

const TodoList = (props) => {
  let [fontsLoaded] = useFonts({
    "Inter-Regular": require("../assets/Fonts/Inter-Regular.ttf"),
  });

  const [taskList, setTaskList] = useState([
    { id: 0, lable: "New Design for mobile design", value: true },
    { id: 1, lable: "Final Project", value: false },
    { id: 2, lable: "Check Email", value: false },
  ]);

  const handleDelete = (item) => {
    // loop over the todos list and find the provided id.
    let updatedList = taskList.map((task) => {
      if (task.id == item.id) {
        return { ...task, value: !task.value }; //gets everything that was already in item, and updates "done"
      }
      return task; // else return unmodified item
    });
    setTaskList(updatedList); // set state to new object with updated list
  };

  const handleNavigation = () => {
    props.navigation.navigate("NewTask", { handleAddTask: handleAddTask });
  };

  const handleAddTask = (data) => {
    setTaskList((state) => [
      ...state,
      {
        id: taskList.length + 1,
        lable: data.lable,
        value: false,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#000000"} barStyle="light-content" />
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
          keyboardType={"ascii-capable"}
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
      <Button lable={"Add New Task"} onPress={handleNavigation}></Button>
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
});

export default TodoList;
