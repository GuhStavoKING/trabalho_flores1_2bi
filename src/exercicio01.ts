/******
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Componentes:
- 25210888-2 - Natan Ferreira dos Santos
- 25013061-2 - Gabriel Henry Pacheco Mormêllo
- 25361810-2 - Matheus Gabriel Scariot
- 25364386-2 - Gustavo Henrique Ferreira dos Santos
Data: 24 de Maio de 2026
Descritivo: Escreva um programa que calcule a soma de dois números.
******/
import * as readline from "readline";

export function executarExercicio01(rl: readline.Interface, menu: () => void): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 1: Soma de dois números");
  console.log("=========================================\n");

  rl.question("Digite o primeiro número inteiro: ", (entrada1) => {
    const numero1 = parseInt(entrada1, 10);

    rl.question("Digite o segundo número inteiro: ", (entrada2) => {
      const numero2 = parseInt(entrada2, 10);

      if (isNaN(numero1) || isNaN(numero2)) {
        console.log("\n[Erro]: Digite apenas números inteiros válidos.");
      } else {
        console.log(`\nResultado da soma: ${numero1 + numero2}`);
      }

      rl.question("\nPressione Enter para voltar ao menu...", () => {
        menu();
      });
    });
  });
}