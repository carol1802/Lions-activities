//qtd d cota x rendimento por cota = rrendimento total
//se rendimento maior q 100 deu boa 
const prompt = require('prompt-sync')();

let cota = prompt("Quantas cotas você tem?")
let rendimentoPorCota = prompt("Qual foi o rendimento por cota?")
let rendimentoTotal = cota * rendimentoPorCota
if(rendimentoTotal>100){
    console.log("Rendimento recebido: R$ "+rendimentoTotal+" Você já tem saldo suficiente para comprar uma nova cota e reinvestir!")
}else{
    console.log("Rendimento recebido: R$ "+rendimentoTotal+". Acumule mais para reinvestir.")
}
