
let filaDeAtendimento = [];


function triagemDeChamado(nivel) {
    switch (nivel) {
        case 1:
            return "Atendimento Básico";
        case 2:
            return "Equipe Especializada";
        case 3:
            return "Gestão de Crise";
        default:
            return "Nível Inválido";
    }
}

let criticidadeInformada = 2; 
let setorResponsavel = triagemDeChamado(criticidadeInformada);

if (setorResponsavel !== "Nível Inválido") {

    filaDeAtendimento.push(setorResponsavel);
    
    console.log(`Chamado triado para: ${setorResponsavel}`);
} else {
    console.log("Erro: Nível de criticidade não reconhecido.");
}

console.log("--- Fila de Atendimento Atual ---");
console.log(filaDeAtendimento);