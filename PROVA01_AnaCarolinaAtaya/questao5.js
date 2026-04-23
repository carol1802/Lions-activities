//questao 5 - INVERTER UMA PALAVRA
//dada uma palavra, 
// percora seus caracteres e 
// construa uma nova string com os caracteres em ordem inversa

let palavra = "prova"
let palavraInversa = []
let i

for(i=palavra.length;i>=0;i--){
    palavraInversa.push(palavra[i])

}
console.log("Palavra:"+palavra)
console.log("Palavra inversa:"+palavraInversa)

