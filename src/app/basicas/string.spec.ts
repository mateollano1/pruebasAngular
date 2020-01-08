import { mensaje } from "./string"

describe('pruebas de string', () =>{
    it('se espera un string', () => {
        const resp = mensaje('mateo')
        expect(typeof resp).toBe('string')
    })
    it('se espera que contenga el nombre', () => {
        let nombre = "mateo"
        const resp = mensaje(nombre)
        expect(resp).toContain(nombre)
    })
})