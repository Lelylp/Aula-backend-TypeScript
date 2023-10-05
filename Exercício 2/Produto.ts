export class Produto{
    private nome:string;
    private preco:number;
    private quantidade:number;

    constructor(nome:string, preco:number, quantidade:number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    valorTotal(){
        return this.preco*this.quantidade;
    }
}