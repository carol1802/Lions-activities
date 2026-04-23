//questao 6 -SOMA DOS NUMEROS PARES 
// dada uma lista de numeros inteiros,
// percorra todos os elementos e 
// some apenas aqueles que são pares

let numeros = [1,2,3,4,5]
let i
let soma = 0
for(i=0; i<numeros.length;i++){
    if(numeros[i]%2 == 0){
        soma += numeros[i]
    }
    
}
console.log("Soma:"+soma)