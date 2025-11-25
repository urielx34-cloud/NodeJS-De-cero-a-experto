import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { FileSave } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "./server-app";

describe('server-app', () => {
    const options = {
            base:2,
            limit: 10,
            showTable:false,
            distinationFile:'test-destination',
            nameFile: 'test-filename'
        };


    test ('should run the server instance ', () => {
        const serverApp =  new ServerApp();

        expect(typeof ServerApp.run).toBe('function');
    });

    test('should run serverApp with options', () => {

        // //uso de spias
        // const logSpy = jest.spyOn(console, 'log');
        // const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        // const saveFileSpy = jest.spyOn(FileSave.prototype, 'execute');



        // const options = {
        //     base:2,
        //     limit: 10,
        //     showTable:false,
        //     distinationFile:'test-destination',
        //     nameFile: 'test-filename'
        // };
        
        // ServerApp.run(options);

        // expect(logSpy).toHaveBeenCalledTimes(2);
        // expect(logSpy).toHaveBeenCalledWith('server running...');
        // expect(logSpy).toHaveBeenLastCalledWith('archivo creado'); /// indicamos cual debe ser el ultimo llamado

        // expect(createTableSpy).toHaveBeenCalledTimes(1);/// idicamos que la creacion de la tabla de ser llamaada una sola vez
        // expect(createTableSpy).toHaveBeenCalledWith({base:options.base, limit:options.limit}); /// indicamos con que parametros debe ser llamada la creacion de la tabla

        // expect(saveFileSpy).toHaveBeenCalledTimes(1); /// indicamos que la creacion del archivo debe ser llamada una sola vez
        // expect(saveFileSpy).toHaveBeenCalledWith({
        //     fileContent: expect.any(String),
        //     fileDestination: options.distinationFile,
        //     fileName: options.nameFile
        // }); /// indicamos con que parametros debe ser llamada la creacion del archivo

        
    });

    test('should run with custom values mocked', () => {
        const createMock = jest.fn().mockReturnValue('1 x 2  = 2'); /// me indica si la funcion fue llamada usando mock, los mock facilitan las pruebas unitarias y limpiar dichas pruebas
        const savaFileMock = jest.fn().mockReturnValue(false);
        const logMock = jest.fn();
        const logErrorMock = jest.fn();

        console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.execute = createMock;
        FileSave.prototype.execute = savaFileMock;

            ServerApp.run(options);
            expect(logMock).toHaveBeenCalledWith("server running...");
            expect(createMock).toHaveBeenCalledWith({base:options.base, limit:options.limit});
            expect(savaFileMock).toHaveBeenCalledWith({
                fileContent: '1 x 2  = 2',
                fileDestination: options.distinationFile,
                fileName: options.nameFile
            });

            expect(logMock).toHaveBeenCalledWith('archivo creado');
            expect(logErrorMock).not.toHaveBeenCalled();

        });
    
});