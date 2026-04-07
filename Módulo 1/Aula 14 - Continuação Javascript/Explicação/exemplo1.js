/*
1. Utilize o if ternário para resolver as seguintes questões:

1. Verifique se o usuário do sistema é maior de idade ou não.
2. Peça ao usuário um número e verifique se ele é ímpar ou par.
3. Peça ao usuário a nota de um aluno e se for maior que 7, mostre aprovado se não mostre recuperação.
4. Peça para um usuário digitar um número e só permita que o número seja positivo.
5. Peça para o usuário digitar o preço de um produto e diga se ele é caro se custar mais de 100 reais e barato se custar menos que 100.
*/

// 1. Verificar maior de idade
let idade = prompt("Digite sua idade:");
let maiorIdade = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(maiorIdade);

// 2. Verificar se número é par ou ímpar
let numero = prompt("Digite um número:");
let parOuImpar = numero % 2 == 0 ? "Par" : "Ímpar";
console.log(parOuImpar);

// 3. Verificar nota do aluno
let nota = prompt("Digite a nota do aluno:");
let resultado = nota > 7 ? "Aprovado" : "Recuperação";
console.log(resultado);

// 4. Permitir apenas número positivo
let numPositivo = prompt("Digite um número positivo:");
let verificador = numPositivo > 0 ? "Número válido" : "Número inválido";
console.log(verificador);

// 5. Verificar preço do produto
let preco = prompt("Digite o preço do produto:");
let classificacao = preco > 100 ? "Produto caro" : "Produto barato";
console.log(classificacao);