let carrinho = [10, 20, 30, 40, 50]
let i
let soma=0

for(i=0; i< carrinho.length; i++){
    soma = soma + carrinho[i]
}
media = soma/carrinho.length
console.log("Total:"+soma)
console.log("Média:"+media)