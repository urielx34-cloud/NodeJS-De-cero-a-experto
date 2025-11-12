import {getUUID} from '../../src/plugins/get-id-plugin';

describe("plugins/get-id-plugin.ts",()=>{
    test('getUUID() should return a UUID',()=>{
        const uuid = getUUID();
    })
})