import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import AppStack from "@Navigation/AppStack";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle="dark-content" />
      <AppStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});