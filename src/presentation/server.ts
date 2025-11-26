import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
    static start() {
        console.log("Server started...");
        
        /// patron adapatador ya que sustituye la configuracion nativa de cron por una clase propia
        CronService.createJob('*/5 * * * * *', () => {
            const url = 'https://www.google.com';
            new CheckService(
                () => { console.log(`${url} is Ok`); },
                (error: string) => { console.log('Service is DOWN - Callback', error); }
            ).excecute(url);
           //new CheckService().excecute('http://localhost:3000/'); 
        });
    }
}