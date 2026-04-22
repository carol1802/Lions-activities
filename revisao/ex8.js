let frase = "Teste teste oii teste"
palavra = frase.split(' ')

let i
let j
for(i=0;i<palavra.length;i++){
    vezes = 0

    for(j=0; j<palavra.length;j++){
        if(palavra[i]==palavra[j]){
            vezes += 1
        }
    }
    
    console.log(palavra[i]+" - "+vezes+" vezes")

}
