import React from "react";
import {StyleSheet} from "react-native";


const style = StyleSheet.create({
    getFactButton: {
        color: 'steelblue',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingHorizontal: 10,

    },
    container: {
        paddingTop: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    textInput: {
        height: 40,
        backgroundColor: 'white',
        marginVertical: 5,
        textAlign: "center"
    }
});

export default style;