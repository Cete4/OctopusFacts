import React from "react";
import {StyleSheet, Dimensions, Platform} from "react-native";
import {StatusBar} from "expo-status-bar";


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'powderblue',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    thing: {
        backgroundColor: 'black',
        color: 'white',
    },
    header: {
        backgroundColor: 'steelblue',
        color: 'white',
        height: 30,
        width: Dimensions.get('window').width,
        marginTop: 20,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
});

export default style;