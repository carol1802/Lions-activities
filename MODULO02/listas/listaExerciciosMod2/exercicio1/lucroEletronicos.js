const prompt = require('prompt-sync')();
let custoLote = 0
let valorVendaLote = 0
let lucroBruto = 0


console.log("Qual foi o custo do lote?")
process.stdin.once('data', function (data) {
    custoLote = data.toString().trim()
    
    console.log("Qual foi o valor da venda do lote?")
    process.stdin.once('data', function (data) {
    valorVendaLote = data.toString().trim()
    fLucroBruto(valorVendaLote, custoLote)
    process.exit()
    
})

})



function fLucroBruto(valorVendaLote, custoLote){
    lucroBruto=valorVendaLote-lucroBruto
    if(lucroBruto<500){
    console.log("Atenção: Margem de lucro perigosamente baixa. ")
    }else{
        console.log("Margem de lucro saudável!")
    }
}