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

Descritivo: Calculadora simples com quatro operações.
*******************************************************************************/

// O código solicita dois números e uma operação matemática.
// Depois realiza o cálculo utilizando switch case.
import * as readline from "readline";

export function executarExercicio09(rl: readline.Interface, menu: () => void): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 9: Calculadora Simples");
  console.log("=========================================\n");

  rl.question("Digite o primeiro número: ", (entrada1) => {
    const numero1 = parseFloat(entrada1);

    rl.question("Digite o segundo número: ", (entrada2) => {
      const numero2 = parseFloat(entrada2);

      rl.question("Digite a operação (+ - * /): ", (operacao) => {
        if (isNaN(numero1) || isNaN(numero2)) {
          console.log("\n[Erro]: Digite números válidos.");
        } else {
          switch (operacao) {
            case "+":
              console.log(`\nResultado: ${numero1 + numero2}`);
              break;
            case "-":
              console.log(`\nResultado: ${numero1 - numero2}`);
              break;
            case "*":
              console.log(`\nResultado: ${numero1 * numero2}`);
              break;
            case "/":
              if (numero2 === 0) {
                console.log("\nNão é possível dividir por zero.");
              } else {
                console.log(`\nResultado: ${numero1 / numero2}`);
              }
              break;
            default:
              console.log("\nOperação inválida.");
          }
        }

        rl.question("\nPressione Enter para voltar ao menu...", () => {
          menu();
        });
      });
    });
  });
}
