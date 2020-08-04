"use strict";

let message;
const spamToFind = "spam";
const spamToFind1 = "sale";
const checkForSpam = function(message) {
  const arrayString = message.toLowerCase();

  console.log(arrayString);

  if (arrayString.includes(spamToFind)) {
    return "true";
  } else if (arrayString.includes(spamToFind1)) {
    return "true";
  } else {
    return "false";
  }
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true