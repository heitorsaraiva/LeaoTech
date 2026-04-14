/**
 * 8. Catálogo de alunos

Crie um array de objetos alunos com:
nome
nota
curso

Percorra com for e mostre:

os alunos aprovados
os alunos reprovados

Depois conte quantos foram aprovados e quantos foram reprovados.
 */

let alunos = [
    { nome: "Ana", nota: 8, curso: "JS" },
    { nome: "Pedro", nota: 5, curso: "JS" },
    { nome: "Maria", nota: 7, curso: "JS" },
    { nome: "João", nota: 4, curso: "JS" }
];

let aprovados = 0;
let reprovados = 0;

for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= 6) {
        console.log(`Aprovado: ${alunos[i].nome}`);
        aprovados++;
    } else {
        console.log(`Reprovado: ${alunos[i].nome}`);
        reprovados++;
    }
}

console.log(`Total aprovados: ${aprovados}`);
console.log(`Total reprovados: ${reprovados}`);