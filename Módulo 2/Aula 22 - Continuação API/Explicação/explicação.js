
function logQtdCaracteresPorId() {
    const inputCep = document.getElementById('cep');
    const cep = inputCep.value

    if (cep.length == 8) {
            console.log(`CEP ENVIADO`)
            let url = `https://viacep.com.br/ws/${cep}/json/`

            fetch(url).then((resp) => {
                return resp.json()
            }).then((dados) => {
                let inputRegiao = document.getElementById('regiao')
                inputRegiao.value = `${dados.estado} - ${dados.localidade}`
                inputRegiao.setAttribute('disabled', 'disabled')

                let inputRua = document.getElementById('rua')
                inputRua.value = dados.logradouro
                inputRua.setAttribute('disabled', 'disabled')



            })

            
            


    } else {

    }

}


