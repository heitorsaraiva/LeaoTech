/*
6. sistema de saque/depósito (simulação de caixa eletrônico)

Você está desenvolvendo um sistema simples de caixa eletrônico.

O sistema deve iniciar com um saldo fictício de R$ 1000.

Mostre o seguinte menu:

1 - Consultar saldo
2 - Sacar dinheiro
3 - Depositar dinheiro

Utilize switch para controlar o fluxo do sistema.

Regras:

1 (Consultar saldo):
	exibir o saldo atual
2 (Sacar dinheiro):
	pedir o valor do saque
	verificar:
	se o valor é menor ou igual ao saldo → realizar saque
	senão → exibir "Saldo insuficiente"
		atualizar o saldo
	exibir novo saldo
3 (Depositar dinheiro):
	pedir o valor do depósito
	adicionar ao saldo
	exibir novo saldo
*/

let saldo = 1000;
let opcaoBanco = prompt("Escolha:\n1 - Consultar saldo\n2 - Sacar\n3 - Depositar");

switch (opcaoBanco) {
    case "1":
        console.log(`Saldo atual: R$ ${saldo}`);
        break;

    case "2":
        let saque = Number(prompt("Digite o valor do saque:"));
        if (saque <= saldo) {
            saldo -= saque;
            console.log("Saque realizado com sucesso");
        } else {
            console.log("Saldo insuficiente");
        }
        console.log(`Saldo atual: R$ ${saldo}`);
        break;

    case "3":
        let deposito = Number(prompt("Digite o valor do depósito:"));
        saldo += deposito;
        console.log(`Depósito realizado. Saldo atual: R$ ${saldo}`);
        break;

    default:
        console.log("Opção inválida");
}