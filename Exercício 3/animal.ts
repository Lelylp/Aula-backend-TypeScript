export class animal{
    constructor(private nome:string){}
    public dizerNome(){
        return `${this.nome}`;
    }
}