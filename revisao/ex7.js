let numeros = [100,2,2,4,3,3,5]
let i
let j
let confirma
let resultado = []
for(i=0;i<numeros.length;i++){
    confirma = 0
    for(j=0; j<numeros.length;j++){
        if(i==j){
            
        }else{
            console.log("numero da lista:"+numeros[i]+" e o numero comparado:"+numeros[j])
            if(numeros[i]==numeros[j]){
                confirma = 1
            }
            console.log(confirma)
        }
        
    }
    if (confirma==0){
        resultado.push(numeros[i])
    }
}
console.log(resultado)