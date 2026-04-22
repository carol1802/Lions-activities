let frase = "frase do exercicio onze"
palavra = frase.toLowerCase().split(' ')

let i
let j

for(i=0;i<palavra.length;i++){
    palavra[i]=palavra[i][0].toUpperCase()+palavra[i].slice(1)    
}
console.log(palavra)