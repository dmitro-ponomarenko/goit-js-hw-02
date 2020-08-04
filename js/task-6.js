"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число!");

  if (input === null) {
    alert("Отменено пользователем :(");
    break;
  }
  input = Number(input);
  const notANamber = Number.isNaN(input);

  if (notANamber) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  numbers.push(input);
} while (true);

for (const number of numbers) {
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);