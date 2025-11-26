import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
    static start() {
        console.log("Server started...");
        
        /// patron adapatador ya que sustituye la configuracion nativa de cron por una clase propia
        CronService.createJob('*/5 * * * * *', () => {
            new CheckService().excecute('https://www.google.com');
        });
    }
}