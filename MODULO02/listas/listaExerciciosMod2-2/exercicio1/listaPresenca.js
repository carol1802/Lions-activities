const prompt = require('prompt-sync')();
let listaAlunos = ['João', 'Maria']
console.log(listaAlunos)

let novoAluno = prompt("Novo aluno:")
listaAlunos.push(novoAluno)
console.log(listaAlunos)
