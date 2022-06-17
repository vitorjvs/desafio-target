const fileSystem = require("fs");
const faturaDiario = JSON.parse(fileSystem.readFileSync("./dados.json", "utf8"));//lendo o dados.json



function indicesFat(faturaDiario) {
    let menorValor = faturaDiario[0];
    let maiorValor = faturaDiario[0];
    let maiorMedia = [];//dias que o faturamento foi maior que a média mensal

    let mediaMensal = 0; 
    let totalFatura = 0;
    let quantidadeMaiorMedia = 0;

    faturaDiario.forEach(item => {
        if (item.valor != 0) {
            totalFatura += item.valor;
            quantidadeMaiorMedia++;
        }
    })
    mediaMensal = totalFatura / quantidadeMaiorMedia;

    for (let item of faturaDiario) {
        if (item.valor != 0) { //se no dia não houve arrecadação ele nem entra para o calculo

            
            if (item.valor < menorValor.valor) {
                menorValor = item;//resultado do menor valor arrecadado
            }

            if (item.valor > maiorValor.valor) {
                maiorValor = item;// calculo do maior valor
            }

            if (item.valor > mediaMensal) {
                maiorMedia.push(item);
            }

        }
    }

    console.log(`O menor faturamento aconteceu no dia ${menorValor.dia} e o valor arrecadado no dia foi de R$ ${menorValor.valor.toFixed(2)}`)
    console.log(`O maior faturamento aconteceu no dia ${maiorValor.dia} e o valor arrecadado no dia foi de R$ ${maiorValor.valor.toFixed(2)}`)
    console.log(`A média de faturamento foi de R$ ${mediaMensal.toFixed(2)} e tivemos ${maiorMedia.length} dias que faturamos acima da média mensal.`)
}

indicesFat(faturaDiario);