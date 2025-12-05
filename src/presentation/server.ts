import { envs } from '../config/plugins/envs.plugin';
import { LogSeverityLevel } from '../domain/entities/log.entity';
import { CheckService } from '../domain/use-cases/checks/check-service';
import { senEmailLogs } from '../domain/use-cases/email/send-email-logs';
import { FileSystemDataSource } from '../infrastructure/datasources/file-system.datasource';
import { MongoLogDataSource } from '../infrastructure/datasources/mongo-log.datasource';
import { LogRepositoryImp } from '../infrastructure/repositories/log.repository.imp';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email.service';

const logRepository =  new LogRepositoryImp(
  //new FileSystemDataSource(),
  new MongoLogDataSource()
);
 const emailService = new EmailService();
export class Server {

  public static async start() {

    console.log( 'Server started......' );
    // new senEmailLogs(
    //   emailService,
    //   logRepository
    // ).execute(['@uabc.edu.mx', '@ite.edu.mx']);

    // const emailService = new EmailService();
    // emailService.sendEmail({
    //   to: 'urodrigueza@uabc.edu.mx',
    //   subject:'Logs de sistema',
    //   htmlBody:`<h1> Logs de Sistema - NOC </h1>
    //   <p> Este es un correo de prueba enviado desde el servicio de email </p>
    //   <p> Saludos </p>
    //   `
    // })

    // envio de logs
   
    //emailService.sendEmailWithfileSystemLogs(['urodrigueza@uabc.edu.mx', 'urodriguez@ite.edu.mx']); // descomantado para que no envie correos

    //console.log(envs.MAILER_EMAIL, envs.MAILER_SECRET_KEY);
    //mandar emails
    

    const logs = await logRepository.getLogs(LogSeverityLevel.low);
    console.log(logs);
    //! aqui generas logs y lo mandas a filesyste o mongo segun tu loRepositorio
    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     const url = 'https://google.com';
    //     new CheckService(
    //       logRepository, // con logRepository indicamos a donde se iran nuestros logs guardados
    //       () => console.log( `${ url } is ok` ),
    //       ( error ) => console.log( error ), 
    //     ).execute( url );
    //     // new CheckService().execute( 'http://localhost:3000' );
        
    //   }
    // );


  }


}


