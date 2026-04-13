const taxaFixa =20
const porcExtra = 1.5
const taxaExtra = 15
const prompt = require('prompt-sync')();
let distancia = prompt("Qual será a distância percorrida em km?")
let urgencia = prompt("Há risco ou urgência? obs: acréscimo de 15 reais no valo final")
let frete = taxaFixa + porcExtra*distancia

if(urgencia=='sim'){
    urgencia=true
}else if(urgencia=='nao'){
    urgencia=false
}else{
    urgencia=null
}

if(distancia>100 || urgencia == true){
    frete+= taxaExtra
}
console.log("Frete total:"+frete)