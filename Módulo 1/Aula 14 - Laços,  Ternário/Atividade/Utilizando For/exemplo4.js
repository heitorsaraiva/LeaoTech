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