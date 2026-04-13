const prompt = require('prompt-sync')();
const capMax = 1000
let pesoCaixa = 1
let soma = 0
let pesos = []

while(pesoCaixa!=0){
    pesoCaixa = parseInt(prompt("Inserir caixa de peso:"))
    soma += pesoCaixa
    if(soma<capMax){
        console.log("Caixa adicionada.")
        pesos.push(pesoCaixa)
    }else if(soma == capMax){
        console.log("Está no limite.")
        pesos.push(pesoCaixa)
        break
    }else{
        console.log("Não é possível add uma caixa de peso "+pesoCaixa )
        soma -=pesoCaixa
        let espacoRestante = capMax-soma
        console.log("Espaço disponível:" + espacoRestante)
        
    }

}

console.log("CARGAS DE CAMINHÃO")
console.log("Foi possível adicionar "+pesos.length+" cargas.")
console.log("Peso total: "+soma)
console.log("Peso em cada caixa: "+pesos)