const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));


async function trocarFoto() {
    let fotoNova = document.getElementById('urlnova').value
    
    if (fotoNova == '') {
        console.log('Essa peste n digitou nada');
        return;
    } else {
        console.log('Foto setada');
        let fotonova = document.getElementById('fotoEnviada')
        fotonova.innerHTML = '<p>Foto setada ✅</p>'
        await wait(2000);
        fotonova.innerHTML = 'p'


        
    }
}