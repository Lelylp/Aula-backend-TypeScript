import { Pessoa } from "./Pessoa";
export class Aluno extends Pessoa{
    private matricula:string

    constructor(nome:string, idade:number, email:string, matricula:string){
        super(nome, idade, email);
        this.matricula = matricula
    }
}