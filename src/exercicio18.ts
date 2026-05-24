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
Descritivo:  Desenvolva um programa que conte quantas palavras existem em uma string fornecida 
pelo usuário.
***************************/
import * as readline from "readline";

export function executarExercicio18(
  rl: readline.Interface,
  menu: () => void,
): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 18: Contar Palavras");
  console.log("=========================================\n");
  rl.question("Digite uma frase: ", (frase) => {
    const fraseLimpa = frase.trim();

    if (fraseLimpa === "") {
      console.log("A frase possui 0 palavras.");
      menu();
      return;
    }

    const palavras = fraseLimpa.split(/\s+/);

    console.log(`A frase possui ${palavras.length} palavra(s).`);

    rl.question("\nPressione Enter para voltar ao menu...", () => {
      menu();
    });
  });
}
