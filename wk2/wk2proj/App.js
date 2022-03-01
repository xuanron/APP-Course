import React from "./node_modules/react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Header from './src/component/Header';
import AlbumList from './src/component/AlbumList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <AlbumList />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
  }
});

export default App;