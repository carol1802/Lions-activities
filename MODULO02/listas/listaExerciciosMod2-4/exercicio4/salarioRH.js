let salarios = [2500, 3200, 4100, 5000, 6200]
console.log("Salários antigo..."+salarios)
salarios.forEach((salario, index) => {
    salarios[index] = salario * 1.1;
})
console.log("Salários atualizado..."+salarios)