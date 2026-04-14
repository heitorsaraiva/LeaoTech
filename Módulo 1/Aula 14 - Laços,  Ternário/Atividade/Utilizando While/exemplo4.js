// 3. caixa com múltiplas compras

// Um sistema de caixa permite registrar várias compras.

// Enquanto o usuário digitar "s" (sim), o sistema deve:

// pedir o valor da compra
// somar ao total

// Quando o usuário parar, exibir:

// total arrecadado

let total = 0;
let continuar = "s";

while (continuar === "s") {
    let valor = Number(prompt("Digite o valor da compra:"));
    total += valor;

    continuar = prompt("Deseja adicionar outra compra? (s/n)");
}

alert(`Total arrecadado: R$ ${total}`);