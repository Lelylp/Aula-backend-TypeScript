import { animal } from "./animal";

export class terrestre extends animal{
    constructor(nome:string, private raca:string) {
        super(nome);
    }
    public dizerNome(): string {
        return super.dizerNome() + ` sua raca é ${this.raca}`;
    }
}