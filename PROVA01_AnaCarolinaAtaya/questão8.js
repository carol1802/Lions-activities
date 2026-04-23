//questao 8 - CONTAGEM DE LETRAS
//dada uma palavra, percorra todos os caracteres e conte quantas vezes cada um aparece
let palavra = "avaliação"
let i
let j
let vezes
let repetidos = []
for(i=0;i<palavra.length;i++){
    vezes = 0
    for(j=0; j<palavra.length;j++){
        
            if(palavra[i]==palavra[j]){
                vezes += 1
            }
        
        
    }
    console.log("Letra "+palavra[i]+" repete "+vezes+" vez/vezes.")
}