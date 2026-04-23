//questão 4 - CONTAR VOGAIS
// dada uma string, 
// percorra cada caractere e 
// verifique se ele é uma vogal(a,e,i,o,u)
//retorne a quantidade total de vogais encontradas

let palavra = "prova"
let vogais = "aeiou"
let i
let qtdVogais = 0
for(i=0; i<palavra.length;i++){
    if(vogais.includes(palavra[i])){
        qtdVogais += 1
    }
}
console.log("Palavra:"+palavra)
console.log("Vogais:"+qtdVogais)