import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

//console.log(process.argv);

//console.log(yarg.b)

(async()=>{
    await main();
})(); //! estrcuta de una funcion auto invocada anonima
async function main() {
    const {b:base, l:limit, s:showTable, n:nameFile, d:distinationFile} = yarg
   ServerApp.run({base,limit,showTable,nameFile,distinationFile});
}