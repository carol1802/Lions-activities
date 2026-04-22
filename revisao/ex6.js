let numeros = [1,2,3,4,5,6,7,8,9]
let i
let impar = 0
let par = 0
let somaimpar=0
let somapar=0

for(i=0; i<numeros.length;i++){
    if(numeros[i]%2 == 0){
        par += 1
        somapar += numeros[i]
    }else{
        impar += 1
        somaimpar += numeros[i]
    }
}
console.log("Pares:"+par)
console.log("Soma dos pares:"+somapar)
console.log("Impares:"+impar)
console.log(("Soma dos ímpares:"+somaimpar))
