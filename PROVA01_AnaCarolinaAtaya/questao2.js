//questão 2 - CONTAGEM DE NUMEROS PARES
// dada uma lista de números inteiros,
//  percorra todos os elementos e
//  conte quantos deles são pares

let numeros = [1,2,3,4,5,6,7,8,9]
let par = 0
let impar = 0
let i

for(i=0; i<numeros.length;i++){
    if(numeros[i]%2 == 0){
        par += 1
    }else{
        impar += 1
    }
}

console.log("Pares:"+par)
console.log("Impares:"+impar)