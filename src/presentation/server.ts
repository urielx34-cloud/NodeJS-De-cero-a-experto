import { CheckService } from '../domain/use-cases/checks/check-service';
import { FileSystemDataSource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImp } from '../infrastructure/repositories/log.repository.imp';
import { CronService } from './cron/cron-service';

const fileSystemLogRepository =  new LogRepositoryImp(
  new FileSystemDataSource(),
);

export class Server {

  public static start() {

    console.log( 'Server started...' );
    //mandar emails
    
    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     const url = 'https://google.com';
    //     new CheckService(
    //       fileSystemLogRepository,
    //       () => console.log( `${ url } is ok` ),
    //       ( error ) => console.log( error ), 
    //     ).execute( url );
    //     // new CheckService().execute( 'http://localhost:3000' );
        
    //   }
    // );


  }


}


