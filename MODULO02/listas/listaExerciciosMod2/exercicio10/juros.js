const prompt = require('prompt-sync')();
const multaFixa =0.02
const juroPorDia = 1
let condominioOriginal = parseInt(prompt("Qual foi o valor original do condomínio?"))
let qtdDiasAtraso = prompt("Qual foi a quantidade de dias de atraso?")
let feriado = prompt("Foi num final de semana ou feriado?")
let valorFinal

if(feriado == 'sim'){
    feriado=true
}else if(feriado == 'nao'){
    feriado=false
}else{
    console.log("ERROR")
    return -1
}

if(qtdDiasAtraso>0 && feriado==false){
    valorFinal=condominioOriginal*multaFixa + juroPorDia*qtdDiasAtraso 
}else{
    valorFinal=condominioOriginal
}
console.log("O valor a pagar em juros é de R$"+ valorFinal)
let total = valorFinal+condominioOriginal
console.log("O valor total é de:"+total)