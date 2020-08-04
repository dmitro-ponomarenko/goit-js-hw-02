"use strict";

let message;
let pricePerWord;
let words;

const calculateEngravingPrice = function(message, pricePerWord) {
  const stringInArray = message.split(" ");
  const arrayLength = stringInArray.length;
  const result = arrayLength * pricePerWord;
  console.log(result);
};

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus", 90);