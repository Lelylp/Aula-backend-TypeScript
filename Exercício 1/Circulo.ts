export class Circulo{
    private raio:number;

    constructor(raio:number){
        this.raio = raio;
    }

    calcularCircunferencia(){
        return 2*Math.PI*this.raio
    }
}