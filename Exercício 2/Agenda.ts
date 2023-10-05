export class Agenda{
    private contatos:any[];

    constructor(){}

    adicionar(nome:string, numero:number){
        this.contatos.push([nome, numero])
    }

    listar(){
        this.contatos.forEach(i => {
            console.log(i);
        });
    }

    remover(nome:string, numero:string){
        for (const i in this.contatos) {
            if (i[0]==nome && i[1] == numero) {
                let num:number = this.contatos.indexOf(i)
                this.contatos.splice(num,1);
            }
        }
    }
}