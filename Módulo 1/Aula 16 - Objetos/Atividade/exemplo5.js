/**5. Cadastro de carro
Peça:
marca
modelo
ano
valor

Crie um objeto carro.
Verifique:

se o carro tem menos de 10 anos, mostre “Seminovo”
senão, mostre “Usado”

Depois exiba todos os dados do objeto. */

let carro = {};

carro.marca = prompt("Marca:");
carro.modelo = prompt("Modelo:");
carro.ano = Number(prompt("Ano:"));
carro.valor = Number(prompt("Valor:"));

let anoAtual = 2026;

if (anoAtual - carro.ano < 10) {
    alert("Seminovo");
} else {
    alert("Usado");
}

console.log(carro);