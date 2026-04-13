let numero = 45
let par = null
if(numero===0){
    par = true
    console.log("O número zero é considerado par porque atende à definição matemática de paridade: ele é um múltiplo de dois e divisível por dois com um resultado inteiro e resto zero. Além disso, zero se encaixa entre dois números ímpares, seguindo a sequência de pares e ímpares.")
}else 
    if(numero%1 != 0){
        console.log("Escolha outro número, não pode ser decimal!")
        return -1
    }else if(numero%2 == 0){
    par = true
}else{
    par = false
}

if(par){
    console.log("O número "+ numero+ " é par!")
}else{
    console.log("O número "+ numero+ " é impar!")
}