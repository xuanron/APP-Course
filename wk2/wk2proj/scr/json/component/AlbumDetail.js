import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const AlbumDetail = (props) => {
    const { title, artist, link } = props.album;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.artist}>{artist}</Text>

            <Image 
                style={styles.image}
                source={{uri: link}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 20,
        color: "#FFFFFF",
        fontWeight: "600",
        marginTop: 25,
    },

    artist: {
        fontSize: 13,
        color: "#C4C4C4",
    },

    image: {
        height: 200,
        width: 200,
        marginTop: 10,
        marginBottom: 50,
        borderRadius: 12,
    },
  });

  export default AlbumDetail;