const prompt =require('prompt-sync')()
let nome = prompt("Qual é seu nome?");
let idade = parseInt(prompt("Qual é a sua idade?"));
let aniversario = parseInt(prompt("Você já fez aniversário este ano?(0 para sim, 1 para não)"))
let ano = 2026
let anoNascimento;

if(aniversario == 0){
    anoNascimento=ano-idade;
    console.log("Olá, "+nome+" Você nasceu no ano "+anoNascimento)
}else if(aniversario==1){
    anoNascimento= ano - idade - 1;
    console.log("Olá, "+ nome +" Você nasceu no ano "+anoNascimento)
}else{
    console.log("Algo deu errado... verifique.");
}

