import {SafeAreaView, Button, View, Alert} from 'react-native';
import {addFact} from "../../services/factsservice";
import {TextInput} from "react-native";
import {useState} from "react";
import style from "./style.js"

export default function AddFactButton() {

    const [text, setText] = useState('');

    async function handleAddFactAlert() {
        Alert.alert(
            "Fact Added",
            await addFact(text) + 'Success',
        );
    }

    return (
        <SafeAreaView style={style.container}>
            <View>
                <TextInput
                    style={style.textInput}
                    placeholder="Type here to add a fact!"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />
                <Button
                    title={'Add a fact!'}
                    color={style.getFactButton.color}
                    onPress={handleAddFactAlert}
                />
            </View>
        </SafeAreaView>
    );
}