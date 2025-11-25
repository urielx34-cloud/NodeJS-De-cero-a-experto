import {CreateTable} from "./create-table.use-case";

describe('CreateTable Use Case', () => {
   test('should return table with return default values', () => {
       const createTable = new CreateTable();
        const result = createTable.execute({base: 5});
        const rows = result.trim().split('\n');

       expect(createTable).toBeInstanceOf(CreateTable);
       expect(result).toContain('5 x 1 = 5');
       expect(result).toContain('5 x 10 = 50');
       expect(rows.length).toBe(10);
   });

   test('should return table with custom values', () => {

    const options = { base: 3, limit: 20 };
    const createTable = new CreateTable();
    const result = createTable.execute(options);
    const rows = result.trim().split('\n');

    expect(rows.length).toBe(options.limit);
    expect(result).toContain(`${options.base} x 1 = ${options.base * 1}`);
    expect(result).toContain(`${options.base} x ${options.limit} = ${options.base * options.limit}`);

   });

} );
