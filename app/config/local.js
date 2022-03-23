import {Platform} from "react-native";

// TODO: Change the URL to your local IP
const config = {
    baseUrl: Platform.OS === 'android' ? 'http://192.168.1.43:3000/' : 'http://localhost:3000'
}

export default config;