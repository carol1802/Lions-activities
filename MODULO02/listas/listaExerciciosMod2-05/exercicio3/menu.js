const prompt = require('prompt-sync')();
console.log("***MENU***")
console.log("1 - Fone\n2 - Teclado\n3 - Mouse")
let compra = {
    nomeCliente: "Carol",
    produto: parseInt(prompt("Qual o código do produto que você deseja comprar? :")),
    valor: 0

    
}
//menu

switch (compra.produto){
    case 1:
        compra.produto="FONE"
        compra.valor=150
        break
    case 2:
        compra.produto="TECLADO"
        compra.valor=200
        break
    case 3:
        compra.produto="MOUSE"
        compra.valor=50
        break
    default:
        compra.produto="NADA"
        compra.valor = 0
        break
}
console.log("Você comprou "+compra.produto+ " de valor "+compra.valor)