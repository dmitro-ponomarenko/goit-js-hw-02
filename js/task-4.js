"use strict";

let message;
const formatString = function(string) {
  let lengthString = string.slice(0, 39);

  if (string.length < 40) {
    return lengthString;
  } else {
    return `${lengthString}...`;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique ADAA."
  )
);
// вернется форматированная строка