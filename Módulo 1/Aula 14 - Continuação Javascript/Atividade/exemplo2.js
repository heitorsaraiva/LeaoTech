// Utilizando FOR
// 1. Desejos
for(let i = 0; i <3; i++) {
    let desejo = prompt(`Digite o item:`)
    console.log(desejo)
}

// 2. Compras
let valorcompra = Number(prompt(`Digite o valor da compra:`))
let numerodaparcela = parent(prompt(`Digite o valor da parcela:`))
let parcela = valorcompra / numerodaparcela


while ((numerodaparcela) <= 0 || (numerodaparcela) > 12){
    numerodaparcela = parseInt(prompt(`Digite o numero de parcelas`))
}
for( let i = 1; i <= numerodaparcela; i++){
    console.log(`Parcela ${i} = ${parcela.toFixed(2)}`)
}



// 4. Notas de Alunos
let nota
let aprovados = 0
let recuperacao = 0

for(let i=0; i < 5; i++){
    nota = parseInt(prompt(`Digite nota do aluno ${i+1}`))
    if (nota >= 7){
        console.log(`Aluno ${i+1} = Aprovado`)
        aprovados++
    }else {
        console.log(`Aluno ${i+1} = Recuperção`)
        recuperacao++

    }
}

console.log(`${aprovados} Alunos aprovados`)
console.log(`${recuperacao} Alunos recuperação`)
