//salarioLiquido int
//valor parcela int
//restricao true/false
//se valor da parcela for >30%salario,  credito Negado
//se restricao true credito Negado
//se valor parcela < 30%salario e restricao false credito Aprovado

const prompt = require('prompt-sync')();

let salarioLiquido = prompt("Qual é seu salário líquido?")
let valorParcela = prompt("Qual é o valor da parcela?")
let restricao = prompt("O cliente possui restrição no nome? (sim/nao)")
if(restricao=='sim'){
    restricao=true
}else if(restricao=='nao'){
    restricao=false
}else{
    restricao=null
}
if(valorParcela>salarioLiquido*0.3 || restricao == true){
    console.log("Crédito Negado: Parcela acima do limite ou restrição no CPF")
}else if(valorParcela<= salarioLiquido*0.3 && restricao == false){
    console.log("Crédito Aprovado!")
}else{
    console.log("ERROR") 
    return -1
}