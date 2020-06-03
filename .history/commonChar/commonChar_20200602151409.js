// Find the first repeating charecter in a string, if no repeating charecters return undefined

const commonChar = function (string) {
  //have all the letters in the string be lowercase
  const lowerCase = string.toLowerCase();
  //create a result object
  let resultObj = {};
  //iterate through the strin
  for (var i = 0; i < lowerCase.length; i++) {
    if (resultObj[lowerCase[i]] === undefined) {
      resultObj[lowerCase[i]] = 1;
    } else if (resultObj[lowerCase[i]] === 1) {
      return lowerCase[i];
    } else {
      return undefined;
    }
  }

  //if the object at the letter if undefined have it equal one
  //if not undefined return the letter
  // if all equal 1 return undefined
};

const string1 = 'aeioua';
const string2 = 'colorado';
const string3 = 'abcd';
const string4 = 'eMmA';

console.log(commonChar(string1)); //should be a
console.log(commonChar(string2)); //should be o
console.log(commonChar(string3)); //should be undefined
console.log(commonChar(string4)); //should be m
