import {SafeAreaView} from 'react-native';
import style from './style.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer'
import HomeScreen from "./Components/HomeScreen/HomeScreen.js";

const store = createStore(reducer);

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaView style={style.container}>
                <HomeScreen/>
            </SafeAreaView>
        </Provider>
    );
}
