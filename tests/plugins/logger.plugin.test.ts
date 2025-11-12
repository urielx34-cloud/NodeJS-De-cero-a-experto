
import { level } from 'winston';
import { buildLogger, logger as winstonLogger } from '../../src/plugins/logger.plugin';

describe('plugins/logger.plugin.ts', () => {

    test("buildLogger debe regresar una funcion logger",()=>{
        const logger = buildLogger('test');

        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    })

    test("logger.log debe mostrar un mensaje con el log",()=>{
        const winstonLoggerMock = jest.spyOn(winstonLogger,'log');
        // preparacion
        const message = 'test mensaje'; /// me  marca error porque en la fucion original era message y no mensaje
        const service = 'test service';
        //estimulo
        const logger = buildLogger(service);
        //uso
        logger.log(message);
        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
           expect.objectContaining({
             level:'info',
                message,
                service
           })
        );

    })
  
})
