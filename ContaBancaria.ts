export class ContaBancaria{
    saldo:number;
    numeroConta:String;

    constructor(numeroConta:string){
        this.numeroConta = numeroConta;
        this.saldo = 0;
    }

    depositar(dinheiro:number){
        this.saldo += dinheiro;
    }

    sacar(dinheiro:number){
        if (dinheiro>this.saldo) {
            console.log("Saldo insuficiente");
            return 0
        }
        this.saldo -= dinheiro
    }

    verificarSaldo(){
        console.log(this.saldo);
    }
}