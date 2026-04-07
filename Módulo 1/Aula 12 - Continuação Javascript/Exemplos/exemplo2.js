 /*
    2. Peça para o usuário digitar 3 notas, calcule a média das notas e mostre na tela

    Se a média for menor que 4 -> Reprovado
    Se a média for de 4 até 7 -> Recuperação
    Se a média for de 7 até 10 -> Aprovado
*/ 


let nota1 = parseFloat(prompt("Digite sua primeira nota:"));
let nota2 = parseFloat(prompt("Digite sua segunda nota:"));
let nota3 = parseFloat(prompt("Digite sua terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;
alert(`Sua média é: ${media.toFixed(2)}`);

if (media < 4) {
    alert("Você foi: Reprovado");
} else if (media >= 4 && media <7) {
    alert("Você foi: Recuperação");
} else {
    alert("Você foi: Aprovado");
}
        
