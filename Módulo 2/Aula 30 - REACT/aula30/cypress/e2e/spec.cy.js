import { describe, it, expect } from 'vitest'
import {
    validarProduto,
    criarProduto,
    adicionarProduto,
    removerProduto,
    toggleAtivoProduto
} from './produto.utils'

describe('validarProduto', () => {

    it('deve retornar null quando todos os campos são válidos', () => {
        const dados = { nome: 'Notebook', preco: 2599.90, descricao: 'Notebook Dell i7', quantidade: 5 }
        expect(validarProduto(dados)).toBeNull()
    })

    it('deve retornar erro quando o nome está vazio', () => {
        const dados = { nome: '', preco: 100, descricao: 'Desc', quantidade: 1 }
        expect(validarProduto(dados)).toBe('Preencha todos os campos obrigatórios!')
    })

    it('deve retornar erro quando o nome é apenas espaços', () => {
        const dados = { nome: '   ', preco: 100, descricao: 'Desc', quantidade: 1 }
        expect(validarProduto(dados)).toBe('Preencha todos os campos obrigatórios!')
    })

    it('deve retornar erro quando o preço está vazio', () => {
        const dados = { nome: 'Produto', preco: '', descricao: 'Desc', quantidade: 1 }
        expect(validarProduto(dados)).toBe('Preencha todos os campos obrigatórios!')
    })

    it('deve retornar erro quando o preço é zero', () => {
        const dados = { nome: 'Produto', preco: 0, descricao: 'Desc', quantidade: 1 }
        expect(validarProduto(dados)).toBe('O preço deve ser maior que zero!')
    })

    it('deve retornar erro quando o preço é negativo', () => {
        const dados = { nome: 'Produto', preco: -10, descricao: 'Desc', quantidade: 1 }
        expect(validarProduto(dados)).toBe('O preço deve ser maior que zero!')
    })

    it('deve retornar erro quando a descrição está vazia', () => {
        const dados = { nome: 'Produto', preco: 100, descricao: '', quantidade: 1 }
        expect(validarProduto(dados)).toBe('Preencha todos os campos obrigatórios!')
    })

    it('deve retornar erro quando a quantidade está vazia', () => {
        const dados = { nome: 'Produto', preco: 100, descricao: 'Desc', quantidade: '' }
        expect(validarProduto(dados)).toBe('Preencha todos os campos obrigatórios!')
    })

    it('deve retornar erro quando a quantidade é negativa', () => {
        const dados = { nome: 'Produto', preco: 100, descricao: 'Desc', quantidade: -1 }
        expect(validarProduto(dados)).toBe('A quantidade não pode ser negativa!')
    })

    it('deve aceitar quantidade zero (produto sem estoque)', () => {
        const dados = { nome: 'Produto', preco: 100, descricao: 'Desc', quantidade: 0 }
        expect(validarProduto(dados)).toBeNull()
    })
})

describe('criarProduto', () => {

    it('deve criar produto com todos os campos corretos', () => {
        const dados = { nome: ' Notebook ', preco: '2599.90', descricao: ' Dell i7 ', quantidade: '5', ativo: true }
        const produto = criarProduto(dados)

        expect(produto.nome).toBe('Notebook')
        expect(produto.preco).toBe(2599.90)
        expect(produto.descricao).toBe('Dell i7')
        expect(produto.quantidade).toBe(5)
        expect(produto.ativo).toBe(true)
        expect(produto.id).toBeDefined()
    })

    it('deve criar produto com ativo = false quando informado', () => {
        const dados = { nome: 'Mouse', preco: '50', descricao: 'Mouse sem fio', quantidade: '10', ativo: false }
        const produto = criarProduto(dados)
        expect(produto.ativo).toBe(false)
    })

    it('deve definir ativo = true por padrão se não informado', () => {
        const dados = { nome: 'Teclado', preco: '150', descricao: 'Teclado mecânico', quantidade: '3' }
        const produto = criarProduto(dados)
        expect(produto.ativo).toBe(true)
    })

    it('deve converter preço de string para número', () => {
        const dados = { nome: 'Monitor', preco: '899.99', descricao: 'Full HD', quantidade: '2' }
        const produto = criarProduto(dados)
        expect(typeof produto.preco).toBe('number')
        expect(produto.preco).toBe(899.99)
    })

    it('deve converter quantidade de string para inteiro', () => {
        const dados = { nome: 'Monitor', preco: '899', descricao: 'Full HD', quantidade: '2' }
        const produto = criarProduto(dados)
        expect(typeof produto.quantidade).toBe('number')
        expect(Number.isInteger(produto.quantidade)).toBe(true)
    })
})

describe('adicionarProduto', () => {

    it('deve adicionar produto em uma lista vazia', () => {
        const produto = { id: 1, nome: 'Notebook', preco: 2599, descricao: 'Dell', quantidade: 5, ativo: true }
        const resultado = adicionarProduto([], produto)
        expect(resultado).toHaveLength(1)
        expect(resultado[0]).toEqual(produto)
    })

    it('deve adicionar produto em uma lista existente sem alterar os anteriores', () => {
        const lista = [
            { id: 1, nome: 'Notebook', preco: 2599, descricao: 'Dell', quantidade: 5, ativo: true }
        ]
        const novoProduto = { id: 2, nome: 'Mouse', preco: 50, descricao: 'Sem fio', quantidade: 10, ativo: true }
        const resultado = adicionarProduto(lista, novoProduto)
        expect(resultado).toHaveLength(2)
        expect(resultado[0].nome).toBe('Notebook')
        expect(resultado[1].nome).toBe('Mouse')
    })

    it('não deve mutar o array original', () => {
        const lista = [{ id: 1, nome: 'Notebook', preco: 2599, descricao: 'Dell', quantidade: 5, ativo: true }]
        const novoProduto = { id: 2, nome: 'Mouse', preco: 50, descricao: 'Sem fio', quantidade: 10, ativo: true }
        adicionarProduto(lista, novoProduto)
        expect(lista).toHaveLength(1)
    })
})


describe('removerProduto', () => {

    it('deve remover o produto com o id informado', () => {
        const lista = [
            { id: 1, nome: 'Notebook' },
            { id: 2, nome: 'Mouse' }
        ]
        const resultado = removerProduto(lista, 1)
        expect(resultado).toHaveLength(1)
        expect(resultado[0].nome).toBe('Mouse')
    })

    it('não deve alterar a lista se o id não existir', () => {
        const lista = [{ id: 1, nome: 'Notebook' }]
        const resultado = removerProduto(lista, 99)
        expect(resultado).toHaveLength(1)
    })

    it('não deve mutar o array original', () => {
        const lista = [{ id: 1, nome: 'Notebook' }, { id: 2, nome: 'Mouse' }]
        removerProduto(lista, 1)
        expect(lista).toHaveLength(2)
    })
})


describe('toggleAtivoProduto', () => {

    it('deve alternar ativo de true para false', () => {
        const lista = [{ id: 1, nome: 'Notebook', ativo: true }]
        const resultado = toggleAtivoProduto(lista, 1)
        expect(resultado[0].ativo).toBe(false)
    })

    it('deve alternar ativo de false para true', () => {
        const lista = [{ id: 1, nome: 'Notebook', ativo: false }]
        const resultado = toggleAtivoProduto(lista, 1)
        expect(resultado[0].ativo).toBe(true)
    })

    it('não deve alterar outros produtos da lista', () => {
        const lista = [
            { id: 1, nome: 'Notebook', ativo: true },
            { id: 2, nome: 'Mouse', ativo: true }
        ]
        const resultado = toggleAtivoProduto(lista, 1)
        expect(resultado[1].ativo).toBe(true)
    })
})