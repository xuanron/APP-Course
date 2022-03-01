import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
        <Text style={styles.text}>
          MY PICK
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#111111",
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        elevation: 8,
    },
    text: {
        fontSize: 20,
        fontWeight: "700",
        color: "#FFFFFF",
    },
  });

  export default Header;