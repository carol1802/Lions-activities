const prompt = require('prompt-sync')();
//ingredientes EXTRAS
let picles={
    nome:"picles",
    valor:2
}
let maionese={
    nome:"maionese",
    valor:4
}
let queijo ={
    nome:"queijo",
    valor:5
}
let salada={
    nome:"salada",
    valor:3
}
let ketchup={
    nome:"ketchup",
    valor:0
}
let molhoVerde ={
    nome:"molhoVerde",
    valor: 2
}



let pedidoVirtual ={
    nomeCliente:"Carol",
    hamburguerPremium:30,
    qtdLanchesComprados:0,
    ingredientesExtras: [],
    total:0,
    desconto:1,

    addIngredienteExtra(extra){
        this.ingredientesExtras.push(extra.nome)
        this.total = this.total + extra.valor
        console.log(extra.nome+" adicionado.")
    },

    valorTotal(){
        this.total = this.total + this.qtdLanchesComprados*this.hamburguerPremium
        if(this.ingredientesExtras.length==2 && this.qtdLanchesComprados>2){
            this.desconto=0.80

        }
        return this.total*this.desconto
    },

    iniciarPedido(){
        console.log("Olá, "+this.nomeCliente+"! Vamos iniciar seu pedido...")
        this.qtdLanchesComprados=parseInt(prompt("Quantos lanches desejará?"))

        this.addIngredienteExtra(maionese)
        this.addIngredienteExtra(salada)
        
        
        
        console.log("O valor total sem desconto é de:"+this.total)

        console.log("O total com desconto é de:"+this.valorTotal())
        console.log("Obrigada! Volte sempre :)")
    }
}
pedidoVirtual.iniciarPedido()
console.log(pedidoVirtual)
