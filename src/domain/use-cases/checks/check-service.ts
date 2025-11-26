


interface CheckServiceUseCase{
    excecute(url:string):Promise<boolean>; // recibe un url y regresa una promesa booleana
}

export class CheckService {

    async excecute(url:string):Promise<boolean>{

        try{
            const req = await fetch(url);
            if(!req.ok){
                throw new Error(`Error en check service ${url}`)
            }
            console.log(`${url} is UP`);
             return true;
        }catch(error){
            console.log('Error en check service', error);
            return false
        }
       
    }
}