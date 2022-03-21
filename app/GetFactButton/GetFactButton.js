import {SafeAreaView, Button, View, Alert} from 'react-native';
import style from './style.js';

export default function GetFactButton() {
    function handleGetFactAlert() {
        Alert.alert(
            "Your Fact",
            "Octopus are very cool.",

        );
    }


    return (
        <SafeAreaView style={style.container}>
            <View>
                <Button
                    title={'Get a fact!'}
                    color={style.getFactButton.color}
                    onPress={handleGetFactAlert}
                />
            </View>
        </SafeAreaView>
    );
}
