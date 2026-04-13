const prompt = require('prompt-sync')();

//                    P   M   G
let estoqueTamanhos= [10, 15, 8]
vendasP = parseInt(prompt("Quantas peças P foram vendidas hoje?"))
estoqueTamanhos[0]=estoqueTamanhos[0]-vendasP
if(estoqueTamanhos[0]<5){
    console.log("Alerta: Estoque de luvas tamanho P está crítico! Quantidade restante do tamanho P: "+estoqueTamanhos[0])
}else{
    console.log("Estoque atualizado. Quantidade restante do tamanho P: "+estoqueTamanhos[0])
}