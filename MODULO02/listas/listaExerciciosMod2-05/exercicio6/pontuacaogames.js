let p1 = 75
let p2 = 31
let p3 =89
const pontuacao = (p1, p2, p3)=>{
    let soma = p1+p2+p3
    if(soma>200 || p3>90){
        return "Veterano"
    }else{
        return "Iniciante"
    }
}
console.log("Pontuações\n____________________________\nPontuação 1.............."+p1+"\nPontuação 2.............."+p2+"\nPontuação 3.............."+p3+"\n____________________________")
console.log("Classificação: "+ pontuacao(p1, p2, p3))