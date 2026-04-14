/*
1. Você está desenvolvendo um sistema simples de menu para um aplicativo.

Solicite ao usuário uma opção digitando:
1 - Cadastrar usuário
2 - Listar usuários
3 - Sair do sistema
*/


let opcao = prompt("Escolha uma opção:\n1 - Cadastrar usuário\n2 - Listar usuários\n3 - Sair");
switch (opcao) {
    case "1":
        console.log("Cadastrar usuário");
        break;
    case "2":
        console.log("Listar usuários");
        break;
    case "3":
        console.log("Sair do sistema");
        break;
    default:
        console.log("Opção inválida");
}

