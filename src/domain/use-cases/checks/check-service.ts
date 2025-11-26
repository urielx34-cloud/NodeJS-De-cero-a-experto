

interface CheckServiceUseCase{
    excecute(url:string):Promise<boolean>; // recibe un url y regresa una promesa booleana
}

type SuccessCallback = () => void;
type FailureCallback = (error:string) =>  void;

export class CheckService {

    // inyectar dependencias si es necesario
    constructor(
        private readonly successCallback: SuccessCallback,
        private readonly failureCallback: FailureCallback
    ){ }

    async excecute(url:string):Promise<boolean>{

        try{
            const req = await fetch(url);
            if(!req.ok){
                throw new Error(`Error en check service ${url}`)
            }
            this.successCallback();
             return true;
        }catch(error){
            this.failureCallback(`Error en check service ${url}`);
            return false
        }
       
    }
}