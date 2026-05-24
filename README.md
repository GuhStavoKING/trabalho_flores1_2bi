# 📘 Trabalho Prático 1 — TypeScript

Projeto desenvolvido para a disciplina de **Programação Front-End** do curso de **Análise e Desenvolvimento de Sistemas**, com foco na prática de lógica de programação, orientação a objetos e desenvolvimento utilizando **TypeScript**.

---

# 📚 Informações do Projeto

| Informação               | Detalhes                              |
| ------------------------ | ------------------------------------- |
| **Curso**                | Análise e Desenvolvimento de Sistemas |
| **Disciplina**           | Programação Front-End                 |
| **Professor**            | José Carlos Domingues Flores          |
| **Turma**                | ADS3B                                 |
| **Tecnologia Principal** | TypeScript                            |
| **Ambiente de Execução** | Node.js                               |

---

# 🎯 Objetivo

O objetivo deste trabalho é desenvolver um sistema em **TypeScript puro**, executado via terminal, contendo exercícios práticos que abordam conceitos fundamentais da programação, como:

* Estruturas condicionais
* Estruturas de repetição
* Arrays e manipulação de dados
* Funções
* Classes e objetos
* Herança
* Interfaces
* Entrada e saída de dados no terminal

---

# 👥 Integrantes do Grupo — ADS3B

| RA         | Nome                                 |
| ---------- | ------------------------------------ |
| 25210888-2 | Natan Ferreira dos Santos            |
| 25013061-2 | Gabriel Henry Pacheco Mormêllo       |
| 25361810-2 | Matheus Gabriel Scariot              |
| 25364386-2 | Gustavo Henrique Ferreira dos Santos |

---

# 🚀 Funcionalidades

O sistema possui um **menu interativo no terminal**, permitindo ao usuário:

✅ Selecionar qualquer um dos exercícios disponíveis
✅ Informar dados diretamente pelo console
✅ Visualizar os resultados em tempo real
✅ Retornar automaticamente ao menu principal após a execução

---

# 🛠️ Tecnologias Utilizadas

* TypeScript
* Node.js
* VS Code

---

# 📂 Estrutura do Projeto

```bash
📁 projeto-typescript
 ├── src
 │    ├── exercicio01.ts
 │    ├── exercicio02.ts
 │    ├── exercicio03.ts
 │    └── ...
 │
 ├── dist
 ├── package.json
 ├── tsconfig.json
 └── README.md
```

---

# ▶️ Como Executar o Projeto

## 1️⃣ Instalar o Node.js

Faça o download e instale o Node.js no site oficial:

[Node.js Oficial](https://nodejs.org/pt-br?utm_source=chatgpt.com)

Após a instalação, verifique se tudo está funcionando corretamente:

```bash
node -v
npm -v
```

---

## 2️⃣ Clonar o Repositório

```bash
git clone LINK_DO_REPOSITORIO
```

Acesse a pasta do projeto:

```bash
cd nome-do-projeto
```

---

## 3️⃣ Instalar as Dependências

No terminal execute:

```bash
npm install
```

---

## 4️⃣ Instalar o TypeScript

Caso ainda não tenha o TypeScript instalado globalmente:

```bash
npm install -g typescript
```

Verifique a instalação:

```bash
tsc -v
```

---

## 5️⃣ Compilar o Projeto

Execute o comando abaixo para compilar os arquivos TypeScript:

```bash
tsc
```

Os arquivos JavaScript compilados serão gerados na pasta `dist`.

---

## 6️⃣ Executar o Sistema

Após a compilação, execute:

```bash
node dist/index.js
```

> Dependendo da estrutura do projeto, o arquivo principal também pode estar localizado diretamente na raiz.

---

# 📋 Exercícios Desenvolvidos

O projeto contém os seguintes exercícios:

1. Soma de dois números
2. Número par ou ímpar
3. Média de três notas
4. Conversão Celsius → Fahrenheit
5. Números pares de 1 a 20
6. Array com 5 números
7. Maior número do array
8. Contagem de vogais
9. Calculadora simples
10. Ordenação de array
11. Classe Pessoa
12. Herança com classe Aluno
13. Interface Veículo
14. Tabuada
15. Calculadora IMC
16. Validação de senha
17. Jogo de adivinhação
18. Contagem de palavras

---

# 💡 Observações

* O projeto foi desenvolvido utilizando apenas **TypeScript puro**, conforme solicitado pelo professor.
* Todos os exercícios possuem comentários explicativos para facilitar o entendimento do código.
* O sistema foi projetado para funcionar diretamente no terminal.
* O código foi organizado de forma modular para facilitar manutenção e leitura.

---

# ✅ Resultado Esperado

Ao executar o sistema, será exibido um menu semelhante ao exemplo abaixo:

```bash
=========== MENU ===========
1 - Soma de dois números
2 - Número par ou ímpar
3 - Média de notas
...
18 - Contagem de palavras
0 - Sair
============================
```

---

# 📌 Considerações Finais

Este trabalho teve como objetivo reforçar os conceitos fundamentais de desenvolvimento com **TypeScript**, além de proporcionar prática na construção de aplicações executadas via terminal utilizando **Node.js**.
