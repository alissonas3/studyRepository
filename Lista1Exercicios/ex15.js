/*15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/


function carro (modelos) {

    switch (modelos) {

        case "hatch":
            console.log("Parabéns, compra efetuada com sucesso!")
        break;
        case "sedan":
        case "motocicletas":
        case "caminhonetes":
            console.log("Tem certeza que não prefere este modelo?")
        break;
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui.")
    }
}

carro("hatch")
carro("sedan")
carro("motocicletas")
carro("caminhonetes")
carro("coupé")      