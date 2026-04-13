const prompt =require('prompt-sync')()
let numero1 = parseFloat(prompt('escreva a nota da 1a prova...'))
let numero2= parseFloat(prompt('escreva nota da 2a prova...'))

function calculaMedia(numero1, numero2){
    soma = numero1 + numero2
    qtdNotas = 2
    media = soma/qtdNotas
    console.log("A média das notas é de "+ media)
}

calculaMedia(numero1, numero2)
        