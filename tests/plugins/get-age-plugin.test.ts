import { getAge } from '../../src/plugins/get-age-plugin';

describe("plugins/get-age-plugin",()=>{
    test("getAge() return the age of a person",()=>{
        const birthdate = '1997-12-22';
        const age = getAge(birthdate);
        ///expect(age).toBe(30) //! no es ideal porque la fechas cambiarian si se ejecuta el siguiente anio

        expect(typeof age).toBe('number');
    })

    test("getAge should return current age",()=>{// regresa el anio en la actualidad
        const birthdate = '1997-12-22';
        const age = getAge(birthdate);

        const calcularAnio = new Date().getFullYear() - new Date(birthdate).getFullYear();
        expect(age).toBe(calcularAnio);
    })

    /// test metodo espia para sobre escribir el getFullYear con un valor que nostros indiquemos
    test("getAge should return 0 years",()=>{
        const spy = jest.spyOn(Date.prototype,"getFullYear").mockReturnValue(1995);
        const birthdate = '1997-12-22';
        const age = getAge(birthdate);
        expect(age).toBe(0);
    })
})