/******
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End 
Professor: José Carlos Flores 
Turma: ADS3B 
Componentes:
            RA:25210888-2 - Natan Ferreira dos Santos
            RA:25013061-2 - Gabriel Henry Pacheco Mormêllo
            RA:25361810-2 - Matheus Gabriel Scariot
            RA:25364386-2 - Gustavo Henrique Ferreira dos Santos
Data: 20 de Maio de 2026
Descritivo: 5 - Escreva um programa que exiba apenas os números pares de 1 a 20. 
******/

import * as readline from "readline";

export function executarExercicio05(rl: readline.Interface, menu: () => void): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 5: Números pares de 1 a 20");
  console.log("=========================================\n");

  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  rl.question("\nPressione Enter para voltar ao menu...", () => {
    menu();
  });
}