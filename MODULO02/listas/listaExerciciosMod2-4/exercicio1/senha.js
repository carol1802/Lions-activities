
//prompt
// //novasenha!
//senha = prompt
// //novousuario!!
//usuario = prompt
//clear
//insira seu nome:
//insira sua senha:
//if usuario = tal, senha = tel -> objeto? ou classe?
//while tentativa senha != senha 
//  senha incorreta, tente novamente
//  prompt tentativa senha

const prompt = require('prompt-sync')();
let usuario = prompt("Digite seu novo nome de usuário...")
let novasenha = prompt("Digite sua nova senha...")
console.clear()
console.log("LOGIN")
let senha
let nome = prompt("Insira seu nome de usuário:")
if(nome == usuario){
    senha = novasenha
}else{
    console.log("nome de usuário não encontrado.")
    return console.error();
    
}
let tentativaSenha= prompt("Insirar sua senha:")

while(senha!=tentativaSenha){
    
    console.clear()
    tentativaSenha = prompt("Senha ou nome de usuario incorretos, tente novamente.")
    
}
console.log("logado!")