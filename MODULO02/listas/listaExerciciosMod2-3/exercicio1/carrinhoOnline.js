const prompt = require('prompt-sync')();
carrinhoCompras = {
    cliente:"Carol",
    tipoAssinatura:"Prime",
    precosProdutos:[],
    
    addProduto(valorProduto){
        this.precosProdutos.push(valorProduto)
    },

    soma(){
        let soma=0
        let i
        for(i=0; i<this.precosProdutos.length;i++){
            soma=soma+this.precosProdutos[i]
        }
        return soma
    },

    freteGratis(){
        if(this.soma()>=200 || this.tipoAssinatura=='Prime'){
            console.log("FRETE GRÁTIS!!!")
        }
    },

    saídaFinal(){
        
        console.log("O total de sua compra foi de "+this.soma()+".")
        this.freteGratis()
    }

}
let valorProduto 
while(true){
    valorProduto=parseInt(prompt("Qual o valor do produto? 0 para sair"))
    if (valorProduto==0){
        break
    }
    carrinhoCompras.addProduto(valorProduto)
}

console.log(carrinhoCompras)
carrinhoCompras.saídaFinal()