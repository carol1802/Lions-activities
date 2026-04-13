const prompt = require('prompt-sync')();
mentor1 = {
    nome:"Jubicleido",
    areaAtuacao:"Tecnologia"
}
mentor2 = {
    nome:"Fulano",
    areaAtuacao:"História"
}
mentor3 ={
    nome: prompt("Nome do mentor:"),
    areaAtuacao:prompt("Área de atuação do mentor:"),
    
    
}
fichadeprojeto ={
    nomeCoordenador:"Geraldo",
    limiteVagas:3,
    areaEstudo: "Geografia",
    mentores: [mentor1, mentor2],

    addMentor(){
        this.mentores.push(mentor3)
        /*if(this.mentores.lenght <this.limiteVagas && mentor3.areaAtuacao == this.areaEstudo){   -> por algum motivo nao esta lendo o lenght
           this.mentores.push(mentor3)
        }else{
            console.log("bloqueado para inscrições")}
            */
           
        
    }

}
fichadeprojeto.addMentor()
console.log(fichadeprojeto)