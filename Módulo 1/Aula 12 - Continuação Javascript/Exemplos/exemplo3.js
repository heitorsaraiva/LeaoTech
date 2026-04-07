/*
       3. Crie um programa que peça o usário que pode ser 1 - gerente ou vendedor,
       se for gerente pode aplicar até 50% de desconto, se for vendedor pode aplicar até 30% de desconto.
       se o usuário digitar uma porcentagem válida, peça o valor do produto e mostre o preço final.
*/

let role = parseInt(prompt("Você é gerente ou vendedor? Digite 1 para gerente e 2 para vendedor:"));

if (role == 1) {
    let valor = parseFloat(prompt("Olá, gerente! Qual o valor do produto?"));
    let desconto = parseInt(prompt("Qual a porcentagem do desconto? De 1 a 50?"));

    if (desconto >= 1 && desconto <= 50) {
        let valorDesconto = valor * (desconto / 100);
        let valorFinal = valor - valorDesconto;

        alert(`Valor do desconto: ${valorDesconto}\nValor original: ${valor}\nValor final: ${valorFinal}`);
    } else {
        alert("Desculpe, a porcentagem de desconto para gerente é de 1 a 50%");
    }

} else if (role == 2) {
    let valor = parseFloat(prompt("Olá, vendedor! Qual o valor do produto?"));
    let desconto = parseInt(prompt("Qual a porcentagem do desconto? De 1 a 30?"));

    if (desconto >= 1 && desconto <= 30) {
        let valorDesconto = valor * (desconto / 100);
        let valorFinal = valor - valorDesconto;

        alert(`Valor do desconto: ${valorDesconto}\nValor original: ${valor}\nValor final: ${valorFinal}`);
    } else {
        alert("Desculpe, a porcentagem de desconto para vendedor é de 1 a 30%");
    }

} else {
    alert("Desculpe, sua função não foi identificada.");
}


