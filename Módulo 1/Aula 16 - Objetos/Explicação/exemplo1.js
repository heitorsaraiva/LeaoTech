// um sistema pede o user o valor de 5 produtos.
        // armazene o valor dentro de uma array e 
        // depois percorra o array e mostra a soma dos preoços dios produtos,
        // o produto mais caro e mais barato

        let precos = []
        let preco = null
        for (let i = 0; i < 5 ; i++) {
            preco = Number(prompt(`Digite o valor do produto ${i+1}`))
            precos.push(preco)

        }

        let soma = 0
        // precos - > 5, 10, 15, 55 , 10
        // i = 0
        for (let i = 0; i < 5 ; i++) {
            soma += precos[i] // 0 + 5
        }

        let min = precos[0]
        let max = precos[0]

        for (let i = 0; i < 5; i++) {
            if(min > precos[i]) {
                min = precos[i]
            }

            if (max < precos[i]) {
                max = precos[i]

            }
            
        }

        console.log(`A soma é ${soma}\nO menor preço é ${min}\nO maior preço é ${max}`)