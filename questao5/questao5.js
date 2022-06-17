function inverter(letras) {
    let fraseInversa = '';
    for (let i = letras.length - 1; i >= 0; i--){
        fraseInversa += letras[i];
    }
    return fraseInversa
}

console.log(inverter("Testando o programa de inversão de string"))
