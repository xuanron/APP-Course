import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import AlbumDetail from "./AlbumDetail";
import AlbumData from "../json/Album";

const AlbumList = () => {
    return (
        <ScrollView>
            <AlbumDetail album = {AlbumData[0]} />
            <AlbumDetail album = {AlbumData[1]} />
            <AlbumDetail album = {AlbumData[2]} />
            <AlbumDetail album = {AlbumData[3]} />
            <AlbumDetail album = {AlbumData[4]} />            
        </ScrollView>

    );
};

export default AlbumList;