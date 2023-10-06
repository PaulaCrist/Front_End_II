// questao 7

var alunos = [
    { nome: "Maria Joaquinha", notas: [8, 7.5, 9], curso: "Sistemas para Internet" },
    { nome: "João Ricardo", notas: [8, 8.5, 5], curso: "Direito" },
    { nome: "José Henrique", notas: [4, 10, 7], curso: "Administração" },
    { nome: "Pedro da Silva", notas: [6, 7.6, 7.5], curso: "Sistemas para Internet" },
    { nome: "Silvana Morais", notas: [6, 7.5, 9.5], curso: "Sistemas de Informação" },
    { nome: "Patricia Castro", notas: [1, 9, 10], curso: "Arquitetura" },
    { nome: "Joana Ribeiro", notas: [8, 9, 9], curso: "Contabilidade" },
    { nome: "Rafael Rocha", notas: [4, 4, 9], curso: "Sistemas para Internet" },
    { nome: "Gustavo Henrique", notas: [8, 7.5, 5], curso: "Sistemas para Internet" }
];

function imprimirAprovados(listaAlunos) {
    for (let aluno of listaAlunos) {
        // Calcula a média das notas do aluno
        let media = aluno.notas.reduce((soma, nota) => soma + nota, 0) / aluno.notas.length;

        // Verifica se o aluno teve média maior ou igual a 7
        if (media >= 7) {
            console.log(`Nome: ${aluno.nome}, Média Aritmética: ${media.toFixed(2)}, Curso: ${aluno.curso}`);
        }
    }
}

// Chamada da função com a lista de alunos
imprimirAprovados(alunos);