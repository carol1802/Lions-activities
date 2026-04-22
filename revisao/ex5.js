let frase = "Olá, esta é a revisão para a prova!"
let resultado= ""
let i
for(i=0;i<frase.length;i++){
    if(frase[i]!==" "){
        resultado+=frase[i]
    }
}
console.log(resultado)