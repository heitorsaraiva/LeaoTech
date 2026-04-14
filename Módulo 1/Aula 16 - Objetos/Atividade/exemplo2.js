/*
2. Cadastro de aluno
Peça via prompt:
nome do aluno
nota 1
nota 2

Monte um objeto aluno com essas informações.
Calcule a média e mostre:

“Aprovado” se média >= 7
“Recuperação” se média >= 5 e < 7
“Reprovado” se média < 5 */

let nomeAluno = prompt("Digite o nome do aluno:");
let nota1 = Number(prompt("Digite a primeita nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let media = (nota1 + nota2) / 2

let aluno = {}
aluno.nome = nomeAluno;
aluno.nota1 = nota1;
aluno.nota2 = nota2;
aluno.media = media

if (media >= 7) {
    alert(`Aluno ${nomeAluno} = Aprovado`)
} else if (media >= 5 && media < 7) {
    alert(`Aluno ${nomeAluno} = Recuperação`)
} else{
    alert(`Aluno ${nomeAluno} = Reprovado`)
}

console.log(aluno)