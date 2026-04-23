//questão 1 - MÉDIA DE UMA LISTA
//dada uma lista com 5 números inteiros,
//percorra todos os elementos,
// calcule a soma total e, 
// ao final, retorne a média dos valores

let numeros = [1,2,3,4,5]
let i
let soma=0

for(i=0; i<numeros.length;i++){
    soma += numeros[i]
}

let media = soma/numeros.length

console.log("Soma:"+soma)
console.log("Média:"+media)