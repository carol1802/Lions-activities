const prompt = require('prompt-sync')();
const caixa = {
    operador: "Carol",
    saldo: 100.00,
    historico: []
};

function registrarVenda(saldoAtual, valor) {
    return saldoAtual + valor;
}

function registrarDespesa(saldoAtual, valor) {
    return saldoAtual - valor;
}

let continuar = true;

console.log(`--- Sistema Iniciado | Operador: ${caixa.operador} ---`);

while (continuar) {
    let opcao = prompt("Escolha: [V] Venda, [D] Despesa ou [S] Sair").toUpperCase();

    switch (opcao) {
        case 'V':
            let valorVenda = parseFloat(prompt("Digite o valor da venda:"));
            if (!isNaN(valorVenda)) {
                caixa.saldo = registrarVenda(caixa.saldo, valorVenda);
                caixa.historico.push("Entrada");
                console.log(`Venda de R$ ${valorVenda} registrada.`);
            }
            break;

        case 'D':
            let valorDespesa = parseFloat(prompt("Digite o valor da despesa:"));
            if (!isNaN(valorDespesa)) {
                caixa.saldo = registrarDespesa(caixa.saldo, valorDespesa);
                caixa.historico.push("Saída");
                console.log(`Despesa de R$ ${valorDespesa} registrada.`);
            }
            break;

        case 'S':
            continuar = false;
            console.log("Fechando o sistema...");
            break;

        default:
            console.log("Opção inválida! Tente V, D ou S.");
    }
}

console.log("\n=== RELATÓRIO DE AUDITORIA FINAL ===");
console.log(caixa);