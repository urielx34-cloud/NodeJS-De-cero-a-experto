
import fs from 'fs';
import * as path from 'path';


const noTable: number = 6;
const limiteTabla:number = 10;

let content: string = '';

for(let i = 1; i <= limiteTabla; i++){
    content += `${noTable} x ${i} = ${noTable * i}\n`;
}

const directory = 'outputs';
//const filePath = path.join(directory, 'tabla-5.txt');

try {
  // // Crea la carpeta si no existe
  // fs.mkdirSync(directory, { recursive: true }); //! el instructor no uso mkdir 
  // // Escribe el archivo
  // fs.writeFileSync(filePath, content);

  // crea la carpeta si no existe------------------------------
  const outputPath = `outputs/folder1/folder2`; // carpeta directoria a crear
  fs.mkdirSync(outputPath,{recursive:true});//! con esto evitas el error si la carpeta no existe porque le va a crear.
  fs.writeFileSync(`${outputPath}/tabla-${noTable}`,content)
  // crea la carpeta si no existe fin------------------------------

  /// deber crear carpeta
  ///fs.writeFileSync(`outputs/tabla-${noTable}.txt`,content); //! pero hacer esto debes asegurarte que la carpeta exista si no , dara error.

} catch (error) {
}



