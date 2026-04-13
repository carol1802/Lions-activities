const prompt = require('prompt-sync')();

let atleta = {
    nome:"Carol",
    pesoAtual:58,
    meta:"Emagrecimento",
    distancias:[],

    addDistancia(distancia){
        this.distancias.push(distancia)
    },

    quilometragemMedia(){
        console.log(this.distancias.length)
        let i = this.distancias.length-1
        let soma=0
        while(i>this.distancias.length-4){
            soma = soma+this.distancias[i]
            i--
        }
        let media = soma/3
        return media
    },

    saidaFinal(){
        console.log("A média das últimas 3 distâncias percorridas foi de:"+this.quilometragemMedia()+" km.")
    }
}

let distancias
while(true){
    distancias=parseInt(prompt("Qual a distância pecorrida? (0 para sair) :"))
    if(distancias==0){
        break
    }
    atleta.addDistancia(distancias)
}
console.log(atleta)
atleta.saidaFinal()