/**
 * 
 * 7. Sistema de estoque
Usando um array de objetos produtos, percorra a lista e:
exiba o nome dos produtos com estoque baixo (menor que 5)
exiba o valor total de cada item em estoque (preço × estoque)
 */

for (let i = 0; i < produtos.length; i++) {
    let produto = produtos[i];

    if (produto.estoque < 5) {
        console.log(`Estoque baixo: ${produto.nome}`);
    }

    let total = produto.preco * produto.estoque;
    console.log(`${produto.nome} - Total em estoque: R$ ${total}`);
}