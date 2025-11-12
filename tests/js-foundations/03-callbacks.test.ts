
import { getUserById } from '../../src/js-foundation/03-callbacks';

describe("/js-foundation/03-callbacks",()=>{
    test("getUserById should return an error if user does not exist ",(done)=>{
         const id = 10;
         getUserById(id,(err,user)=>{
            expect(err).toBe(`User not found with id ${id}`); /// mensaje que regresa el archivo roginal si hay error
            expect(user).toBeUndefined();

            done(); // ! con done(); obligamos al test que se espere a que termine de responder el callback, ya que no sabes cuando puede durar un llamada 
                    //! HTTP en este ejemplo se simulo con setTimeOut
         })
    });

    test("getUserById should return user with id:1 and name : John Doe",(done)=>{
        const id = 1;
        getUserById(id,(err, user)=>{
            expect(err).toBeUndefined();
            // expect(user?.name).toBe("John Doe");  //!esto lo hice yo
            // expect(user?.id).toBe(1);

            expect(user).toEqual({ // ejemplo del instructor
                id: 1,
                name: 'John Doe',
            })

            done();
        })

    })
})