const readline = require("readline-sync");

console.log(`========================================
         SISTEMA DE ALUNOS
========================================`)

let alunos = [];
let executando = true;

while (executando) {

    console.log("\n==============================");
    console.log("      SISTEMA DE ALUNOS");
    console.log("==============================");
    console.log("1 - Cadastrar aluno");
    console.log("2 - Listar alunos");
    console.log("3 - Consultar aluno");
    console.log("4 - Ver situação dos alunos");
    console.log("5 - Sair");
    console.log("==============================");

    let opcao = readline.question("Escolha uma opcão: ");

    switch (opcao) {

        case "1":

            console.log("\n--- CADASTRO DE ALUNO ---");

            let nome = readline.question("Nome: ");
            let idade = parseInt(readline.question("Idade: "));
            let nota = parseFloat(readline.question("Nota: "));

            if (nota > 10 || nota < 0) {
                console.log('Nota inválida!')
                break
            }

            let aluno = {
                nome,
                idade,
                nota
            }

            alunos.push(aluno);
            break;

        case "2":

            console.log("\n--- ALUNOS CADASTRADOS ---");

            if (alunos.length === 0) {
                console.log('Não possui alunos cadastrados!');
            } else {
                for (let contador = 0; contador < alunos.length; contador++) {
                    console.log(alunos[contador].nome);
                    console.log(alunos[contador].idade);
                    console.log(alunos[contador].nota);
                }
            }
            break;

        case "3":

            console.log("\n--- CONSULTAR ALUNO ---");

            let nomeBusca = readline.question("Digite o nome: ");
            let alunoEncontrado = false;

            for (let contador = 0; contador < alunos.length; contador++) {
                if (nomeBusca === alunos[contador].nome) {
                    console.log(alunos[contador].nome);
                    console.log(alunos[contador].idade);
                    console.log(alunos[contador].nota);
                }
            }
            if (!alunoEncontrado) {
                console.log("Aluno não cadastrado!");
            }
    }
}