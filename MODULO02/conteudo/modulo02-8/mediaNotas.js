const prompt = require('prompt-sync')();
let notas = []
let qtdNotas = parseInt(prompt("Qual é a quantidade de notas?"))
let i 
for(i = 0; i<qtdNotas; i++){
    notas.push(parseInt(prompt("Qual é a "+(i+1)+"a nota?")))
}

console.log(notas)
let soma = 0
for(i=0; i<qtdNotas;i++){
    soma=soma + notas[i]
}
let media = soma/qtdNotas
console.log(media)