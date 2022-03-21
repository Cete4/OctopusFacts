import axios from 'axios';

const getFact = axios({
    method: 'get',
    url: '',
    responseType: 'json'
}).then(function (res) {
        return res;
    }
)