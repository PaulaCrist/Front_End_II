// questao 6

function calcularMontanteInvestimento(capitalInicial, taxaJuros, tempoMeses) {
    // Converte a taxa de juros de percentual para decimal
    taxaJuros = taxaJuros / 100;

    // Calcula o montante usando a fórmula M = C * (1+i)^t
    let montante = capitalInicial * Math.pow((1 + taxaJuros), tempoMeses);

    // Arredonda o montante para duas casas decimais
    montante = parseFloat(montante.toFixed(2));

    return montante;
}

// Exemplo de uso da função
let capitalInicial = parseFloat(prompt("Digite o capital inicial investido:"));
let taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal em percentual:"));
let tempoMeses = parseInt(prompt("Digite o tempo do investimento em meses:"));

let resultado = calcularMontanteInvestimento(capitalInicial, taxaJuros, tempoMeses);

console.log(`O montante do investimento é: R$ ${resultado}`);