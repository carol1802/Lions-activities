let nivelCargoFuncionario1 = "Estagiário"
let salarioAtualFuncionario1 = 100
let nivelCargoFuncionario2="Júnior"
let salarioAtualFuncionario2= 100
let nivelCargoFuncionario3="Pleno"
let salarioAtualFuncionario3= 100
let nivelCargoFuncionario4="NPC"
let salarioAtualFuncionario4= 100

function calcula(nivelCargo, salarioAtual){
    let bonus
    switch (nivelCargo){
        case "Estagiário":
            //bonus de 10%
            bonus = salarioAtual*1.10
            break;
        case "Júnior":
            //bonus de 15%
            bonus = salarioAtual*1.15
            break;
        case "Pleno":
            //bonus de 20%
            bonus = salarioAtual*1.20
            break;
        default:
            //bonus de 0
            bonus = salarioAtual*1
            break;
    }

    return bonus
}
console.log(calcula(nivelCargoFuncionario1, salarioAtualFuncionario1))
console.log(calcula(nivelCargoFuncionario2, salarioAtualFuncionario2))
console.log(calcula(nivelCargoFuncionario3, salarioAtualFuncionario3))
console.log(calcula(nivelCargoFuncionario4, salarioAtualFuncionario4))