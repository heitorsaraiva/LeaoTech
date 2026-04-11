// 2. Compras
let valorcompra = Number(prompt(`Digite o valor da compra:`))
let numerodaparcela = parent(prompt(`Digite o valor da parcela:`))
let parcela = valorcompra / numerodaparcela


while ((numerodaparcela) <= 0 || (numerodaparcela) > 12){
    numerodaparcela = parseInt(prompt(`Digite o numero de parcelas`))
}
for( let i = 1; i <= numerodaparcela; i++){
    console.log(`Parcela ${i} = ${parcela.toFixed(2)}`)
}