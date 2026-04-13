const prompt = require('prompt-sync')();
let totalVendas = prompt("Qual foi o valor total em vendas no mês?")
let comissao

if(totalVendas>=20000){
    comissao =0.05 * totalVendas
}else{
    comissao = 0.02 * totalVendas
}
console.log("O valor total da comissão é de:"+ comissao)
