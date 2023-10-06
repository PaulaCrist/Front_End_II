// questao 5

function calcularAreaEPerimetroCirculo(raio) {
    // Calcula a área do círculo: A = π * r^2
    let area = Math.PI * Math.pow(raio, 2);

    // Calcula o perímetro do círculo: P = 2 * π * r
    let perimetro = 2 * Math.PI * raio;

    // Retorna um objeto contendo a área e o perímetro
    return {
        area: area,
        perimetro: perimetro
    };
}

// Exemplo de uso da função
let raioCirculo = parseFloat(prompt("Digite o raio do círculo:"));
let resultado = calcularAreaEPerimetroCirculo(raioCirculo);

console.log(`Área do círculo: ${resultado.area.toFixed(2)}`);
console.log(`Perímetro do círculo: ${resultado.perimetro.toFixed(2)}`);