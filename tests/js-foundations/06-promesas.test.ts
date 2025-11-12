
// Import or define getPokemonById before using it
import { getPokemonById } from '../../src/js-foundation/06-promesas';

// Example usage:
describe("js-foundation/06-promesas",()=>{
    test("getPokemonById should return pokemon",async ()=>{
        const pokemonId = 1;
        const pokemonName =  await getPokemonById(pokemonId);
        expect(pokemonName).toBe("bulbasaur");
    })

    test("should return an error if does not exist", async()=>{
        const pokemonId = 10000000;
        try {
            const pokemonName =  await getPokemonById(pokemonId);
             expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toBe(`Pokemon no existe con id ${pokemonId} `)
        }
        
       

    })
})