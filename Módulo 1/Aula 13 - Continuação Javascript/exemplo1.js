/*
1. Verificação de acesso ao cinema
    Crie um programa que receba a idade e se a pessoa tem ingresso.
    Ela só pode entrar se a idade for maior que 16 anos e tiver ingresso
*/

alert(`Verficação CINEMA BRASIL:`)
let idade = prompt(`Digite sua idade:`)
if (idade <= 15 ) {
    alert(`Idade mínima necessária é 16 anos!`)
} else if ( idade >= 16) {
    let codigo = `XX11`
    let valor = prompt(`Digite o codigo do seu ingresso:`).toUpperCase()
    
    if ( valor != codigo) {
        alert(`Código Inválido.`)
    } else {
        alert(`Código |${valor}| identificado!\nSeu ingresso está liberado!`)
    }

}

