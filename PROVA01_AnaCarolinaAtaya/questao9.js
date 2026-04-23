//questao 9 - VERIFICAR PALINDROMO
// dada uma palavra,
//  verifique se ela pode ser lida da mesma foma de trás pra frente
let palavra = "ana"
let palavraInversa = []
let i
let confirma = 0
for(i=palavra.length;i>=0;i--){
    palavraInversa.push(palavra[i])

}
console.log("Palavra:"+palavra)
console.log("Palavra inversa:"+palavraInversa)

for(i=0;i<palavra.length;i++){
    if(palavra[i]==palavraInversa[i+1]){
        confirma +=1
    }else{
        confirma=0
        break
    }
}

if(confirma==0){
    console.log("não é um palíndromo")
}else{
    console.log("é um palíndromo")
}