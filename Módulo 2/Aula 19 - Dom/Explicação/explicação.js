// ------EVENTOS------
function enviarMsg(tipo) {
    if (tipo == 'unico') {
        alert('Click unico')
    } else if (tipo == 'duplo') {
        alert('click duplo')
    } else if (tipo == 'over') {
        alert('over')
    } else if (tipo == 'out') {
        let caixa1 = document.getElementById('caixa1')
        caixa1.innerHTML = 'caixa transformada'
    }
}

function apertouTecla(tipo) {
    if (tipo == 'keydown') {
        alert('keydown Tecla pressionada')
    } else if (tipo == 'keyup') {
        alert('keyup Tecla Solta')
    }
}

function eventoFormulario(tipo) {
    if (tipo == 'foco') {
        console.log('elemento com foco')
    } else if (tipo == 'input') {
        console.log('elemento recebeu dados')
    } else if (tipo == 'onchange') {
        console.log('Perdeu foco')
    }
}

function enviarFormulario(e) {
    e.preventDefault()
    console.log('n recarrega')
}

function eventosTela(tipo) {
    if (tipo = 'carregou') {
        console.log('Tela carregada');
    } else if (tipo = 'scroll') {
        console.log('Scrollou');
    } else if (tipo = 'redimensionado') {
        console.log('Tela redimensionada');
    }
}

//---------- DOM--------

function funcao1() {
    let pessoa = {
        // Atributos
        nome: 'Heitor',
        idade: 23,

        //Métodos
        falar: function () {
            console.log(`Meu nome é ${this.nome}`);

        }
    }
    console.log(pessoa)
    let lista = [1, 32, 4, 6, 6, 768, 12]

    lista.forEach()
}

// selecionar elementos pelo id
console.log(document.getElementById('caixa1'))

// selecionar elemeentos pela classe
console.log(document.getElementsByClassName('caixa'))

// selecionar elemtnos pelo name
console.log(document.getElementsByClassName('email'))

// selecionar por um seletor css
console.log(document.querySelector('.caixa'))

// seletor por um seletor css
console.log(document.querySelectorAll('div form label'));

// alterar o conteúdo 
caixa1.innerHTML = '<h1>Box 1</h1>'
console.log(caixa1.innerHTML);



// function trocarInputs() {
//     let nome = document.getElementById('nome2')
//     console.log(nome.value)
//     let cidade = document.getElementById('cidade')
//     console.log(cidade.value)
    
//     let aux = cidade.value 
//     cidade.value = nome.value
//     nome.value = aux
// }

function trocarInputs() {
    let nome = document.getElementById('nome2')
    console.log(nome.value)
    let cidade = document.getElementById('cidade')
    console.log(cidade.value)

    let saudacao = document.getElementById('saudacao')
    saudacao.innerHTML = `<h1> olá </h1> ${nome.value} ${cidade.value}`
}