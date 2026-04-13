const prompt = require('prompt-sync')();

let aluno = {
    nome: "Carlos Silva",
    pontosDeLeitura: 10,
    historicoDias: [
        { data: "16/03", paginasLidas: 15 },
        { data: "17/03", paginasLidas: 22 }
    ]
};

console.log("--- Painel do Aluno (Início do Dia) ---");
console.log(aluno);

console.log("\n--- Registro de Leitura Diária ---");
let dataHoje = prompt("Informe a data de hoje (DD/MM): ");
let paginasHoje = parseInt(prompt("Quantas páginas você leu hoje? "));

let novoRegistro = {
    data: dataHoje,
    paginasLidas: paginasHoje
};

aluno.historicoDias.push(novoRegistro);

let ultimoRegistro = aluno.historicoDias[aluno.historicoDias.length - 1];

if (ultimoRegistro.paginasLidas > 50 && aluno.pontosDeLeitura > 0) {

    aluno.pontosDeLeitura *= 2;
    ultimoRegistro.data += " - Super Leitor!";
    console.log("🚀 INCRÍVEL! Você ganhou o bônus Super Leitor!");
} else if (ultimoRegistro.paginasLidas < 10) {

    aluno.pontosDeLeitura /= 2;
    console.log("⚠️ Atenção: Leitura muito baixa. Seus pontos foram reduzidos.");
}

console.log("\n--- Painel Interativo Atualizado ---");
console.log(`Aluno: ${aluno.nome}`);
console.log(`Pontos Atuais: ${aluno.pontosDeLeitura}`);
console.log("Histórico de Leituras:");
console.table(aluno.historicoDias);