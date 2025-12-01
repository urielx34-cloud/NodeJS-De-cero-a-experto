import { envs } from '../config/plugins/envs.plugin';
import { CheckService } from '../domain/use-cases/checks/check-service';
import { FileSystemDataSource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImp } from '../infrastructure/repositories/log.repository.imp';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email.service';

const fileSystemLogRepository =  new LogRepositoryImp(
  new FileSystemDataSource(),
);

export class Server {

  public static start() {

    console.log( 'Server started...' );

    const emailService = new EmailService();
    emailService.sendEmail({
      to: 'urodrigueza@uabc.edu.mx',
      subject:'Logs de sistema',
      htmlBody:`<h1> Logs de Sistema - NOC </h1>
      <p> Este es un correo de prueba enviado desde el servicio de email </p>
      <p> Saludos </p>
      `
    })

    //console.log(envs.MAILER_EMAIL, envs.MAILER_SECRET_KEY);
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


