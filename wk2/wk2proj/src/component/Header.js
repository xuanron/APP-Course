import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
        <Text style={styles.text}>
          KESHI
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#2E231F",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        elevation: 50,
    },
    text: {
        fontSize: 20,
        fontWeight: "700",
        color: "#FFFFFF",
    },
  });

  export default Header;