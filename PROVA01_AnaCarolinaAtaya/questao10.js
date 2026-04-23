//questao 10 - DIFERENÇA ENTRE MAIOR E MENOR
//dada uma lista de numeros inteiros,
//  identifique o maior e
//  o menor valor e 
// retorne a diferença entre eles

let numeros = [1,2,100,4,5,6,7,8,9]
let i
let maior = numeros[0]
let menor = numeros[0]

for(i=0; i<numeros.length;i++){
    if(numeros[i]>maior){
        maior=numeros[i]
    }
    if(numeros[i]<menor){
        menor=numeros[i]
    }
}

let diferenca = maior - menor

console.log("Maior:"+maior)
console.log("Menor:"+menor)
console.log("Diferença:"+diferenca)