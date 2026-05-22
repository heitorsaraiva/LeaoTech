import React, { useState } from 'react'
import './CadastroProdutos.css'
import { useNavigate } from 'react-router-dom'

const CadastroProdutos = () => {

    const navigate = useNavigate()
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))

    // Redireciona se não for admin
    if (!usuarioLogado || usuarioLogado.login !== 'admin') {
        return (
            <div className='container'>
                <div className='row justify-content-center align-items-center' style={{ height: '100vh' }}>
                    <div className='col-5 text-center'>
                        <i style={{ fontSize: '80px' }} className="bi bi-shield-lock text-danger"></i>
                        <h4 className='mt-3'>Acesso restrito ao administrador</h4>
                        <button className='btn btn-primary mt-3' onClick={() => navigate('/login')}>
                            Voltar ao Login
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    const [produtos, setProdutos] = useState([])

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [descricao, setDescricao] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [ativo, setAtivo] = useState(true)
    const [mensagem, setMensagem] = useState({ texto: '', tipo: '' })

    const [showModalCadastro, setShowModalCadastro] = useState(false)
    const [showModalLista, setShowModalLista] = useState(false)

    function limparFormulario() {
        setNome('')
        setPreco('')
        setDescricao('')
        setQuantidade('')
        setAtivo(true)
        setMensagem({ texto: '', tipo: '' })
    }

    function abrirModalCadastro() {
        limparFormulario()
        setShowModalCadastro(true)
    }

    function fecharModalCadastro() {
        setShowModalCadastro(false)
        limparFormulario()
    }

    function cadastrarProduto() {
        if (nome.trim() === '' || preco === '' || descricao.trim() === '' || quantidade === '') {
            setMensagem({ texto: 'Preencha todos os campos obrigatórios!', tipo: 'danger' })
            return
        }
        if (parseFloat(preco) <= 0) {
            setMensagem({ texto: 'O preço deve ser maior que zero!', tipo: 'danger' })
            return
        }
        if (parseInt(quantidade) < 0) {
            setMensagem({ texto: 'A quantidade não pode ser negativa!', tipo: 'danger' })
            return
        }

        const novoProduto = {
            id: Date.now(),
            nome: nome.trim(),
            preco: parseFloat(preco),
            descricao: descricao.trim(),
            quantidade: parseInt(quantidade),
            ativo: ativo
        }

        setProdutos(prev => [...prev, novoProduto])
        setMensagem({ texto: `Produto "${novoProduto.nome}" cadastrado com sucesso!`, tipo: 'success' })
        setNome('')
        setPreco('')
        setDescricao('')
        setQuantidade('')
        setAtivo(true)
    }

    function excluirProduto(id) {
        setProdutos(prev => prev.filter(p => p.id !== id))
    }

    function toggleAtivo(id) {
        setProdutos(prev =>
            prev.map(p => p.id === id ? { ...p, ativo: !p.ativo } : p)
        )
    }

    return (
        <>
            <div className='container'>
                <div id='area-cadastro' className='row justify-content-center align-items-center'>
                    <div className='col-6 text-center'>
                        <div className='card-painel border border-2 rounded p-4'>

                            <div className='mb-4'>
                                <i style={{ fontSize: '75px' }} className="bi bi-box-seam text-primary"></i>
                                <h4 className='mt-2'>Painel do Administrador</h4>
                                <p className='text-muted mb-0'>
                                    Bem-vindo, <strong>{usuarioLogado.nome}</strong>!
                                </p>
                            </div>

                            <div className='d-flex gap-3 justify-content-center flex-wrap'>
                                <button
                                    className='btn btn-primary btn-lg'
                                    onClick={abrirModalCadastro}
                                >
                                    <i className="bi bi-plus-circle me-2"></i>
                                    Cadastrar Produto
                                </button>

                                <button
                                    className='btn btn-outline-dark btn-lg'
                                    onClick={() => setShowModalLista(true)}
                                >
                                    <i className="bi bi-list-ul me-2"></i>
                                    Listar Produtos
                                    {produtos.length > 0 && (
                                        <span className='badge bg-dark ms-2'>{produtos.length}</span>
                                    )}
                                </button>
                            </div>

                            <div className='mt-4'>
                                <button
                                    className='btn btn-link text-muted btn-sm'
                                    onClick={() => {
                                        localStorage.removeItem('usuarioLogado')
                                        navigate('/login')
                                    }}
                                >
                                    <i className="bi bi-box-arrow-left me-1"></i>
                                    Sair
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL CADASTRAR */}
            {showModalCadastro && (
                <div
                    className='modal fade show d-block'
                    tabIndex='-1'
                    style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
                    onClick={(e) => { if (e.target === e.currentTarget) fecharModalCadastro() }}
                >
                    <div className='modal-dialog modal-dialog-centered'>
                        <div className='modal-content'>

                            <div className='modal-header'>
                                <h5 className='modal-title'>
                                    <i className="bi bi-plus-circle me-2 text-primary"></i>
                                    Cadastrar Produto
                                </h5>
                                <button type='button' className='btn-close' onClick={fecharModalCadastro} />
                            </div>

                            <div className='modal-body'>
                                <div className='mb-3'>
                                    <label className='form-label fw-semibold'>Nome <span className='text-danger'>*</span></label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Ex: Notebook Dell'
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label fw-semibold'>Preço (R$) <span className='text-danger'>*</span></label>
                                    <input
                                        type='number'
                                        className='form-control'
                                        placeholder='Ex: 2599.90'
                                        min='0'
                                        step='0.01'
                                        value={preco}
                                        onChange={(e) => setPreco(e.target.value)}
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label fw-semibold'>Descrição <span className='text-danger'>*</span></label>
                                    <textarea
                                        className='form-control'
                                        placeholder='Descreva o produto...'
                                        rows={3}
                                        value={descricao}
                                        onChange={(e) => setDescricao(e.target.value)}
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label fw-semibold'>Quantidade <span className='text-danger'>*</span></label>
                                    <input
                                        type='number'
                                        className='form-control'
                                        placeholder='Ex: 50'
                                        min='0'
                                        value={quantidade}
                                        onChange={(e) => setQuantidade(e.target.value)}
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label fw-semibold'>Status</label>
                                    <div className='d-flex gap-3'>
                                        <div className='form-check'>
                                            <input
                                                className='form-check-input'
                                                type='radio'
                                                name='ativo'
                                                id='ativo-sim'
                                                checked={ativo === true}
                                                onChange={() => setAtivo(true)}
                                            />
                                            <label className='form-check-label' htmlFor='ativo-sim'>
                                                <span className='badge bg-success'>Ativo</span>
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input
                                                className='form-check-input'
                                                type='radio'
                                                name='ativo'
                                                id='ativo-nao'
                                                checked={ativo === false}
                                                onChange={() => setAtivo(false)}
                                            />
                                            <label className='form-check-label' htmlFor='ativo-nao'>
                                                <span className='badge bg-secondary'>Inativo</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {mensagem.texto && (
                                    <div className={`alert alert-${mensagem.tipo} py-2 mb-0`}>
                                        <i className={`bi ${mensagem.tipo === 'success' ? 'bi-check-circle' : 'bi-exclamation-triangle'} me-2`}></i>
                                        {mensagem.texto}
                                    </div>
                                )}
                            </div>

                            <div className='modal-footer'>
                                <button className='btn btn-secondary' onClick={fecharModalCadastro}>Fechar</button>
                                <button className='btn btn-primary' onClick={cadastrarProduto}>
                                    <i className="bi bi-check-lg me-1"></i>
                                    Salvar Produto
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}

            {/* MODAL LISTAR */}
            {showModalLista && (
                <div
                    className='modal fade show d-block'
                    tabIndex='-1'
                    style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
                    onClick={(e) => { if (e.target === e.currentTarget) setShowModalLista(false) }}
                >
                    <div className='modal-dialog modal-dialog-centered modal-xl'>
                        <div className='modal-content'>

                            <div className='modal-header'>
                                <h5 className='modal-title'>
                                    <i className="bi bi-list-ul me-2"></i>
                                    Produtos Cadastrados
                                </h5>
                                <button type='button' className='btn-close' onClick={() => setShowModalLista(false)} />
                            </div>

                            <div className='modal-body'>
                                {produtos.length === 0 ? (
                                    <div className='text-center text-muted py-5'>
                                        <i style={{ fontSize: '55px' }} className="bi bi-inbox"></i>
                                        <p className='mt-3 mb-0'>Nenhum produto cadastrado ainda.</p>
                                        <small>Use o botão "Cadastrar Produto" para adicionar.</small>
                                    </div>
                                ) : (
                                    <div className='table-responsive'>
                                        <table className='table table-hover align-middle mb-0'>
                                            <thead className='table-dark'>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Nome</th>
                                                    <th>Descrição</th>
                                                    <th>Preço</th>
                                                    <th>Qtd</th>
                                                    <th>Status</th>
                                                    <th>Ações</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {produtos.map((produto, index) => (
                                                    <tr key={produto.id}>
                                                        <td className='text-muted'>{index + 1}</td>
                                                        <td className='fw-semibold'>{produto.nome}</td>
                                                        <td className='text-muted' style={{ maxWidth: '200px' }}>
                                                            <small>{produto.descricao}</small>
                                                        </td>
                                                        <td>R$ {produto.preco.toFixed(2)}</td>
                                                        <td>{produto.quantidade}</td>
                                                        <td>
                                                            <button
                                                                className={`badge border-0 btn btn-sm ${produto.ativo ? 'bg-success' : 'bg-secondary'}`}
                                                                onClick={() => toggleAtivo(produto.id)}
                                                                title='Clique para alternar'
                                                            >
                                                                {produto.ativo ? 'Ativo' : 'Inativo'}
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className='btn btn-danger btn-sm'
                                                                onClick={() => excluirProduto(produto.id)}
                                                            >
                                                                <i className="bi bi-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>

                            <div className='modal-footer'>
                                <span className='text-muted me-auto'>
                                    <i className="bi bi-box-seam me-1"></i>
                                    {produtos.length} produto(s) cadastrado(s)
                                </span>
                                <button className='btn btn-secondary' onClick={() => setShowModalLista(false)}>Fechar</button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CadastroProdutos