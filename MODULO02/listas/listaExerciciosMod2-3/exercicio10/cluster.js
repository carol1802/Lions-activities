const prompt = require('prompt-sync')();

let servidorCloud = {
    nome: "Servidor Principal AWS",
    capacidadeMaximaGigabytes: 500,
    sitesHospedados: [
        { dominio: "lojaexemplo.com.br", tamanhoOcupadoGB: 120 }
    ]
};

console.log("--- Status Atual da Nuvem ---");
console.log(servidorCloud);

console.log("\n--- Solicitação de Novo Deploy ---");
let novoDominio = prompt("Digite o domínio do novo site: ");
let novoTamanho = parseFloat(prompt("Digite o tamanho do site (GB): "));

let espacoOcupadoAtual = servidorCloud.sitesHospedados[0].tamanhoOcupadoGB;
let espacoTotalNecessario = espacoOcupadoAtual + novoTamanho;

if (espacoTotalNecessario <= servidorCloud.capacidadeMaximaGigabytes) {

    let novoSite = {
        dominio: novoDominio,
        tamanhoOcupadoGB: novoTamanho
    };
    
    servidorCloud.sitesHospedados.push(novoSite);
    console.log(" Upload Concluído! Sistema Operacional.");
} else {
    // Caso estoure o limite
    servidorCloud.alertaSobrecarga = true;
    console.log("Falha: Falta de Espaço Físico. Cancele o deploy.");
}

console.log("\n--- Relatório Final de Infraestrutura ---");
console.dir(servidorCloud, { depth: null }); 