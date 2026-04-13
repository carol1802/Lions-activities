//mont industrial.js
//prrompt
//temperaturaInicial = prompt
//temperaturas = []
//for let i=1, i<5, i++
// temperaturas[i] = temperaturaanterior+2
//console.log(temperaturas)
const prompt = require('prompt-sync')();
let temperaturaInicial=parseInt(prompt("Qual é a temperatura inicial?"))
let temperaturas= []
temperaturas.push(temperaturaInicial)
for(let i=1; i<5; i++){
    temperaturas[i]=temperaturas[i-1]+2
}
console.log(temperaturas)