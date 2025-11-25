import fs from 'fs'

export interface SaveFileUseCase {
    execute: (options: Options) => boolean
}

export interface Options {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}

export class FileSave implements SaveFileUseCase {
    constructor(
        /**
         * DI - repository : directorio del repositorio
         * 
         */

    ) { }

    execute({fileContent,
        fileDestination = "outputs",
        fileName = "table"}: Options): boolean {

        try {
            fs.mkdirSync(fileDestination, { recursive: true });//! con esto evitas el error si la carpeta no existe porque le va a crear.
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent)
            
            return true;
        } catch (error) {
           // console.error(error) // pasar a winston despues
            return false;
        }

    };
}