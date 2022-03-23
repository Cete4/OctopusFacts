import {SafeAreaView, Button, View, Alert} from 'react-native';
import style from './style.js';
import getFact, {addFact} from "../../services/factsservice";

export default function AddFactButton() {

    async function handleGetFactAlert() {
        Alert.alert(
            "Your Fact",
            await getFact() + '',
        );
    }

    async function handleAddFactAlert() {
        Alert.alert(
            "Your Fact",
            await getFact() + '',
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
                <Button
                    title={'Add a fact'}
                    color={style.getFactButton.color}
                    onPress={handleAddFactAlert}
                />
            </View>
        </SafeAreaView>
    );
}