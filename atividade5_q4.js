// questao 4

// Solicita ao usuário que digite o salário inicial
let salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));

// Ano inicial
let ano = 1995;

// Aumento inicial
let aumento = 0.015; // 1.5%

// Loop para calcular o salário a cada ano
while (ano < 2023) { // Vamos considerar até o ano atual (2023)
    salarioInicial *= (1 + aumento); // Aplica o aumento ao salário

    // Aumento para o próximo ano é o dobro do aumento atual
    aumento *= 2;

    ano++;
}

// Exibe o salário atual
console.log(`O salário atual do funcionário em 2023 é: R$ ${salarioInicial.toFixed(2)}`);