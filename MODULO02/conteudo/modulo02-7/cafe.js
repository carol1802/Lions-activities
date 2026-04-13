const prompt = require('prompt-sync')();

let gostaDeCafe = null
let resposta = ''

//main
    console.log("Você gosta de café?")
    process.stdin.once('data', function (data){
    resposta = data.toString().trim()
    gostaDeCafe=verificarResposta(resposta)
    mensagemUsuario(gostaDeCafe)
    process.exit()
})


function verificarResposta(resposta){
    if(resposta == 'sim' || resposta == 'Sim' || resposta == 'SIM' || resposta == "s"){
        return true
    }else if(resposta == 'nao' ||resposta == 'Nao' ||resposta == 'NAO' ||resposta == 'n'){
            return false
        }else{
            console.log("Erro... resposta inadequada")
        return null}
}
function mensagemUsuario(gostaDeCafe){
    if(gostaDeCafe== null){
        console.log("deu ruim, verifique sua resposta...")
        process.exit
    }else if(gostaDeCafe){
        console.log("Que ótimo! Você tem um ótimo gosto :)")
    }else{
        console.log("Que mal gosto... mas aposto que gosta de um chimarrão ;)")
    }
}
