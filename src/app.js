
 //const templateExports = require('./js-foundation/01-templates')
//  const {emailTemplat} = require('./js-foundation/01-templates') //con destructuracion {emailTemplat} evitamos traer todo el objeto

const getPokemonById = require("./js-foundation/06-promesas");


//   require('./js-foundation/02-destructuring')

// const {gatUserById} =  require('./js-foundation/03-callbacks')
//  const {gatUserById} =  require('./js-foundation/04-funciones-flecha')
//  require('./js-foundation/05-factory')



//  // console.log(emailTemplat)

// // console.log(emailTemplat)

// const id = 2;
// /// aplicando callback
// gatUserById(id,(error,users) => {
//     if(error) throw new Error(error);

//     console.log(users)
// });


// --------------------- factory functions--------------------------
// const {getUUID,getAge} = require('./plugins'); /// con archivo barril nos ahorramos 2 lineas


// const {buildMakePerson} = require('./js-foundation/05-factory') /// aplicando factory functions

// const makePerson = buildMakePerson({getUUID,getAge});

// const obj = {name:"Jhon", birthdate:'1997-12-22'}

// const jhon = makePerson(obj)

// console.log(jhon)

// --------------------- end factory functions--------------------------


// --------------------- promesas--------------------------

//usando callback

// const getPokemonById =  require('./js-foundation/06-promesas')
// getPokemonById(5,(pokemon) => {
//     console.log(pokemon)
// })


// siin usar callback

//--uso correcto  y promesa , axios etc.
getPokemonById(6)
.then((pokemon) => console.log(pokemon))
.catch((error) => console.log("No se encontro pokemon"))
.finally(() => console.log("se termino la ejecucion"))
const info = getPokemonById(5)
setTimeout(() => {
    console.log(info)
    
}, 3000);
// --------------------- end promesas--------------------------

//----------uso de axios -----


//--- uso de logger 
const { buildLogger } = require('./plugins');

const logger = buildLogger('app.js');
logger.log("Hola mundo desde el logger");
logger.error("Esto es algo malo");

//----------end uso de logger -----