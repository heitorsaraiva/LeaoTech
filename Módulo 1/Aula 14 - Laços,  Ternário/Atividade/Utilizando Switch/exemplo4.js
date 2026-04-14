/*
4. sistema de atendimento com fluxo (menu interativo)

Você está desenvolvendo um sistema de atendimento para um aplicativo.

O usuário deve escolher uma opção:

1 - Criar conta
2 - Fazer login
3 - Recuperar senha

Dependendo da escolha, o sistema deve:

1 (Criar conta):
	pedir nome
	pedir email
	pedir senha
	exibir: "Conta criada com sucesso para [nome]"
2 (Login):
	pedir email
	pedir senha
	exibir: "Login realizado com sucesso"
3 (Recuperar senha):
	pedir email
	perguntar "Deseja receber código por email ou SMS?"
	exibir: "Instruções enviadas"

Caso a opção seja inválida, exibir "Opção inválida"
*/

let opcaoAtendimento = prompt("Escolha:\n1 - Criar conta\n2 - Login\n3 - Recuperar senha");

switch (opcaoAtendimento) {
    case "1":
        let nome = prompt("Digite seu nome:");
        let email = prompt("Digite seu email:");
        let senha = prompt("Digite sua senha:");
        console.log(`Conta criada com sucesso para ${nome}`);
        break;

    case "2":
        let emailLogin = prompt("Digite seu email:");
        let senhaLogin = prompt("Digite sua senha:");
        console.log("Login realizado com sucesso");
        break;

    case "3":
        let emailRec = prompt("Digite seu email:");
        let metodo = prompt("Deseja receber código por Email ou SMS?");
        console.log("Instruções enviadas");
        break;

    default:
        console.log("Opção inválida");
}