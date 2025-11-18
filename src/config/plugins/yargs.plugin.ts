import { argv } from 'process';
import yargs, { number, options } from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
.option('b',{
    alias:'base',
    type:"number",
    demandOption:true,
    describe:"multiplication table"

})
.option('l',{
    alias:"limit",
    type:"number",
    default:10,
    describe:"multiplication table limit"
})
.option('s',{
    alias:"show",
    type:"boolean",
    default:false,
    describe:"show multiplication table"
})
.check((argv,options)=>{
    if(argv.b < 1) throw 'Error: la base debe ser un numero mayor  a 0 '
    
    return true;
})
.parseSync()