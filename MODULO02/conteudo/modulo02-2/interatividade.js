 import PromptSync from "prompt-sync"
 const prompt = PromptSync()
 let nome = prompt("Qual é seu nome?")
 let cidade = prompt("Qual é a sua cidade?")
 console.log("Olá, " + nome + " , da cidade " + cidade)

let entradaUsuario = '';

process.stdin.on('data', function (data) {
entradaUsuario = data.toString()
    console.log("Voce digitou: ", entradaUsuario)
    process.stdout.wite('ola mundoz\n'+entrada)
    process.exit()
 })