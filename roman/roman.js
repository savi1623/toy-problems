var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var translateRomanNumeral = function (romanNumeral) {
  // TODO: Implement me!
  //takes in a string
  if (typeof romanNumeral != 'string') {
    return null;
  }
  var sum = 0;
  var numberArr = [];
  romanNumeral = romanNumeral.split('');
  for (var i = 0; i < romanNumeral.length; i++) {
    for (var key in DIGIT_VALUES) {
      if (romanNumeral[i] === key) {
        romanNumeral[i] = DIGIT_VALUES[key];
      }
    }
    numberArr.push(romanNumeral[i]);
  }

  for (var j = 0; j < numberArr.length; j++) {
    if (numberArr[j] >= numberArr[j + 1]) {
      sum += numberArr[j];
    } else if (numberArr[j] < numberArr[j + 1]) {
      sum -= numberArr[j];
    } else if (numberArr[j] === numberArr[numberArr.length - 1]) {
      sum += numberArr[j];
    }
  }
  return sum;
};

var input2 = 'VIII';
var input3 = 'MMVIII';

console.log(translateRomanNumeral(input3));
