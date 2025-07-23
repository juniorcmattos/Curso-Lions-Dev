/* Operadores aritméticos

Adição +
Subtração -
Multiplicação *
Divisão /
Módulo %

*/

/* Soma
const sum = 25 + 2

Subtração
const sub = 45 - 4

Multiplicação
const mult = 3 * 5

Divisão
const div = 4 / 2

Módulo (ele vai retornar o resto da divisão)
const rest = 10 % 3

*/

const price = 250;
const percentage = 22;

const discount = (price * percentage) / 100
const finalPrice = price - discount

console.log("O preço do produto:", price)
console.log("O desconto é de:", discount)
console.log("O preço final ficará em:", finalPrice)