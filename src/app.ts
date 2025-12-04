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

  /// crear un registro en monog
  // coleccion = tablas , documento = registro
  const newLog= await LogModel.create({
    message:'Test desde mongo 4',
    origin: 'App.ts',
    level:'medium'
  });

  /**guarda en la bd */
  // await newLog.save();
  // console.log(newLog);
  const logs = await LogModel.find();
  console.log(logs)
//  Server.start();
//console.log(envs);
}


