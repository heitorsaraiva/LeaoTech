let foto1 = 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
let foto2 = 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

let usuarios = {
    '12312312312': { foto: foto1, nome: 'João Silva', idade: 30 },
    '98765432100': { foto: foto2, nome: 'Walmo Santos', idade: 25 }
};

function cadastrar() {

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const foto = document.getElementById('foto').value;
    const cpf = document.getElementById('cpf').value;

    if (usuarios[cpf]) {
        const lista = document.getElementById('lista');
        lista.innerHTML = `<p style="display: flex; justify-content: center;">⚠ Este usuário já existe!</p>`
        setTimeout(() => {
            lista.innerHTML = '';
        }, 2000);
        return;

    } 
    
    if (nome === "" || idade === "" || foto === "" || cpf === "") {
        const lista = document.getElementById('lista');
        lista.innerHTML = `<p style="display: flex; justify-content: center;">⚠ Você não digitou tudo!</p>`
        setTimeout(() => {
            lista.innerHTML = '';
        }, 2000);
        return;

    } else {
        usuarios[cpf] = {
            nome: nome,
            idade: idade,
            foto: foto
        };

        const lista = document.getElementById('lista');
        lista.innerHTML = `<p style="display: flex; justify-content: center;">✅ Usuário cadastrado com sucesso!</p>`
        setTimeout(() => {
            lista.innerHTML = '';
        }, 2000);

        // Limpa os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('idade').value = '';
        document.getElementById('foto').value = '';
        document.getElementById('cpf').value = '';

    }

}

function listar() {
    const lista = document.getElementById('lista');

    let tabela = '<table style="border-collapse: collapse; border: 1px solid black; width: 100%;">';
    tabela += '<tr style="border: 1px solid rgb(187, 187, 187);;"><th style="border: 1px solid rgb(187, 187, 187);; padding: 10px;">Foto</th><th style="border: 1px solid rgb(187, 187, 187);; padding: 10px;">Nome</th><th style="border: 1px solid rgb(187, 187, 187);; padding: 10px;">Idade</th><th style="border: 1px solid rgb(187, 187, 187);; padding: 10px;">CPF</th></tr>';

    for (let cpf in usuarios) {
        const usuario = usuarios[cpf];
        const cpfFormatado = formatarCPF(cpf);
        tabela += '<tr style="border: 1px solid rgb(187, 187, 187);;">';
        tabela += `<td style="border: 1px solid rgb(187, 187, 187);; padding: 10px;"><img src="${usuario.foto}" style="height: 50px;"></td>`;
        tabela += `<td style="border: 1px solid rgb(187, 187, 187);; padding: 10px;">${usuario.nome}</td>`;
        tabela += `<td style="border: 1px solid rgb(187, 187, 187);; padding: 10px;">${usuario.idade}</td>`;
        tabela += `<td style="border: 1px solid rgb(187, 187, 187);; padding: 10px;">${cpfFormatado}</td>`;
        tabela += '</tr>';
    }

    tabela += '</table>';

    lista.innerHTML = tabela;

    setTimeout(() => {
        lista.innerHTML = '';
    }, 10000);
}


function formatarCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}



function editar() {
    const lista = document.getElementById('lista');
    
    lista.innerHTML = `
        <div style="margin: 20px 0;">
            <label for="cpfEditar">Digite o CPF do usuário para editar:</label><br>
            <input type="text" id="cpfEditar" maxlength="11" style="margin: 10px 0; padding: 5px;">
            <button onclick="buscarUsuario()" class="btn btn-primary" style="margin-left: 10px;">Enviar</button>
        </div>
    `;
}

function buscarUsuario() {
    const cpf = document.getElementById('cpfEditar').value;
    
    if (!usuarios[cpf]) {
        const lista = document.getElementById('lista');
        lista.innerHTML = `<p>⚠ Usuário não encontrado com este CPF!</p>`;
        setTimeout(() => {
            lista.innerHTML = '';
            editar(); // Volta para o formulário inicial
        }, 2000);
        return;
    }
    
    const usuario = usuarios[cpf];
    const lista = document.getElementById('lista');
    
    let tabela = '<div style="display: flex; justify-content: center; margin-bottom: 20px;">';
    tabela += '<table style="border-collapse: collapse; border: 1px solid black; width: auto; max-width: 520px;">';
    tabela += '<tr><th style="border: 1px solid rgb(187, 187, 187); padding: 10px;">Foto</th><th style="border: 1px solid rgb(187, 187, 187); padding: 10px;">Nome</th><th style="border: 1px solid rgb(187, 187, 187); padding: 10px;">Idade</th><th style="border: 1px solid rgb(187, 187, 187); padding: 10px;">CPF</th></tr>';
    
    const cpfFormatado = formatarCPF(cpf);
    tabela += '<tr>';
    tabela += `<td style="border: 1px solid rgb(187, 187, 187); padding: 10px;"><img src="${usuario.foto}" style="height: 50px;"></td>`;
    tabela += `<td style="border: 1px solid rgb(187, 187, 187); padding: 10px;">${usuario.nome}</td>`;
    tabela += `<td style="border: 1px solid rgb(187, 187, 187); padding: 10px;">${usuario.idade}</td>`;
    tabela += `<td style="border: 1px solid rgb(187, 187, 187); padding: 10px;">${cpfFormatado}</td>`;
    tabela += '</tr>';
    tabela += '</table>';
    tabela += '</div>';
    
    const formulario = `
        <div style="max-width: 520px; margin: 0 auto;">
            <h4>Editar Usuário:</h4>
            <label for="nomeEditar">Nome:</label><br>
            <input type="text" id="nomeEditar" value="${usuario.nome}" style="margin: 5px 0 15px; padding: 8px; width: 100%; box-sizing: border-box;"><br>
            
            <label for="idadeEditar">Idade:</label><br>
            <input type="text" id="idadeEditar" value="${usuario.idade}" maxlength="2" style="margin: 5px 0 15px; padding: 8px; width: 100%; box-sizing: border-box;"><br>
            
            <label for="fotoEditar">Foto (URL):</label><br>
            <input type="text" id="fotoEditar" value="${usuario.foto}" style="margin: 5px 0 15px; padding: 8px; width: 100%; box-sizing: border-box;"><br>
            
            <label for="cpfEditarNovo">CPF:</label><br>
            <input type="text" id="cpfEditarNovo" value="${cpf}" maxlength="11" style="margin: 5px 0 15px; padding: 8px; width: 100%; box-sizing: border-box;"><br>
            
            <button onclick="salvarEdicao('${cpf}')" class="btn btn-success" style="margin-top: 10px;">Salvar Alterações</button>
            <button onclick="editar()" class="btn btn-secondary" style="margin-top: 10px; margin-left: 10px;">Voltar</button>
        </div>
    `;
    
    lista.innerHTML = tabela + formulario;
}

function salvarEdicao(cpfAntigo) {
    const nome = document.getElementById('nomeEditar').value;
    const idade = document.getElementById('idadeEditar').value;
    const foto = document.getElementById('fotoEditar').value;
    const cpfNovo = document.getElementById('cpfEditarNovo').value;
    
    if (nome === "" || idade === "" || foto === "" || cpfNovo === "") {
        alert("Preencha todos os campos!");
        return;
    }
    
    if (cpfNovo !== cpfAntigo && usuarios[cpfNovo]) {
        alert("Este CPF já está cadastrado para outro usuário!");
        return;
    }
    
    if (cpfNovo !== cpfAntigo) {
        delete usuarios[cpfAntigo];
    }
    
    usuarios[cpfNovo] = {
        nome: nome,
        idade: idade,
        foto: foto
    };
    
    const lista = document.getElementById('lista');
    lista.innerHTML = `<p>✅ Usuário editado com sucesso!</p>`;
    setTimeout(() => {
        lista.innerHTML = '';
    }, 2000);
}

