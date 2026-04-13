//pede dist e qtd consumida em litros
//calcula media = diist/l
//SE media < 10 recebe rruim, se nao recebe bom
const prompt = require('prompt-sync')();

let distancia = prompt("Qual foi a distância percorrida?")
let combustivelConsumido = prompt("Quanto de combustível foi consumido (em litros)?")
let media = distancia/combustivelConsumido
console.log("A média é de "+media+"km/l")
if(media<10){
    console.log("Alerta: Veículo consumindo muito combustível. Necessário agendar revisão mecânica.")
}else{
    console.log("Consumo dentro do padrão operacional.")
}