/**4. Pedido de lanchonete
Crie um objeto pedido com:
nome do cliente
nome do lanche
quantidade
preço unitário

Calcule o total do pedido.
Se o total for maior que 30, aplique 5% de desconto.
Mostre o resumo final do pedido. */

let pedido = {};

pedido.cliente = prompt("Nome do cliente:");
pedido.lanche = prompt("Nome do lanche:");
pedido.quantidade = Number(prompt("Quantidade:"));
pedido.precoUnitario = Number(prompt("Preço unitário:"));

let total = pedido.quantidade * pedido.precoUnitario;

if (total > 30) {
    total *= 0.95; 
}

alert(`Cliente: ${pedido.cliente}
Lanche: ${pedido.lanche}
Total: R$ ${total}`);