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
Descritivo: Ordenar array de números em ordem crescente.
***************************/
// Array de números
import * as readline from "readline";

export function executarExercicio10(
  rl: readline.Interface,
  menu: () => void
): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 10: Ordenar array");
  console.log("=========================================\n");

  const numeros: number[] = [];

  function pedirNumero(indice: number): void {
    if (indice > 5) {
      console.log("\nArray original:");
      console.log(numeros);

      const numerosOrdenados = [...numeros].sort((a, b) => a - b);

      console.log("\nArray em ordem crescente:");
      console.log(numerosOrdenados);

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