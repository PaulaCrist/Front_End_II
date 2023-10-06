// questao 3

let quantidadeNumeros = parseInt(prompt("Digite a quantidade de números:"));

// Inicializa as variáveis com valores iniciais
let menorValor = Infinity;
let maiorValor = -Infinity;
let somaValores = 0;

// Loop para inserir os números e realizar os cálculos
for (let i = 1; i <= quantidadeNumeros; i++) {
    let numero = parseFloat(prompt(`Digite o número ${i}:`));

    // Verifica e atualiza o menor valor
    if (numero < menorValor) {
        menorValor = numero;
    }

    // Verifica e atualiza o maior valor
    if (numero > maiorValor) {
        maiorValor = numero;
    }

    // Soma os valores
    somaValores += numero;
}

// Exibe os resultados
console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);
console.log(`Soma dos valores: ${somaValores}`);