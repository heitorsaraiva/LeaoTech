/*
        1. Crie um programa que peça para o usuário digitar o seu peso e sua altura. 
       O programa deve calcular o IMC do usuário.
       imc = peso/altura²
       Depois de mostrar o IMC classifique em qual situação a pessoa se encontra de acordo com a seguinte tabela:
       abaixo 
       de 18,5 -> Abaixo do peso
       de 18,5 até 25 -> Peso normal
       de 25 até 30 -> Sobrepeso
       de 30 ou mais -> Obesidade  
*/

let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

let imc = peso / (altura * altura);
alert(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
        alert("Você é classficado como: Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
        alert("Você é classficado como: Peso normal"); 
} else if (imc >= 25 && imc < 30) {
        alert("Você é classficado como: Sobrepeso");
} else {
        alert("Você é classficado como: Obesidade");
}
