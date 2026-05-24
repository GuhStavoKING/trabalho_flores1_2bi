/**************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Data: 24 de Maio de 2026

Componentes:
            RA:25210888-2 - Natan Ferreira dos Santos
            RA:25013061-2 - Gabriel Henry Pacheco Mormêllo
            RA:25361810-2 - Matheus Gabriel Scariot
            RA:25364386-2 - Gustavo Henrique Ferreira dos Santos
Descritivo: Classe aluno
***************************/
import * as readline from "readline";

class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  exibirDados(): void {
    console.log("Nome:", this.nome);
    console.log("Idade:", this.idade);
  }
}

class Aluno extends Pessoa {
  matricula: string;

  constructor(nome: string, idade: number, matricula: string) {
    super(nome, idade);
    this.matricula = matricula;
  }

  exibirDadosAluno(): void {
    console.log("\nDados do aluno:");
    this.exibirDados();
    console.log("Matrícula:", this.matricula);
  }
}

export function executarExercicio12(
  rl: readline.Interface,
  menu: () => void
): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 12: Herança com Classe Aluno");
  console.log("=========================================\n");

  rl.question("Digite o nome do aluno: ", (nome) => {
    rl.question("Digite a idade do aluno: ", (entradaIdade) => {
      const idade = parseInt(entradaIdade, 10);

      rl.question("Digite a matrícula do aluno: ", (matricula) => {
        if (
          nome.trim() === "" ||
          isNaN(idade) ||
          idade < 0 ||
          matricula.trim() === ""
        ) {
          console.log("\n[Erro]: Dados inválidos.");
        } else {
          const aluno = new Aluno(nome, idade, matricula);
          aluno.exibirDadosAluno();
        }

        rl.question("\nPressione Enter para voltar ao menu...", () => {
          menu();
        });
      });
    });
  });
}