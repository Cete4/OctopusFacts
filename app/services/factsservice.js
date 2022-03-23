import axios from 'axios';
import config from "../config/local";

export default async function getFact() {
    const res = await axios.get(config.baseUrl)
    console.log(res.data.fact);
    return res.data.fact + '';
}

export async function addFact(fact) {
    const res = await axios.post(config.baseUrl, {
        fact: f
    })
    console.log(res.data.fact);
    return res.data.fact + '';
}

