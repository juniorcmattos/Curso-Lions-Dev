/* Exercício 1: Pedindo a Idade e Calculando Anos até a Aposentadoria
Objetivo: Pedir a idade ao usuário, verificar se é um número e, se for, 
calcular quantos anos faltam para se aposentar (considerando 65 anos como idade de aposentadoria).

Passos:
Mantenha a estrutura básica do readline.
Peça ao usuário para digitar sua idade.
Converta a entrada para um número (lembre-se que o readline retorna strings!).
Verifique se a entrada é um número válido. Se não for, exiba uma mensagem de erro.
Se for um número, calcule os anos restantes para a aposentadoria. (Dica: 65 - idade).
Exiba uma mensagem amigável com o resultado.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout,
});

console.log('=== CALCULADORA DE APOSENTADORIA ===')

let idade;

rl.question('Digite a sua idade: '), (idade) => {
const idade = parseFloat(idade)
};

