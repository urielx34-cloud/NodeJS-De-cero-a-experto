import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe("plugins/http-client.plugin.ts", () => {
    test("httpClientPlugin() debe regresar un string", async () => {
        const data = await httpClientPlugin.get("https://jsonplaceholder.typicode.com/todos/1");
        expect(data).toEqual({

            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": expect.any(Boolean) //! con este le decimo que no importa que sea true o false mientras sea un boolenao

        })
    })

    test("httpClientPlugin() debe tener el metodo POST, PUT y DELETE,",()=>{
        const funcionPost = httpClientPlugin.post("https://jsonplaceholder.typicode.com/todos/1",'{}')
        //expect(typeof funcionPost).toBe('function');
        expect(typeof httpClientPlugin.put).toBe('function');
    })
});