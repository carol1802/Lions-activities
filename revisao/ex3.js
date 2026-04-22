let numeros = [5,2,3,4,9,6,7,8,1]
let i
let menor=numeros[0]

for(i=0;i<numeros.length;i++){
    if(numeros[i]<menor){
        menor=numeros[i]
    }
}
console.log("Menor:"+menor)