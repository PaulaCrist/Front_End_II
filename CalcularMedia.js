//#Calcularmedia
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMedia() {
  rl.question('Digite a nota 1: ', (nota1_input) => {
    const nota1 = parseFloat(nota1_input);
    rl.question('Digite a nota 2: ', (nota2_input) => {
      const nota2 = parseFloat(nota2_input);
      rl.question('Digite a nota 3: ', (nota3_input) => {
        const nota3 = parseFloat(nota3_input);

       
        const media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / (2 + 3 + 5);

        console.log(`A média do aluno é: ${media.toFixed(2)}`);
        rl.close();
      });
    });
  });
}

calcularMedia();