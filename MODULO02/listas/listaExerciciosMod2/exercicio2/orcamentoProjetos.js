const prompt = require('prompt-sync')();
const valorHora = 45

mostrarValorTotal()

function perguntaHora(){
    let horasEstimadas

    horasEstimadas = prompt("Quantas horas são estimadas para o desenvolvimento?")

    return horasEstimadas
}

function perguntaONG(){
    let confirmaONG 
    confirmaONG = prompt("É uma ONG?")
    
    if(confirmaONG == 'sim'){
        return true
    }else if(confirmaONG=='nao'){
        return false
    }else{
        return null
    }
}

function valorTotal(){
    let valorTotal
    let hora = perguntaHora()
    let ong = perguntaONG()
    valorTotal = hora*valorHora
    if(valorTotal>5000 && ong){
        valorTotal = valorTotal*0.9
    }
    return valorTotal
}

function mostrarValorTotal(){
    let valor = valorTotal()
    console.log("O valor total do projeto é de "+valor)
    return
}
