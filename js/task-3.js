  
"use strict";

const findLongestWord = function(string) {
  let arrString = string.split(" ");
  let longestWord = arrString[0];
  for (let i = 1; i < arrString.length; i += 1) {
    if (arrString[i].length > longestWord.length) {
      longestWord = arrString[i];
    }
  }
  return longestWord;
};



console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'