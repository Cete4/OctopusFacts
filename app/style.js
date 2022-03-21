import React from "react";
import {StyleSheet, Dimensions} from "react-native";


const page = StyleSheet.create({
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

export default page;