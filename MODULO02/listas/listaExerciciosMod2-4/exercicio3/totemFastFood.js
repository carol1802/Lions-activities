const prompt = require('prompt-sync')();

// Objeto para mapear as strings do prompt para os objetos reais
const extrasDisponiveis = {
    "picles": { nome: "picles", valor: 2 },
    "maionese": { nome: "maionese", valor: 4 },
    "queijo": { nome: "queijo", valor: 5 },
    "salada": { nome: "salada", valor: 3 },
    "ketchup": { nome: "ketchup", valor: 0 },
    "molhoVerde": { nome: "molhoVerde", valor: 2 }
};

let pedidoVirtual = {
    nomeCliente: "Carol",
    hamburguerPremium: 30,
    qtdLanchesComprados: 0,
    ingredientesExtras: [],
    total: 0,
    desconto: 1,

    addIngredienteExtra(extra) {
        // Agora verificamos se o objeto existe antes de acessar propriedades
        if (extra) {
            this.ingredientesExtras.push(extra.nome);
            this.total += extra.valor;
            console.log(extra.nome + " adicionado.");
        } else {
            console.log("Ingrediente não encontrado.");
        }
    },

    calcularValorFinal() {
        // Soma o valor dos lanches ao total acumulado dos extras
        let subtotal = this.total + (this.qtdLanchesComprados * this.hamburguerPremium);
        
        // Regra: 2 extras E mais de 2 lanches = 20% de desconto
        if (this.ingredientesExtras.length === 2 && this.qtdLanchesComprados > 2) {
            this.desconto = 0.80;
        }
        
        return subtotal * this.desconto;
    },

    iniciarPedido() {
        console.log("Olá, " + this.nomeCliente + "! Vamos iniciar seu pedido...");
        this.qtdLanchesComprados = parseInt(prompt("Quantos lanches desejará? "));
        
        let verifica = prompt("Deseja adicionar mais algum ingrediente extra? (sim/nao): ");
        
        if (verifica === 'sim') {
            let nomeProduto = prompt("Qual extra você gostaria? (picles, maionese, queijo, salada, molhoVerde): ");
            
            while (nomeProduto !== '0') {
                // Buscamos o objeto correspondente ao nome digitado
                let objetoExtra = extrasDisponiveis[nomeProduto];
                this.addIngredienteExtra(objetoExtra);
                
                nomeProduto = prompt("Mais algum? 0 para sair: ");
            }
            // Adiciona ketchup automaticamente como cortesia se entrou no 'sim'
            this.addIngredienteExtra(extrasDisponiveis["ketchup"]);
        }

        let valorFinal = this.calcularValorFinal();
        console.clear()
        console.log("\n--- Resumo do Pedido ---");
        console.log(this.qtdLanchesComprados+" lancches premium, com: "+this.ingredientesExtras)
        console.log("O total com desconto é de: R$ " + valorFinal.toFixed(2));
        console.log("Obrigada! Volte sempre :)");
    }
};

pedidoVirtual.iniciarPedido();