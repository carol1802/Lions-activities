let palavra = "Lions"
let vogais = "aeiou"
palavra.toLocaleLowerCase
let vogal = 0
let i
for(i=0;i<palavra.length;i++){
    if(vogais.includes(palavra[i])){
        vogal += 1
    }
}
consoantes = palavra.length-vogal
console.log("Vogais:"+vogal)
console.log("Consoantes:"+consoantes)