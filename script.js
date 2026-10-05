const readline = require("readline-sync");

// ========================================
// SISTEMA DE ALUNOS
// ========================================

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

    let opcao = readline.question("Escolha uma opcao: ");

    switch (opcao) {

        // --------------------------------
        // CADASTRAR
        // --------------------------------
        case "1":

            console.log("\n--- CADASTRO DE ALUNO ---");

            let nome = readline.question("Nome: ");
            let idade = Number(readline.question("Idade: "));
            let nota = parseFloat(readline.question("Nota: "));

            // TODO:
            // Verificar se a nota está entre 0 e 10

            if (nota >= 0 && nota <= 10) {
                // TODO:
                // Criar um objeto aluno
                let aluno = {
                    nome: nome,
                    idade: idade,
                    nota: nota
                };
                // TODO:
                // Adicionar o aluno ao array
                alunos.push(aluno);
                console.log("Aluno cadastrado com sucesso!");

            } else {
                console.log("Nota inválida \n Insira uma nota de 0 á 10");
            }
            break;


        // --------------------------------
        // LISTAR
        // --------------------------------
        case "2":

            console.log("\n--- ALUNOS CADASTRADOS ---");

            // TODO:
            // Verificar se existem alunos cadastrados
            if (alunos.length !== 0) {
                // TODO:
                // Percorrer o array utilizando FOR
                for (let i = 0; i < alunos.length; i++) {
                    // Mostrar:
                    // Nome
                    // Idade
                    // Nota
                    console.log("================");
                    console.log('id: ' + (i + 1));
                    console.log('Nome: ' + alunos[i].nome);
                    console.log('Idade: ' + alunos[i].idade);
                    console.log('Nota: ' + alunos[i].nota);
                    console.log("================");
                }

            } else {
                console.log('Não existe alunos cadastrados')
            }


            break;


        // --------------------------------
        // CONSULTAR
        // --------------------------------
        case "3":

            console.log("\n--- CONSULTAR ALUNO ---");

            let nomeBusca = readline.question("Digite o nome: ").toLowerCase;

            let alunoEncontrado = false;

            // TODO:
            // Percorrer o array procurando
            // pelo nome informado.
            for (let i = 0; i < alunos.length; i++) {
                if (alunos[i].nome.toLowerCase() === nomeBusca) {
                    console.log('Nome: ' + alunos[i].nome);
                    console.log('Idade: ' + alunos[i].idade);
                    console.log('Nota: ' + alunos[i].nota);
                }
            }
            // Se encontrar:
            // - Mostrar os dados
            // - Alterar alunoEncontrado para true
            // - Utilizar BREAK


            if (!alunoEncontrado) {
                console.log("Aluno nao encontrado.");
            }

            break;


        // --------------------------------
        // SITUAÇÃO
        // --------------------------------
        case "4":

            console.log("\n--- SITUACAO DOS ALUNOS ---");

            for(let i = 0; i < alunos.length; i++) {
                let situacao;

                if(alunos[i].nota >= 7) {
                    situacao = 'Aprovado';
                } else if (alunos[i].nota >= 5) {
                    situacao = 'Recuperação;'
                } else {
                    situacao = 'Reprovado';
                }

                console.log(alunos[i].nome + ' - Nota: ' + alunos[i].nota + ' - ' + situacao)
            }
            if(alunos.length !== 0) {
                
            } else {
                console.log('Não existe aluno cadastrado');
            }


            // TODO:
            // Percorrer todos os alunos


            // Se nota >= 7
            //    Aprovado
            //
            // Senão se nota >= 5
            //    Recuperacao
            //
            // Senão
            //    Reprovado


            break;


        // --------------------------------
        // SAIR
        // --------------------------------
        case "5":

            console.log("\nSistema encerrado!");

            executando = false;

            break;


        // --------------------------------
        // OPÇÃO INVÁLIDA
        // --------------------------------
        default:

            console.log("\nOpcao invalida!");

            break;
    }
}



