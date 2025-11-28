import path from "path";
import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs';



export class FileSystemDataSource implements LogDataSource{

    private readonly logPath = 'logs/';
    private readonly allLogsPath = 'logs/logs-log.log';
    private readonly mediumLogsPath = 'logs/logs-medium.log';
    private readonly highLogsPath = 'logs/logs-high.log';

    constructor( ){
        this.creatLogsFile();
    }

    private creatLogsFile = ()=>{
        if(!fs.existsSync(this.logPath)){
            fs.mkdirSync(this.logPath);
        }

        [
            this.allLogsPath,
            this.mediumLogsPath,
            this.highLogsPath
        ].forEach(path=>{
            if(fs.existsSync(path)) return;

            // si no existe el archivo, lo crea
            fs.writeFileSync(path, '');
        })
    }

    saveLog(log: LogEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }

}