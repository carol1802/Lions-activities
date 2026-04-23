//questao 3 - ENCONTRARR O MAIOR VALOR
//dada uma lista de numeros inteiros, 
// percorra todos os elementos e 
// identifique qual é o maior valor presente na lista

let numeros = [1,2,100,4,5,6,7,8,9]
let i
let maior = numeros[0]

for(i=0; i<numeros.length;i++){
    if(numeros[i]>maior){
        maior=numeros[i]
    }
}

console.log("Maior:"+maior)