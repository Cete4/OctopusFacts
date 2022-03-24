import {SafeAreaView, Button, View, Alert} from 'react-native';
import style from './style.js';
import getFact, {addFact} from "../../services/factsservice";

export default function AddFactButton() {


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
                    title={'Add a fact!'}
                    color={style.getFactButton.color}
                    onPress={handleAddFactAlert}
                />
            </View>
        </SafeAreaView>
    );
}