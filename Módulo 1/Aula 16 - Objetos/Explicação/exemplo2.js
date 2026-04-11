// Crie um sistema para cadastrar uma lista de convidados, o usuário terá duas opções
// cadastrar convidado e sai. Depois de cadastrar todos os convidados, 
// crie um programa quepeça poara o user digitar seu nome e veja se ele está na lsita de convidados
// se tiver de uma mensagem de boas vindas
// se não diga que nção foi convidado
//


// SISTEMA 01

let pessoas = [];
let opcao;

while (opcao !== "3") {
    opcao = prompt(`SISTEMA DE CADASTRO:\n\n1 - Cadastrar pessoa\n2 - Lista de convidados\n3 - Sair`);

    switch (opcao) {
        case "1":
            let nome = prompt(`Digite o nome da pessoa:`);
            pessoas.push(nome);
            alert(`Você adicionou ${nome} a lista!`)
            break;
            
        case "2":
            alert(`Convidados: ${pessoas}`)
            break;

        case "3":
            alert(`Sair?`);
            break;

        default:
            alert(`Opção inválida`);
    }
} 

let nomeBusca = prompt("Digite seu nome para entrar:");
if (pessoas.includes(nomeBusca)) {
    alert("Bem-vindo à festa 🎉");
} else {
    alert("Você não foi convidado ❌");
}


