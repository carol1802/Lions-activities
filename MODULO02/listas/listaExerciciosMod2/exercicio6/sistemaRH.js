const prompt = require('prompt-sync')();
const valorHoraExtra = 1.5
let horaNormal= prompt("Qual o valor ganho por hora de trabalho normalmente?")
let qtdHoraExtra = prompt("Qual a quantidade de hora extra feitas no mês?")
let totalHoraExtra= horaNormal*valorHoraExtra*qtdHoraExtra
console.log("O valor a receber de horas extras este mês é: R$"+totalHoraExtra)