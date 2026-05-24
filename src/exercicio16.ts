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
Descritivo:  Escreva um programa que valide uma senha de acordo com os seguintes critérios:
 Pelo menos 8 caracteres
 Pelo menos uma letra maiúscula
 Pelo menos uma letra minúscula
 Pelo menos um número
***************************/
import * as readline from "readline";
export function executarExercicio16(
  rl: readline.Interface,
  menu: () => void,
): void {
  console.clear();
  console.log("=========================================");
  console.log("EXERCÍCIO 16: Validar Senha");
  console.log("=========================================\n");
  rl.question("Digite uma senha: ", (senha) => {
    const temOitoCaracteres = senha.length >= 8;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);

    if (!temOitoCaracteres) {
      console.log("A senha deve conter pelo menos 8 caracteres.");
    }

    if (!temMaiuscula) {
      console.log("A senha deve conter pelo menos uma letra maiúscula.");
    }

    if (!temMinuscula) {
      console.log("A senha deve conter pelo menos uma letra minúscula.");
    }

    if (!temNumero) {
      console.log("A senha deve conter pelo menos um número.");
    }

    const senhaValida =
      temOitoCaracteres && temMaiuscula && temMinuscula && temNumero;

    if (senhaValida) {
      console.log("Senha válida!");
    } else {
      console.log("Senha inválida!");
    }

    rl.question("\nPressione Enter para voltar ao menu...", () => {
      menu();
    });
  });
}
