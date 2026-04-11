/*
4. Um sistema escolar classifica alunos por conceito.
Solicite ao usuário uma letra (A, B, C ou D) e utilize switch para exibir:

A → "Excelente desempenho"
B → "Bom desempenho"
C → "Desempenho regular"
D → "Desempenho insuficiente"

Caso seja informada outra letra, exiba "Conceito inválido".
*/

let conceito = prompt("Digite o conceito (A, B, C ou D):").toUpperCase();

switch (conceito) {
    case "A":
        console.log("Excelente desempenho");
        break;
    case "B":
        console.log("Bom desempenho");
        break;
    case "C":
        console.log("Desempenho regular");
        break;
    case "D":
        console.log("Desempenho insuficiente");
        break;
    default:
        console.log("Conceito inválido");
}
