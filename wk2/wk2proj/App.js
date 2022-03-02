import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Header from "./src/component/Header";
import AlbumList from "./src/component/AlbumList";

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
    backgroundColor: "#66534E",
    paddingBottom:50,
  },
});

export default App;
