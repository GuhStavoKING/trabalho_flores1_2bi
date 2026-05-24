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
Descritivo: Escreva um programa que leia um número inteiro e informe se ele é par ou ímpar. 
******/

import * as readline from "readline";

export function executarExercicio02(rl: readline.Interface, menu: () => void): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 2: Par ou Ímpar");
  console.log("=========================================\n");

  rl.question("Digite um número inteiro: ", (entrada) => {
    const numero = parseInt(entrada, 10);

    if (isNaN(numero)) {
      console.log("\n[Erro]: Digite um número inteiro válido.");
    } else if (numero % 2 === 0) {
      console.log(`\nO número ${numero} é PAR.`);
    } else {
      console.log(`\nO número ${numero} é ÍMPAR.`);
    }

    rl.question("\nPressione Enter para voltar ao menu...", () => {
      menu();
    });
  });
}