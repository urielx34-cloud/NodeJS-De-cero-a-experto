//--------------/usando callback-----------------------
// const getPokemonById = (id,callback) => {
//     const url =  `https://pokeapi.co/api/v2/pokemon/${id}`;

//     fetch(url).then((response) => {
//         response.json().then((pokemon) => { /// formata la data de la reespuesta en json para acceder a sus atributos
//              callback(pokemon.name)
//         })
//     })
// }


// const getPokemonById = (id,callback) => {
//     const url =  `https://pokeapi.co/api/v2/pokemon/${id}`;

//     fetch(url)
//     .then((response) =>  response.json()) /// si solo regresa 1 cosa no se ocupa las llaves
//     .then((pokemon) => {
//         callback(pokemon.name)
//     })
// }


//-------------- sin usar callback-----------------------
// const getPokemonById = (id)  => {
//     const url =  `https://pokeapi.co/api/v2/pokemon/${id}`;

//     return fetch(url)
//     .then((response) =>  response.json()) /// si solo regresa 1 cosa no se ocupa las llaves
//     //.then( () => { throw new Error("Pokemon no encontrado") })
//     .then((pokemon) => pokemon.name)
// }
  


 //  EN CUANTO SE AGREGA AWAIT SE COMBIERTE EN UNA PROMESA  para una promesa ocupas ASYNC
// const getPokemonById =  async (id)  =>  {
//     const url =  `https://pokeapi.co/api/v2/pokemon/${id}`;

//     const response = await fetch(url);
//     const datos = await  response.json();
//    //  throw new Error("error")
//     return datos.name;

   
// }

// ahora mejor usamos nuestro plugin custom  TEMA PATRON ADAPTAR AYUDA A CAMBIAR LA ESTRUCTURA DE NUESTRA PETICION DE MANERA SENCILLA
const {httpClientPlugin} = require('../plugins/index')

const getPokemonById =  async (id) => {
    const url =  `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await httpClientPlugin.get(url)
    return pokemon.name;
}


module.exports =  getPokemonById