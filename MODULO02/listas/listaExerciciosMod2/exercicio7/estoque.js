const prompt = require('prompt-sync')();
let qtdAtualEstoque = prompt("Qual é a quantidade atual de produtos no estoque?")
let qtdMinimaSegurança = prompt("Qual é a quantidade mínima de produtos de segurança?")
if(qtdAtualEstoque<qtdMinimaSegurança){
    let quantidade = qtdMinimaSegurança-qtdAtualEstoque
    console.log("Alerta: Estoque baixo! É necessário solicitar a compra de "+quantidade+" unidades")
}else{
    console.log("Estoque regularizado.")
}