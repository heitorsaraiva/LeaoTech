// Sistema simples de caixa eletrônico.
let saldo = 1000;
let opcaoBanco;

while (opcaoBanco !== "4") {

    opcaoBanco = prompt(
        "Escolha:\n1 - Consultar saldo\n2 - Sacar\n3 - Depositar\n4 - Sair"
    );

    switch (opcaoBanco) {
        case "1":
            alert(`Saldo atual: R$ ${saldo}`);
            break;

        case "2":
            let saque = Number(prompt("Digite o valor do saque:"));
            if (saque <= saldo) {
                saldo -= saque;
                alert("Saque realizado com sucesso");
            } else {
                alert("Saldo insuficiente");
            }
            alert(`Saldo atual: R$ ${saldo}`);
            break;

        case "3":
            let deposito = Number(prompt("Digite o valor do depósito:"));
            saldo += deposito;
            alert(`Depósito realizado. Saldo atual: R$ ${saldo}`);
            break;

        case "4":
            alert("Saindo do sistema...");
            break;

        default:
            alert("Opção inválida");
    }
}