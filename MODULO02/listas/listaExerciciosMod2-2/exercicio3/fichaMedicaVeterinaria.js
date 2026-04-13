const prompt = require('prompt-sync')();
let Paciente = {
    nome: prompt("Nome:"),
    raca:prompt("Raça:"),
    idade:parseInt(prompt("Idade:")),

     tratamento(){
        if(this.idade>=8){
            console.log("O paciente "+this.nome+" já é sênior e precisa de exames de rotina.")
        }
        else{
            console.log("Paciente na faixa de idade regular.")
        }
    },

     exiba(){
        console.log("O paciente "+this.nome+", da raça "+this.raca+", de idade "+this.idade+".")
    }
}
Paciente.exiba();
Paciente.tratamento();

