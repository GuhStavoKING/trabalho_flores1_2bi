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
Descritivo: classe Pessoa 
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
    console.log("\nDados da pessoa:");
    console.log("Nome:", this.nome);
    console.log("Idade:", this.idade);
  }
}

export function executarExercicio11(
  rl: readline.Interface,
  menu: () => void
): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 11: Classe Pessoa");
  console.log("=========================================\n");

  rl.question("Digite o nome da pessoa: ", (nome) => {
    rl.question("Digite a idade da pessoa: ", (entradaIdade) => {
      const idade = parseInt(entradaIdade, 10);

      if (nome.trim() === "" || isNaN(idade) || idade < 0) {
        console.log("\n[Erro]: Nome ou idade inválidos.");
      } else {
        const pessoa = new Pessoa(nome, idade);
        pessoa.exibirDados();
      }

      rl.question("\nPressione Enter para voltar ao menu...", () => {
        menu();
      });
    });
  });
}