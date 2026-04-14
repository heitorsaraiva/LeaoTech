/*
3. Controle de funcionário
Peça:
nome
cargo
salário
quantidade de faltas

Crie um objeto funcionário.
Se tiver mais de 3 faltas, mostre que o funcionário perdeu o bônus.
Caso contrário, mostre que receberá bônus de 10% sobre o salário. */

let nome = prompt("Digite o seu nome:");
let cargo = prompt("Digite o seu cargo:");
let salario = Number(prompt("Digite seu salario:"));
let quantidadedefalta = Number(prompt("Digite sua quantidade de faltas:"));

let funcionario = {};

funcionario.nome = nome;
funcionario.cargo = cargo;
funcionario.salario = salario;
funcionario.quantidade_de_faltas = quantidadedefalta;

if (funcionario.quantidade_de_faltas > 3) {
    alert("Você perdeu o bônus!");
} else {
    let bonus = funcionario.salario * 0.10;
    alert(`Você ganhou bônus de R$ ${bonus}`);
}

console.log(funcionario);