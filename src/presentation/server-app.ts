import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { FileSave } from "../domain/use-cases/save-file.use-case";

interface RunOptions{
    base:number;
    limit:number;
    showTable: boolean;
    nameFile: string;
    distinationFile: string;
}

export class ServerApp{
    static run({base,limit,showTable,nameFile,distinationFile}: RunOptions){
        console.log("server running...");

        const tabla = new CreateTable().execute({base, limit});
        const fueCreadoElArchivo =  new FileSave()
        .execute({fileContent:tabla,
            fileDestination:distinationFile,
            fileName:nameFile
        })
        if(showTable) console.log(tabla);

        (fueCreadoElArchivo)? console.log("archivo creado") : console.error("no se pudo crear el archivo");
    }
}