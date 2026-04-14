
// 1. Cadastro de produto
// Crie um programa que peça via prompt:
// nome do produto
// preço
// quantidade em estoque

// Depois monte um objeto chamado produto com essas informações e exiba:

// nome
// valor total em estoque (preço × quantidade)

let produto = {};

let nomeProduto = prompt("Digite o nome do produto:");
let precoProduto = Number(prompt("Digite o preço do produto:"));
let quantidadeProduto = Number(prompt("Digite a quantidade em estoque:"));


produto.nome = nomeProduto;
produto.preco = precoProduto;
produto.quantidade = quantidadeProduto;


let totalEstoque = produto.preco * produto.quantidade;

console.log(produto)
alert(`Produto: ${produto.nome}\nValor total em estoque: R$ ${totalEstoque}`);