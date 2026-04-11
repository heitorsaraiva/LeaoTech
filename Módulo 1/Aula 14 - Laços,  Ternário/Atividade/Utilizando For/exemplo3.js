// Sistema de caixa
alert(`Seja bem-vindo!\nSistema de caixa para cálculo de compra!`);

let quantidade = Number(prompt(`Qual a quantidade de produtos comprados?`));
let soma = 0;

for (let i = 0; i < quantidade; i++) {
    let preco = Number(prompt(`Qual o preço do produto ${i + 1}?`));
    soma += preco;
}

alert(`O total da compra é: R$ ${soma}`);