const prompt = require('prompt-sync')();

let passageiro = {
    nome: "Johann Schmidt",
    nacionalidade: "Alemanha",
    estaATrabalho: true,
    documentos: ["Passaporte", "Visto"] 
};

console.log("--- Ficha de Imigração Inicial ---");
console.log(passageiro);

console.log("\n--- Ação do Fiscal ---");
let terceiroDocumento = prompt("Insira o terceiro comprovante de saúde (ex: Certificado de Vacina): ");

passageiro.documentos.push(terceiroDocumento);

let liberado = false;

if (passageiro.nacionalidade === "Brasil") {
    if (passageiro.documentos[0] === "Passaporte") {
        liberado = true;
    }
} else {
    const temVisto = passageiro.documentos[1] === "Visto";
    const temSaudeOk = passageiro.documentos[2] && passageiro.documentos[2].trim() !== "";

    if (temVisto && temSaudeOk) {
        liberado = true;
    }
}

passageiro.entradaPermitida = liberado;

console.log("\n--- Resultado do Controle de Imigração ---");
console.log(passageiro);