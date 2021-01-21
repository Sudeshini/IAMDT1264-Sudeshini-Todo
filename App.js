import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import TodoList from "@Screens/TodoList";
import NewTask from "@Screens/NewTask";
import Splash from "@Screens/Splash";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle="dark-content" />
      {/* <TodoList /> */}
      {/* <NewTask /> */}
      <Splash />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});