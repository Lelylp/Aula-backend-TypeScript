import { terrestre } from "./terrestre";

export class felino extends terrestre{
    constructor(nome:string, raca:string, private especie:string){
        super(nome, raca);
    }

    public dizerNome(): string {
        return super.dizerNome() + ` e sua especie é ${this.especie}`;
    }
}