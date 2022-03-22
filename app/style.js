import React from "react";
import {StyleSheet, Platform} from "react-native";
import {StatusBar} from "expo-status-bar";


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});

export default style;