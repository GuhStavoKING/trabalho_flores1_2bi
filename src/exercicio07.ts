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

Descritivo: Programa que encontra o maior número em um array.
*******************************************************************************/

// O código solicita 5 números ao usuário,
// armazena em um array e identifica o maior valor.

import * as readline from "readline";

export function executarExercicio07(rl: readline.Interface, menu: () => void): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 7: Maior número em um array");
  console.log("=========================================\n");

  const numeros: number[] = [];

  function pedirNumero(indice: number): void {
    if (indice > 5) {
      let maiorNumero = numeros[0];

      for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
          maiorNumero = numeros[i];
        }
      }

      console.log(`\nO maior número do array é: ${maiorNumero}`);

      rl.question("\nPressione Enter para voltar ao menu...", () => {
        menu();
      });

      return;
    }

    rl.question(`Digite o ${indice}º número: `, (entrada) => {
      const numero = parseFloat(entrada);

      if (isNaN(numero)) {
        console.log("[Erro]: Digite um número válido.");
        pedirNumero(indice);
      } else {
        numeros.push(numero);
        pedirNumero(indice + 1);
      }
    });
  }

  pedirNumero(1);
}
