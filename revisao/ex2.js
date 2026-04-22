let numeros = [1,2,3,4,5,6,7,8,9]
let i
let impar = 0
let par = 0
for(i=0; i<numeros.length;i++){
    if(numeros[i]%2 == 0){
        par += 1
    }else{
        impar += 1
    }
}
console.log("Pares:"+par)
console.log("Impares:"+impar)