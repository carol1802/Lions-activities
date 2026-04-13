//Vamos criar um pequeno gerenciador de lista de tarefas! Crie um programa que
//inicie com um array vazio chamado listaTarefas. Peça ao usuário para digitar 3
//tarefas que ele precisa fazer no dia (uma de cada vez) e armazene-as no array.
//Em seguida, imprima no console a quantidade de tarefas pendentes usando
//uma mensagem como: "Você tem X tarefas na sua lista.".
//Depois, simule que o usuário concluiu a última tarefa do dia: remova o último
//item do array e imprima a lista atualizada no console para ele ver o que restou.
const prompt = require('prompt-sync')();
let listaTarefas = []
let qtdTarefas = prompt("Qual a qtd de tarefas")
let i 
for(i = 0; i<qtdTarefas; i++){
    listaTarefas.push(prompt("Qual é a "+(i+1)+"a tarefa? "))
}
console.log(listaTarefas.length+ " atividades pendentes:"+listaTarefas)