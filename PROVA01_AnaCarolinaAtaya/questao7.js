//questao 7 -SOMA DOS NUMEROS PARES 
// dada uma lista de numeros inteiros,
//  identifique quais números aparecem mais de uma vez

let numeros = [100,2,2,4,3,3,5]
let i
let j
let confirma
let repetidos = []
for(i=0;i<numeros.length;i++){
    confirma = 0
    for(j=0; j<numeros.length;j++){
        if(i==j){
            
        }else{
            if(numeros[i]==numeros[j]){
                confirma = 1
            }
        }
        
    }
    if (confirma==1){
        repetidos.push(numeros[i])
    }
}
console.log(repetidos)