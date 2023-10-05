import { Aluno } from "./Aluno";
import { Retangulo } from "./Retangulo";
import { Circulo } from "./Circulo";
import { ContaBancaria } from "./ContaBancaria";

let pessoa = new Aluno("Weslley", 12, "Weslley3442@hotmail.com", "349294u23");
console.log(pessoa);

let retan = new Retangulo(12, 8);
console.log(retan.calcularPerimetro());

let circu = new Circulo(5);
console.log(circu.calcularCircunferencia());

let conta = new ContaBancaria("58854-8");
conta.depositar(1000);
conta.verificarSaldo();
conta.sacar(1001);
conta.sacar(999);
conta.verificarSaldo();