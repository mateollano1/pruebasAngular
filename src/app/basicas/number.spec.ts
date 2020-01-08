import { enumerar } from "./number"

describe('Pruebas sobre enteros',()=> {
    it('debe retornar 100', () =>{
        let numero = 100
        const resp = enumerar(numero)
        expect(resp).toEqual(100)
    })
    it('debe retornar menor o igual a 100', () =>{
        let numero = 90
        const resp = enumerar(numero)
        expect(resp).toBeLessThanOrEqual(100)
    })
})