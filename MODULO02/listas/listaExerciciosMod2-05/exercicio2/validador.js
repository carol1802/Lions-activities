//arrow function

const prompt = require('prompt-sync')();
let nome = prompt("Nome do usuario:")
let codigo = parseInt(prompt("Código do crachá..."))

const validar = (nomeUsuario, codigoCracha) => {
    if(nomeUsuario.length>5 && codigoCracha>1000){
        return true
    }else{
        return false
    }
}
function acesso(validar){
    if(validar==true){
        console.log("Acesso concedido.")
    }else{
        console.log("Acesso negado")
    }
}

acesso(validar(nome, codigo))