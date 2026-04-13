const prompt = require('prompt-sync')();
let temperaturas = []
i=0

while(i<3){
    temperaturas[i]= parseInt(prompt("Temperatura:"))
    i++
}

const avaliarTemperaturas= (temps)=>{
    let i=0
    let soma=0
    while(i<temps.length){
        soma += temps[i]
        i++
    }
    let media = soma/temps.length
    switch (true){
        case media>30:
            return "Alerta de Aquecimento, media de "+ media
            break
        case media<=30:
            return "Clima Estável, media de "+ media
            break
        default:
            return "algo deu errado..., media de "+ media
            
    }
}
console.log(avaliarTemperaturas(temperaturas))