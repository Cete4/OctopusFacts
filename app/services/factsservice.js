import axios from 'axios';
import config from "../config/local";
import qs from 'qs';

export default async function getFact() {
    const res = await axios.get(config.baseUrl)
    return res.data.fact.facts[getRandomInt(0, res.data.fact.facts.length)] + '';
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export async function addFact(fact) {
    const data = {'fact': fact};
    let url = config.baseUrl;
    const options = {
        method: 'POST',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: qs.stringify(data),
        url,
    };


    const res = axios(options);
    return ''; //TODO: Fix the post method
}