export class Retangulo{
    private largura:number;
    private altura:number;

    constructor(largura:number, altura:number){
        this.largura = largura;
        this.altura = altura;
    }

    calcularPerimetro(){
        return this.largura*this.altura;
    }
}