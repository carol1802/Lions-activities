let vooCanada ={
    nome: "Canada",
    milhas: 1000
}

let vooFranca ={
    nome: "França",
    milhas: 1000
}

let vooInglaterra ={
    nome: "Inglaterra",
    milhas: 1000
}

let vooPeru ={
    nome: "Canada",
    milhas: 1000
}

let vooItalia ={
    nome: "Itália",
    milhas: 1000
}

let vooEgito ={
    nome: "Egito",
    milhas: 1000
}

let vooSuica ={
    nome: "Suíça",
    milhas: 1000
}

let clienteVip = {
    nome: "Carol",
    categoria: "Gold",
    historicoViagens: [],
    somaMilhas: 0,

    qualCategoria(){
        let milhasFaltantes = 5000-this.somaMilhas
        if (this.somaMilhas>5000 && this.categoria != "Platinum"){
            this.somaMilhas = this.somaMilhas - 5000
            this.categoria="Platinum"
            console.log("Parabéns!Sua conta agora é plátinum!")
        }else if( this.categoria != "Platinum"){
            this.categoria="Gold"
            console.log("Sua conta é Gold. Faltam "+milhasFaltantes+" para o upgrade")

        }else{
            console.log("você tem "+this.somaMilhas+" milhas.")
        }
    },
    addVoo(voo){
        this.historicoViagens.push(voo.nome)
        this.somaMilhas= this.somaMilhas+voo.milhas
        this.qualCategoria()
        console.log("Bon voyage!")
        
    }

}

clienteVip.addVoo(vooCanada)
clienteVip.addVoo(vooInglaterra)
clienteVip.addVoo(vooFranca)
clienteVip.addVoo(vooEgito)
clienteVip.addVoo(vooPeru)
clienteVip.addVoo(vooItalia)
clienteVip.addVoo(vooSuica)

console.log(clienteVip)