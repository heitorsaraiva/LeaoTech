/**
 * 9. Controle de vendas
Crie um array de objetos vendas com:
cliente
produto
quantidade
precoUnitario

Percorra o array e calcule:

total de cada venda
valor total de todas as vendas somadas

Se uma venda passar de 100 reais, exiba “Venda alta”.
 */


let vendas = [
    { cliente: "Ana", produto: "Camisa", quantidade: 2, precoUnitario: 50 },
    { cliente: "Pedro", produto: "Tênis", quantidade: 1, precoUnitario: 200 },
    { cliente: "Maria", produto: "Boné", quantidade: 3, precoUnitario: 30 }
];

let totalGeral = 0;

for (let i = 0; i < vendas.length; i++) {
    let venda = vendas[i];
    let total = venda.quantidade * venda.precoUnitario;

    console.log(`Total da venda: R$ ${total}`);

    if (total > 100) {
        console.log("Venda alta");
    }

    totalGeral += total;
}

console.log(`Total geral: R$ ${totalGeral}`);