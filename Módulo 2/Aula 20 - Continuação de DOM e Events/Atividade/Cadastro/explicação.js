const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let cadastros = []

async function cadastrarUser() {
    console.log(`Clicou em Cadastro`);


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

        const toast = document.getElementById("toast");
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000); // some depois de 3 segundos

    }

}

async function listarUsers() {
    console.log(`Clicou em Listar Cadastro`);


    // let divResultado = document.getElementById('resultado2')
    // divResultado.classList.remove('d-none')
    // divResultado.innerHTML = `<h5> NOME${cadastros.nome} </h5>`
    // await wait(3000);
    // divResultado.classList.add('d-none')



}

