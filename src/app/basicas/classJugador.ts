export class jugador {
    vida: number
    constructor (){
        this.vida = 100
    }
    golpear(golpe: number){
        if(golpe>= this.vida){
             this.vida = 0
        }else{
            this.vida = this.vida - golpe
        }
        return this.vida
    }
}