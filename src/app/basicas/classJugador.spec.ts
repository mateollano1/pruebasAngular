import { jugador } from "./classJugador";
describe('pruebas para las clases ', ()=>{
    let player = new jugador()
    
    beforeEach(()=>{
        player.vida = 100
    })
        
    it('Debe retornar 0 de vida', () => {
        // let player = new jugador()
        const resp = player.golpear(100)
        expect(resp).toBe(0)
    });
    it('Debe retornar 40 de vida', () => {
        // let player = new jugador()
        const resp = player.golpear(60)
        expect(resp).toBe(40)
    });
})