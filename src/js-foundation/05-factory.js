// const {getUUID } = require('../plugins/get-id-plugin'); // patron adapatador
// const { getAge } = require('../plugins/get-age-plugin'); // patron adapatador
// const {getUUID,getAge} = require('../plugins') /// con archivo barril nos ahorramos 2 lineas


// const obj = {name:"Jhon", birthdate:'1997-12-22'}

const buildMakePerson = ({getUUID,getAge}) => { /// aqui aplicamos factory functions ... una funcion que regresa una funcion
    return ({ name, birthdate }) => {

        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }

    }
}



// const jhon = buildPerson(obj);

// console.log(jhon)

module.exports = {buildMakePerson,}