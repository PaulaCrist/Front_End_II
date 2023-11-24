//#Desenvolva um programa que solicita altura e quantidade de pessoas de um gênero
let qtdm = 0;
let maiorAltura = Number.NEGATIVE_INFINITY;
let menorAltura = Number.POSITIVE_INFINITY;
let somaAltH = 0;

for (let i = 0; i < 15; i++) {
    let altura = parseFloat(prompt("Informe a altura da pessoa: "));
    let genero = prompt("Informe o gênero da pessoa (M/F): ").toUpperCase();

    if (altura > maiorAltura) {
        maiorAltura = altura;
    }

    if (altura < menorAltura) {
        menorAltura = altura;
    }

    if (genero === "M") {
        somaAltH += altura;
    } else if (genero === "F") {
        qtdm++;
    }
}

let mediaHom = somaAltH / qtdm;

console.log(`A maior altura é ${maiorAltura}m`);
console.log(`A menor altura é ${menorAltura}m`);
console.log(`A média de altura dos homens é ${mediaHom}m`);
console.log(`A quantidade de mulheres é ${qtdm}`);
