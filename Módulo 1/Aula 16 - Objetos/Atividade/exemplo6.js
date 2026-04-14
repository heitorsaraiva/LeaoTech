/**
 * 6. Lista de produtos
Crie manualmente um array de objetos chamado produtos com pelo menos 4 produtos.
Cada produto deve ter:
nome
preço
estoque

Faça um for para mostrar apenas os produtos com estoque maior que 0.
 */

let produtos = [
    { nome: "Camisa", preco: 50, estoque: 10 },
    { nome: "Calça", preco: 100, estoque: 0 },
    { nome: "Tênis", preco: 200, estoque: 5 },
    { nome: "Boné", preco: 30, estoque: 2 }
];

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].estoque > 0) {
        console.log(produtos[i].nome);
    }
}