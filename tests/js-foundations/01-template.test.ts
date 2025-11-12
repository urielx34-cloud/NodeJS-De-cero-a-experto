
import { emailTemplate } from '../../src/js-foundation/01-templates';

describe('js-foundation/01-templates',()=>{
    test("emailTemplate  should contain a greeting",()=>{
        expect(emailTemplate).toContain("Hi, ")
    })

     test("emailTemplate  should contain  {{name}} and {{orderId}}",()=>{
        expect(emailTemplate).toMatch(/{{name}}/) //! expresion regular
        expect(emailTemplate).toMatch(/{{orderId}}/)

        expect(emailTemplate).toContain("{{name}}")
        expect(emailTemplate).toContain("{{orderId}}")
    })
})
