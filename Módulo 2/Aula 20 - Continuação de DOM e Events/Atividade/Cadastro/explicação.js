const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let cadastros = []

async function cadastrarUser() {


    let inputNome = document.getElementById('nome')
    let inputIdade = document.getElementById('idade')
    let inputCidade = document.getElementById('cidade')
    let inputProf = document.getElementById('prof')

    if (
        inputNome.value === "" ||
        inputIdade.value === "" ||
        inputCidade.value === "" ||
        inputProf.value === ""
    ) {
        return;
    } else {
        obj = {
            nome: inputNome.value,
            idade: inputIdade.value,
            cidade: inputCidade.value,
            Profissão: inputProf.value
        }

        cadastros.push(obj)

        let divResultado = document.getElementById('resultado')
        // divResultado.innerHTML = ``
        divResultado.classList.remove('d-none')
        await wait(3000);
        divResultado.classList.add('d-none')

    }

}

async function listarUsers() {
    console.log(`Clicou em Listar Cadastro`);
        console.log(cadastros);


    // let divResultado = document.getElementById('resultado2')
    // divResultado.classList.remove('d-none')
    // divResultado.innerHTML = `<h5> NOME${cadastros.nome} </h5>`
    // await wait(3000);
    // divResultado.classList.add('d-none')
    


}