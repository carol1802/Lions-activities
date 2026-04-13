const prompt = require('prompt-sync')();

let turbina = {
    lado: "Motor Esquerdo",
    status: "Desligado",
    leituras: [15, 10, 5] 
};

console.log("--- Painel Inicial ---");
console.log(turbina);

console.log("\n--- Atualização do Mecânico ---");
let novaTemp = parseFloat(prompt("Insira a Temperatura (°C): "));
let novaPressao = parseFloat(prompt("Insira a Pressão do Óleo (PSI): "));
let novoCombustivel = parseFloat(prompt("Insira o Nível de Combustível (%): "));

turbina.leituras[0] = novaTemp;
turbina.leituras[1] = novaPressao;
turbina.leituras[2] = novoCombustivel;

const tempOk = novaTemp >= 20 && novaTemp <= 90;
const pressaoOk = novaPressao > 50;
const combustivelOk = novoCombustivel > 20;

if (tempOk && pressaoOk && combustivelOk) {
    turbina.status = "Ligado";
} else {
    turbina.status = "Falha Crítica";
    turbina.bloqueioAtivado = true;
}

console.log("\n--- Painel Final Atualizado ---");
console.log(turbina);