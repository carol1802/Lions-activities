const prompt = require('prompt-sync')({ sigint: true });

const carrinhos = [
    { cliente: "João", produtos: [50.0, 120.5, 15.0] },
    { cliente: "Maria", produtos: [200.0, 45.9] },
    { cliente: "Carlos", produtos: [10.0, 5.5, 32.0, 8.0] }
];

let clientesFinalizados = [];

console.log("--- Sistema de Fechamento de Caixa ---");

carrinhos.forEach((carrinho) => {
    console.log(`\nProcessando carrinho de: ${carrinho.cliente}`);

    let totalDevido = 0;
    carrinho.produtos.forEach(preco => {
        totalDevido += preco;
    });

    console.log(`Total a pagar: R$ ${totalDevido.toFixed(2)}`);

    let totalPago = 0;
    while (totalPago < totalDevido) {
        let falta = totalDevido - totalPago;
        console.log(`Faltam R$ ${falta.toFixed(2)}`);
        
        let pagamento = parseFloat(prompt(`Informe o valor entregue pelo cliente: `));
        
        if (!isNaN(pagamento) && pagamento > 0) {
            totalPago += pagamento;
        } else {
            console.log("Valor inválido.");
        }
    }

    if (totalPago > totalDevido) {
        let troco = totalPago - totalDevido;
        console.log(`Pagamento concluído! Troco: R$ ${troco.toFixed(2)}`);
    } else {
        console.log(`Pagamento concluído com valor exato!`);
    }

    clientesFinalizados.push(carrinho.cliente);
});

console.log("\n------------------------------");
console.log("RELATÓRIO DE FECHAMENTO");
console.log("Clientes que pagaram com sucesso:");
clientesFinalizados.forEach(nome => console.log(`- ${nome}`));
console.log("------------------------------");