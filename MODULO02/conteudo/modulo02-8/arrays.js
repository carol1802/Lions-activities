//----ARRAYS----//
//             0    1   2   3   4
let exemplo = [10, 20, 30, 40, 50]

let umaVariavelQualquer = exemplo[1] // atribui o valor 20 a umaVariavelQualquerr
console.log(exemplo[3])  // printa o numero 40

//PUSH
exemplo.push(60) // add o numero 60 no vetor
console.log(exemplo) // printa o vetor inteiro

//ARRAYS DE STRINGS
let personagensPrincipais = ['Shrek', 'Fiona', 'Principe Encantado']

//POP
personagensPrincipais.pop() // tira o ultimo da array

//SHIFT
personagensPrincipais.shift() // tira o primeiro da array
console.log(personagensPrincipais)
personagensPrincipais = ['Shrek', 'Fiona', 'Principe Encantado']

//SPLICE
personagensPrincipais.splice(0, 2) // remove os elementos apartir do 0, até o dois
console.log(personagensPrincipais)

//UNSHIFT
personagensPrincipais.unshift('Principe Encantado')//adiciona Principe Encantado no começo do array
console.log(personagensPrincipais)

//INCLUDE
if(personagensPrincipais.includes('Principe Encantado')){
    console.log('o filme é shrek 2 ou 3')
}// includes('') retorna um valor booleano

//INDEXOF
console.log(personagensPrincipais.indexOf('Principe Encantado')) // acha em que posição está o elemento

//LENGTH
console.log(personagensPrincipais.length) //retorna quantos elementos tem no array