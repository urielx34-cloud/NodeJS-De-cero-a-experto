import { CronService } from "./cron/cron-service";

export class Server {
    static start() {
        console.log("Server started...");
        
        /// patron adapatador ya que sustituye la configuracion nativa de cron por una clase propia
        CronService.createJob('*/5 * * * * *', () => {
            const date = new Date();
            console.log('Cron  se ejecuta cada 5 segundos', date);
        });
    }
}