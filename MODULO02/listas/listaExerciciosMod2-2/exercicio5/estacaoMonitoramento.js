const prompt = require('prompt-sync')();

let estacao = {
    id: "Sensor-01",
    local: "Laboratório",
    temperaturas: [],

    inserirTemperaturas(){
        let i
        for(i = 3; i>0; i--){
            this.temperaturas.push(parseInt(prompt("Temperatura: ")))
        }
    },

    calcularMedia(){
        let i
        let soma = 0
        for(i = 0; i<3; i++){
            soma=this.temperaturas[i]+soma
        }
        let media = soma/this.temperaturas.length
        console.log(media)
        return media
    },
    
    alerta(){
        let alerta = null
        if(this.calcularMedia()>35){
            alerta = true
            console.log("PERIGO: Média de temperatura extrema ([media] graus) detectada no [local]!")
        }else{
            alerta = false
            console.log("Temperaturas dentro da normalidade.")
        }
    },

    exiba(){
        
        this.inserirTemperaturas()
        this.alerta()
        console.log(this)
    }



}
estacao.exiba()