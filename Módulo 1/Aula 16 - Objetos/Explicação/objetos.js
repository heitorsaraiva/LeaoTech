// let carro = {
//     marca: 'BYD',
//     modelo: 'King',
//     cor: 'Branco',
//     ano: '2026',
//     opcionais: ['multmidia', 'aquecedor', 'trava elétrica', 'ABS'],
//     pneu: {
//         aro:29,
//         psi:32,
//         marcas:['michelan', 'pirelli']

//     }

// }

// //CRIAR UMA PROP
// carro.hibrido = false

// //MODIFICAR UM PROP
// carro.ano = 2025

// // DELETAR UMA PROP
// delete carro.hibrido

// // OBTER CHAVES DE UM OBJETO
// let chavescarro = Object.keys(carro)
// console.log(chavescarro)
// console.log(carro.pneu.marcas[0])

// //


// // Exemplo
// let pessoa = {}
// pessoa.nome = prompt(`Digite seu nome:`)
// pessoa.cpf = prompt(`Digite seu cpf:`)
// pessoa.idade = prompt(`Digite sua idade:`)
// pessoa.cidade = prompt(`Digite sua cidade:`)

// console.log('Cadastro concluído!')
// console.log(pessoa)

// let pessoa = {}

// pessoa.nome = 'Maria'
// pessoa.cpf = '32132132121'
// pessoa.cidade = "Fortaleza"
// pessoa.idade = 25

// console.log('Cadastro Relaizado com sucesso')

// for(let chave in pessoa){
//     console.log(`${chave} = ${pessoa[chave]}`)
// }


let pessoas = []

pessoa1 = {
    nome: 'Maria',
    idade: 25,
    cidade: 'Fortaleza',
    cpf: '3321321321'
}
pessoa2 = {
    nome: 'Jessica',
    idade: 29,
    cidade: 'Fortaleza',
    cpf: '555555555'
}
pessoa3 = {
    nome: 'Mateus',
    idade: 30,
    cidade: 'Maracanaú',
    cpf: '666666666'
}

pessoas.push(pessoa1)
pessoas.push(pessoa2)
pessoas.push(pessoa3)

// mostrar os nomes das pessoas cadastradas

for (let index = 0; index < pessoas.length; index++) {
    console.log(`${pessoas[1].nome} - ${pessoas[i].idade}`)
    
}




