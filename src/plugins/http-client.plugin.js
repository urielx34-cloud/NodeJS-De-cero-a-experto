const axios = require('axios');

// const httpClientPlugin = {
//     get: async (url)  =>  {
//     const response = await fetch(url);
//     return await  response.json();
//     },
//     post: async()=>{},
//     put: async()=>{},
//     delete: async()=>{},
// }


//-----uso de axio
const httpClientPlugin = {
    get: async (url)=>{
        const {data} = await axios.get(url); /// destructurando para obtener la data de manera mas rapida no se ocupa cobvertir a json
        return data;
    },
    post: async()=>{},
    put: async()=>{},
    delete: async()=>{},
}

module.exports = {
    httpClientPlugin,
}