import { yarg } from "./config/plugins/yargs.plugin";

//console.log(process.argv);

//console.log(yarg.b)

(async()=>{
    await main();
    console.log("fin programa")
})(); //! estrcuta de una funcion auto invocada anonima
async function main() {
    console.log(yarg)
}