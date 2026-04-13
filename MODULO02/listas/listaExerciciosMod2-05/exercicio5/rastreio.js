const prompt = require('prompt-sync')();
const encomenda = {
    id: "123",
    cliente: "Carol"
}

function traduzirStatus(codigo) {
    let descricao

    switch (codigo.toUpperCase()) {
        case "P":
            descricao = "Pendente de Envio"
            break
        case "E":
            descricao = "Em Rota de Entrega"
            break
        case "C":
            descricao = "Cancelado"
            break
        default:
            descricao = "Status Inválido"
    }

    return descricao
}

const codigoInformado = prompt("Digite o código do status (P, E ou C):");

encomenda.statusAtual = traduzirStatus(codigoInformado);

console.log("--- Registro da Encomenda Atualizado ---");
console.log(encomenda);