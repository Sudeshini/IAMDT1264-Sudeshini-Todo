
import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import TodoList from "@Screens/TodoList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"red"} barStyle="dark-content" />
      <TodoList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
  },
});