// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////  Laço de repetição ////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Você está desenvolvendo um sistema simples de menu para um aplicativo.

// Solicite ao usuário uma opção digitando:
// 1 - Cadastrar usuário
// 2 - Listar usuários
// 3 - Sair do sistema

// Utilize switch para exibir a ação correspondente a cada opção. Caso o valor seja inválido, exiba "Opção inválida".

// Repita a solicitação até que a pessoa selecione a opção 3 para sair do sistema.

// #############################
// ######## for ##################
// #############################

// 1. Crie um programa que seria uma lista de desejos, onde o usuário pode pedir 3 coisas e você mostra cada um dos pedidos na tela.

// 2. Crie um programa que receba um valor de compra e depois um número de parcelas, e depois mostre na tela o valor de cada parcela utilizando um for

// 3. Um sistema de caixa precisa calcular o total de uma compra.

// Solicite ao usuário a quantidade de produtos comprados.
// Depois, usando um for:
// 	peça o preço de cada produto
// 	some os valores (dica: soma += valor)

// Ao final, exiba o total da compra.

// 4. Um professor tem 10 alunos e precisa saber quantos foram aprovados, crie um programa que peça a nota de cada um dos 10 alunos e se a nota for maior ou igual a 7, mostre aprovado, se não, recuperação.

// no final mostre o total de alunos aprovados e de recuperação


// #############################
// ######## while ################
// #############################

// 1. login até acertar (simples)

// Um sistema pede senha para acesso.

// Defina uma senha fixa (ex: "1234").
// Utilize um while para continuar pedindo a senha até o usuário acertar.

// Quando acertar, exiba: "Acesso liberado".

// 2 . Menu até sair
// sistema de saque/depósito (simulação de caixa eletrônico)

// Você está desenvolvendo um sistema simples de caixa eletrônico.

// O sistema deve iniciar com um saldo fictício de R$ 1000.

// Mostre o seguinte menu:

// 1 - Consultar saldo
// 2 - Sacar dinheiro
// 3 - Depositar dinheiro
// 4 - Sair

// Utilize switch para controlar o fluxo do sistema.

// Regras:

// 1 (Consultar saldo):
// 	exibir o saldo atual
// 2 (Sacar dinheiro):
// 	pedir o valor do saque
// 	verificar:
// 	se o valor é menor ou igual ao saldo → realizar saque
// 	senão → exibir "Saldo insuficiente"
// 		atualizar o saldo
// 	exibir novo saldo
// 3 (Depositar dinheiro):
// 	pedir o valor do depósito
// 	adicionar ao saldo
// 	exibir novo saldo
// 4 (Sair):
// 	Se o usuário selecionar o 4 deve encerrar o programa, se for qualquer outra opção deve pedir novamente a opção solicitada

// 3. caixa com múltiplas compras

// Um sistema de caixa permite registrar várias compras.

// Enquanto o usuário digitar "s" (sim), o sistema deve:

// pedir o valor da compra
// somar ao total

// Quando o usuário parar, exibir:

// total arrecadado

// 4. validação de entrada

// Um sistema precisa garantir que o usuário digite um valor válido.

// Solicite um número entre 1 e 10.
// Utilize while para repetir a pergunta até o valor ser válido.

// #############################
// ######## do  while #############
// #############################

// 1. confirmação de operação (simples)

// Um sistema precisa confirmar uma ação.

// Pergunte:
// "Deseja continuar? (s/n)"

// Utilize do while para repetir até o usuário digitar "s" ou "n".


// 2. sistema de menu com operações

// Um sistema possui o menu:

// 1 - Somar dois números
// 2 - Subtrair dois números
// 3 - Sair

// Utilize do while para:

// exibir o menu
// executar a operação escolhida (usar switch)
// repetir até o usuário escolher sair