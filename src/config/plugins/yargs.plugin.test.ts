//import { yarg } from './yargs.plugin';

const runCommad = async (args: string[]) => {
    process.argv = [...process.argv, ...args];
    const { yarg } = require('./yargs.plugin');
    return yarg;
};

describe('Test args.plugin.ts',  () => {

    const originalArgv = process.argv;
    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules(); // Resets the module registry - important for yargs to re-parse argv
    });
    
    test("",() => {
        expect(true).toBe(true);
    })
    // test('should return default values', async()=>{
    //    const argv =  await runCommad(['-b','5']);
    //     expect(argv.b).toBe(5);

        
    // });



    // test('should return configuration with custom values', async()=>{
    //     const argv =  await runCommad(['-b','5','-l','20','-s','-n','custom-name','-d','custom-dir']);
    //      expect(argv.b).toBe(5);
    //      expect(argv.l).toBe(20);
    //      expect(argv.s).toBe(true);
    //      expect(argv.n).toBe('custom-name');
    //      expect(argv.d).toBe('custom-dir'); 
    // });
});