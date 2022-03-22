import {SafeAreaView, Button, View, Alert} from 'react-native';
import style from './style.js';
import getFact from '../../services/factsservice.js'

export default function GetFactButton() {

    async function handleGetFactAlert() {
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
            </View>
        </SafeAreaView>
    );
}
