// Login até acertar (simples)

let painellogin = prompt(`Digite sua senha para logar:`)
let senhafixa = `1234`


while (painellogin !== senhafixa) {
    painellogin = prompt(`Senha incorreta!\nTente novamente:`);
}

alert(`Acesso liberado`);