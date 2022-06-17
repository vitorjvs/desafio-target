var infoNum = 9; //trocar esse número para diferentes resultados
var num = infoNum; //será usado no parâmetro
var sequenciaFibo = [];

function fibonacci(num){
    
    if(num < 2) {
        return num
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

for (let i = 0; i < infoNum+2; i++) {
    sequenciaFibo[i] =  fibonacci(i); //comparação número informado com a sequência de fibo calculada
    if(sequenciaFibo[i] === infoNum) {

        return console.log(`Você informou o número ${infoNum}, ele está na sequência de Fibonacci` )

    }
}

return console.log(`Você informou o número ${infoNum}, ele não está na sequência de Fibonacci`);















var infoNum = 9; //trocar esse número para diferentes resultados
var num = infoNum; //será usado no parâmetro
var sequenciaFibo = [];

function fibonacci(num){
    
    if(num < 2) {
        return num
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

for (let i = 0; i < infoNum+2; i++) {
    sequenciaFibo[i] =  fibonacci(i); //comparação número informado com a sequência de fibo calculada
    if(sequenciaFibo[i] === infoNum) {

        return console.log(`Você informou o número ${infoNum}, ele está na sequência de Fibonacci` )

    }
    return console.log(`Você informou o número ${infoNum}, ele não está na sequência de Fibonacci`);
}





