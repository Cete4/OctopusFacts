import {StatusBar} from 'expo-status-bar';
import {StyleSheet, SafeAreaView, Platform, Text} from 'react-native';
import style from './style.js';
import GetFactButton from "./GetFactButton/GetFactButton";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={style.header}>Octopus Facts</Text>
            <GetFactButton/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'powderblue',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
