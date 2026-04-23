// function funcao1(tipo) {
//     alert('botão chamado');
//     let caixas = document.getElementsByClassName('caixa')

    
//     for (let index = 0; index < caixas.length; index++) {
//         caixas[index].innerHTML = `<p> Box ${index+3} </p>`
        
//     }


// }


function calcularImc() {
    let inputPeso = document.getElementById('peso')
    let inputAltura = document.getElementById('altura')

    let peso = parseFloat(inputPeso.value)
    let altura = parseFloat(inputAltura.value)

    let imc = peso / (altura * altura)

    let divResultado = document.getElementById('resultado')
    divResultado.innerHTML = `<h5> Seu imc é ${imc.toFixed(2)} </h5>`
    


}