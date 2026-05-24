/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B

Componentes:
RA:25210888-2 - Natan Ferreira dos Santos
RA:25013061-2 - Gabriel Henry Pacheco Mormêllo
RA:25361810-2 - Matheus Gabriel Scariot
RA:25364386-2 - Gustavo Henrique Ferreira dos Santos

Data: 24 de Maio de 2026

Descritivo: Programa que conta a quantidade de vogais em uma string.
*******************************************************************************/

// O código percorre a frase digitada pelo usuário
// e verifica quantas vogais existem na string

import * as readline from "readline";

export function executarExercicio08(rl: readline.Interface, menu: () => void): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 8: Contador de Vogais");
  console.log("=========================================\n");

  rl.question("Digite uma frase: ", (frase) => {
    let contador = 0;

    for (const letra of frase.toLowerCase()) {
      if (
        letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u"
      ) {
        contador++;
      }
    }

    console.log(`\nQuantidade de vogais: ${contador}`);

    rl.question("\nPressione Enter para voltar ao menu...", () => {
      menu();
    });
  });
}
