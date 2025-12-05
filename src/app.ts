import { envs } from './config/plugins/envs.plugin';
import { MongoDataBase } from './data/mongo/';
import { LogModel } from './data/mongo/models/log.model';
import { Server } from './presentation/server';
import  'dotenv/config';



(async() => {
  main();
})();


async function main(){
  await MongoDataBase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName:envs.MONGO_DB_NAME
  });
  
  Server.start();
//console.log(envs);
}


