const prompt = require('prompt-sync')();

let pacoteVip = {
    empresa: "Tech Inovação S.A.",
    orcamentoTotal: 2500.00,
    openBarFechado: false,
    consumoExtras: []
};

console.log("--- Status Inicial do Camarote ---");
console.log(pacoteVip);

console.log("\n--- Lançamento de Consumo Extra ---");
let bebida1 = prompt("Nome da primeira bebida importada: ");
let bebida2 = prompt("Nome da segunda bebida importada: ");
let valorTotalBebidas = parseFloat(prompt("Valor total das duas bebidas (R$): "));

pacoteVip.consumoExtras.push(bebida1, bebida2);

pacoteVip.orcamentoTotal -= valorTotalBebidas;

if (pacoteVip.orcamentoTotal < 0) {
    pacoteVip.openBarFechado = true;
    pacoteVip.multaExcedente = 500.00;
    console.log("ALERTA: Orçamento estourado! Open bar encerrado para este grupo.");
} else {
    console.log(`Consumo autorizado. Saldo restante: R$ ${pacoteVip.orcamentoTotal.toFixed(2)}`);
}
console.log("\n--- Fechamento Financeiro do Camarote ---");
console.log(pacoteVip);