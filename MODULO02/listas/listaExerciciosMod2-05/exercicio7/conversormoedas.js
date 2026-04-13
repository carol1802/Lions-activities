const prompt = require('prompt-sync')();

const casadecambio = (valorBRL, moedaDestino) =>{
    const cotacaoUSD = 5;
  const cotacaoEUR = 6;
  const cotacaoGBP = 7;

  switch (moedaDestino.toUpperCase()) {
    case "USD":
      return valorBRL / cotacaoUSD
    case "EUR":
      return valorBRL / cotacaoEUR
    case "GBP":
      return valorBRL / cotacaoGBP
    default:
      return valorBRL
  }
}

let valor = parseFloat(prompt("Digite o valor em Reais (R$):"));
let moeda = prompt("Digite a moeda de destino (USD, EUR ou GBP):");

let resultado = casadecambio(valor, moeda);

if (resultado === valor) {
  console.log(`Moeda não reconhecida. Valor mantido: R$ ${resultado.toFixed(2)}`);
} else {
  console.log(`O valor convertido é: ${moeda.toUpperCase()} ${resultado.toFixed(2)}`);
}