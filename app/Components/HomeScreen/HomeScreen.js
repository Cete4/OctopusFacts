import {SafeAreaView, StatusBar, Text} from 'react-native';
import style from './style.js';
import GetFactButton from "../GetFactButton/GetFactButton.js";

export default function HomeScreen() {
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor='black' barStyle='light-content'/>
            <Text style={style.header}>Octopus Facts</Text>
            <GetFactButton/>
        </SafeAreaView>
    );
}