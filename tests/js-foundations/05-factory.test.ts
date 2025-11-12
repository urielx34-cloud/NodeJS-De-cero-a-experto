import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe("js-foundation/05-factory",()=>{

    const getUUID = ()=> '1234';
    const getAge = ()=> 35;
    test("buildMakePerson should return a function",()=>{
        const makePerson =  buildMakePerson({getUUID,getAge});
    });

    test("makePerson should retunr a person",()=>{

         const makePerson =  buildMakePerson({getUUID,getAge});
         const johnDoe = makePerson({name:"John Doe",birthdate:"1985-10-21"});

         expect(johnDoe).toEqual({
            id:getUUID(), /// [puede llamar directamente la funcion evaluada
            name : "John Doe",
            birthdate:"1985-10-21",
            age:35,
         })

    })
})