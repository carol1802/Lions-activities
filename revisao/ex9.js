let palavra1 = "roma"
let palavra2 = "amor"
palavra1 = palavra1.toLowerCase()
palavra2 = palavra2.toLowerCase()

let i
let j
let igual=0

for(i=0;i<palavra1.length;i++){
    for(j=0; j<palavra2.length;j++){
        if(palavra1[i]==palavra2[j]){
            igual+=1
            break
        }
    }
    
}
    console.log("Palavra 1:"+palavra1)
    console.log("Palavra 2:"+palavra2)
if(igual==palavra1.length && igual==palavra2.length){
    console.log("São anagramas")
}else{
    console.log("Não são anagramas")
}
