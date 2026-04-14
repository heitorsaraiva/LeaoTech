/**
 10. Sistema de login simples
Crie um objeto usuário com:
login
senha
tipo

Peça via prompt login e senha.
Use if e else para verificar se os dados batem.
Se estiver correto:

se o tipo for “admin”, mostre “Acesso total”
senão, mostre “Acesso limitado”
 */

let usuario = {
    login: "admin",
    senha: "1234",
    tipo: "admin"
};

let login = prompt("Digite o login:");
let senha = prompt("Digite a senha:");

if (login === usuario.login && senha === usuario.senha) {
    if (usuario.tipo === "admin") {
        alert("Acesso total");
    } else {
        alert("Acesso limitado");
    }
} else {
    alert("Login ou senha incorretos");
}