//              0       1         2        3
let nomes = ['joao', 'maria', 'pedro', 'sandro']
console.log(nomes)
console.log(nomes[2])
console.log(nomes.length)

nomes[1] = 'davi'
nomes.push('francisco') // add elementos no final
nomes.unshift('heitor', 'marquinho') // add elemento no inicio

nomes.pop() // remover elemento final
nomes.shift() // remover um elemento do inicio

nomes.splice(/*apartir da pos*/5, /*remova em diante*/1) // remov elementos de um posicition especifica
nomes.splice(3, 0, /*elementos q quer add*/ 'gabriel', 'lopes') // add elementos de um posicition especifica
let tamanho = nomes.length
for (let i = 0; i < tamanho; i++) {
    console.log(`seja bem-vindo ${nomes[i]}`)
}

console.log(nomes.includes('heitor')) // true ou false -- verficar se tem um elemento
console.log(nomes.indexOf('gabi')) // retorna o indice do elemento se houver mais de uma por exemplo


let nomes2 = ['nome1','nome2','nome3','nome4']
console.log(nomes2)
while (nomes.indexOf('leticia') != -1) {
    let index = nomes.indexOf('leticia')
    nomes.splice(index, 1)
    console.log(nomes2)
}