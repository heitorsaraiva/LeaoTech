// 4. validação de entrada

// Um sistema precisa garantir que o usuário digite um valor válido.

// Solicite um número entre 1 e 10.
// Utilize while para repetir a pergunta até o valor ser válido.

let numero = Number(prompt("Digite um número entre 1 e 10:"));

while (numero < 1 || numero > 10 || isNaN(numero)) {
    numero = Number(prompt("Valor inválido! Digite um número entre 1 e 10:"));
}

alert(`Número válido: ${numero}`);