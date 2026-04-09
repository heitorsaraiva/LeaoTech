// SISTEMA DE USUÁRIO

let opcao;

while (opcao != 3) {
    opcao = parseInt(prompt("Escolha uma opção:\n1 - Cadastrar usuário\n2 - Listar usuários\n3 - Sair"));
    switch (opcao) {
        case 1:
            alert("Cadastrando usuário...");
            break;

        case 2:
            alert("Listando usuários...");
            break;

        case 3:
            alert("Saindo do sistema...");
            break;

        default:
            alert("Opção inválida");
    } 

    

} 