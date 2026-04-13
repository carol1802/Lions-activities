
const servidor = {
    nome: "Servidor_UEPG_Labs",
    espacoTotal: 100,    
    espacoOcupado: 80    
};


function gerenciarUpload(s, arquivo) {
   
    if (s.espacoOcupado + arquivo <= s.espacoTotal) {

        s.espacoOcupado += arquivo;
        return true;
    } else {

        return false;
    }
}


const tamanhoDoNovoArquivo = 15;

console.log(`Status Inicial: ${servidor.espacoOcupado}GB / ${servidor.espacoTotal}GB`);


if (gerenciarUpload(servidor, tamanhoDoNovoArquivo)) {
    console.log("Upload aceito!");
    console.log(`Novo espaço ocupado: ${servidor.espacoOcupado}GB`);
} else {
    console.log(" Upload rejeitado: Espaço insuficiente.");
    console.log(`Espaço atual permanece em: ${servidor.espacoOcupado}GB`);
}