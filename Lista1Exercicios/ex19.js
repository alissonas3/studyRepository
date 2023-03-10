/*19) O cardápio de uma lanchonete é o seguinte:
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function cardapio (codigo, quantidade) {

    switch(codigo) {
        case 100:
            return quantidade * 3
        case 200:
            return quantidade * 4
        case 300:
            return quantidade * 5.5
        case 400:
            return quantidade * 7.5
        case 500:
            return quantidade * 3.5
        case 600:
            return quantidade * 2.8
        default:
            return 'Não temos esse item em nosso cardápio.'
    }

}

console.log(cardapio(100, 3))
console.log(cardapio(300, 3))
console.log(cardapio(500, 8))
console.log(cardapio(600, 5))
console.log(cardapio(400, 1))
console.log(cardapio(200, 6))
console.log(cardapio(800, 3))