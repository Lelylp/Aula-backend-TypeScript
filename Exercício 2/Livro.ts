export class Livro{
    private titulo:string;
    private autor:string;
    private anoPublicado:number;

    constructor(titulo:string, autor:string, anoPublicado:number){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicado = anoPublicado;
    }

    informacoesLivro(){
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Ano Publicado: ${this.anoPublicado}`);
    }
    
}