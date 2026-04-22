let numeros = [5,2,3,4,9,6,7,8,1]
let i
let menor=numeros[0]
let maior=numeros[0]

for(i=0;i<numeros.length;i++){
    if(numeros[i]<menor){
        menor=numeros[i]
    }
    if(numeros[i]>maior){
        maior=numeros[i]
    }
}

let segundoMenor=numeros[0]
let segundoMaior=numeros[0]

for(i=0;i<numeros.length;i++){
    if(numeros[i]<segundoMenor && numeros[i]>menor){
        segundoMenor=numeros[i]
    }
    if(numeros[i]>segundoMaior && numeros[i]<maior){
        segundoMaior=numeros[i]
    }
}

console.log("Menor:"+menor)
console.log("Segundo menor:"+segundoMenor)
console.log("Maior:"+maior)
console.log("Segundo maior:"+segundoMaior)
let amplitude = maior-segundoMenor
console.log("Amplitude:"+amplitude)
