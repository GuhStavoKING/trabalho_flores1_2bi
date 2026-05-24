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
Descritivo:  Desenvolva um jogo onde o computador sorteie um número entre 1 e 100, e o usuário 
tente adivinhá-lo. O programa deve dar dicas ("maior" ou "menor") até o acerto.
***************************/
import * as readline from "readline";

export function executarExercicio17(
  rl: readline.Interface,
  menu: () => void,
): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 17: Jogo de Adivinhação");
  console.log("=========================================\n");
  const numeroSorteado = Math.floor(Math.random() * 100) + 1;

  console.log("\n=== Jogo de Adivinhação ===");

  function perguntar(): void {
    rl.question("Digite um número entre 1 e 100: ", (input) => {
      const tentativa = parseInt(input);

      if (isNaN(tentativa)) {
        console.log("Por favor, digite um número válido.");
        perguntar();
        return;
      }
      if (tentativa < numeroSorteado) {
        console.log("O número sorteado é maior.");
        perguntar();
      } else if (tentativa > numeroSorteado) {
        console.log("O número sorteado é menor.");
        perguntar();
      } else {
        console.log("Parabéns! Você acertou o número.");
        rl.question("\nPressione Enter para voltar ao menu...", () => {
          menu();
        });
      }
    });
  }

  perguntar();
}
