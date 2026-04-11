/*
2. Validação de login
    Crie um programa que peça o nome de usuário e a senha, 
    se o nome de usuário for 'admin' e a senha for 'admin123' diga que ela conseguiu logar 
    se ela errar uma das duas diga 'usuário não encontrado'
*/
let users = `admin`
let user = prompt(`Digite do usúario:`)
if (user == users) {
    let passwords = `admin123`
    let password = prompt(`Digite a senha:`)
    if (password == passwords) {
        alert(`Seja bem-vindo! Usuário logado!`)
    } else {
        alert(`Senha incorreta.`)
    }
} else {
    alert(`Usuário não encontrado.`)

}

