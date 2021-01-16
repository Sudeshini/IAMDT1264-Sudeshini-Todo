
import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import TodoList from './Screens/TodoList'

export default function App() {
  return (
    <SafeAreaView> 
      <StatusBar backgroundColor={'red'} barStyle="light-content" />
    <TodoList />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
