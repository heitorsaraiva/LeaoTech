let pessoa = {
    nome: 'Jão',
    idade: '25'
}

let pessoa_json = '{"nome":"Jão", "idade":"25"}'

/*
Tipos de dados aceitos:
- strings
- number
- boolen
- null
- array
- obejto
*/

console.log(pessoa)
console.log(pessoa_json)

pessoa= JSON.stringify(pessoa)
console.log(pessoa)

pessoa_json = JSON.parse(pessoa_json)
console.log(pessoa_json)

for(let chave in pessoa_json){
    console.log(`${chave} - ${pessoa_json[chave]}`)

}


// funçao sem retorno e sem parametro
function saudacao(){
    console.log('ola munndo')
}

// funçao com parametro
function saudacaocompleta(nome, idade) {
    console.log(`Seja bem-vindo ${nome} vc tem ${idade} de idade.`)
}
saudacaocompleta('maria',21)

// =============================
function exibirnomes(listanomes) {
    for (let index = 0; index < listanomes.length; index++) {
        console.log(listanomes[i])
    }
}
nomes = ['bob', 'carlos', 'pedro']
exibirnomes(nomes)

// =============================
let cadastros = [
    {
        nome:"pedro",
        telefone:"8123123123",
        cidade:"aracati",
        profissão:"piloto"
    },
    {
        nome:"maria",
        telefone:"8598989898",
        cidade:"fortaleza",
        profissão:"enfermeira"
    },
    {
        nome:"joao",
        telefone:"8598989898",
        cidade:"fortaleza",
        profissão:"enfermeiro"
    }
]

function listarnome(listapessoas){
    for (let index = 0; index < listapessoas.length; index++) {
        console.log(`${listapessoas[1].nome}`)
        
    }

}

//Funções com retorno


// chamando funçao
saudacao()