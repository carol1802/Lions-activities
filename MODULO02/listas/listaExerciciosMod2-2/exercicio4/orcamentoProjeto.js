const prompt = require('prompt-sync')();
const taxa = 0.15
let filaProjetos=[]
let projeto = {
    nome: prompt("Nome do projeto:"),
    valor: parseFloat(prompt("Valor do projeto:")),

    prazoUrgente(){
        let urgente=prompt("O prazo é urgente? (s/n)")
        if(urgente=='s' && this.valor >3000){
            this.valor = this.valor + this.valor * taxa

        }
        return this.valor
    }

}
filaProjetos.push(projeto)
projeto.prazoUrgente()
console.log(filaProjetos)