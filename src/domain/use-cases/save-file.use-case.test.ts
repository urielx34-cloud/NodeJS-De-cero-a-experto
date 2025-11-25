
import fs from 'fs';
import { FileSave } from './save-file.use-case';

describe('SaveFile Use Case', () => {

    const saveFile = new FileSave();
    const optionsCustom = {
        fileContent: 'Custom content',
        fileDestination: 'custom-outputs/file-destination',
        fileName: 'custom-table-name'
    };

    const filePathCustom = `${optionsCustom.fileDestination}/${optionsCustom.fileName}.txt`;




    afterEach(() => {
        const outputsFolderExists = fs.existsSync('outputs');
        if (outputsFolderExists) fs.rmdirSync('outputs', { recursive: true }); // bora la carpeta despues de cada prueba

        const customOutputsFolderExists = fs.existsSync('custom-outputs');
        if (customOutputsFolderExists) fs.rmdirSync('custom-outputs', { recursive: true }); // bora la carpeta despues de cada prueba
    }); // limpia despues de cada prueba

    test('should save file with default values', () => {
        const saveFile = new FileSave();
        const filePath = 'outputs/table.txt';
        const options = {
            fileContent: 'Sample content'
        };

        const result = saveFile.execute(options);
        const existeFile = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        expect(result).toBe(true);
        expect(existeFile).toBe(true);
        expect(fileContent).toBe(options.fileContent);

    });

    test('should save file with custom destination and name', () => {

        const result = saveFile.execute(optionsCustom);
        const existeFile = fs.existsSync(filePathCustom);
        const fileContent = fs.readFileSync(filePathCustom, 'utf-8');

        expect(result).toBe(true);
        expect(existeFile).toBe(true);
        expect(fileContent).toBe(optionsCustom.fileContent);


    });

    test('should return false if directory could not be created', () => {
       const saveFile = new FileSave();
       const mkdirSpy= jest.spyOn(fs, 'mkdirSync').mockImplementation(// uso de espia para si mkdirSync fue llamado y lanza error
          ()=> { throw new Error('This is custom error message from testing'); }   
       );

       const result = saveFile.execute(optionsCustom);
       expect(result).toBe(false);

       mkdirSpy.mockRestore();// restaura el comportamiento original del metodo espia
    });

    test('should return false if file could not be created', () => {
       const saveFile = new FileSave();
       const mkdirSpy= jest.spyOn(fs, 'mkdirSync').mockImplementation(// uso de espia para si mkdirSync si fue llamado y lanzar error si writeFileSync falla
          ()=> { throw new Error('This is custom wtring error message'); }   
       );

       const result = saveFile.execute({fileContent: 'hola'});
       expect(result).toBe(false);

       mkdirSpy.mockRestore();// restaura el comportamiento original del metodo espia
    });

});