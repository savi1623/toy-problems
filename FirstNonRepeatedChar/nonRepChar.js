/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

const firstNonRepeatedCharacter = function (str) {
  let resultObj = {};
  const string = str.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    if (resultObj[string[i]] === undefined) {
      resultObj[string[i]] = 1;
    } else {
      resultObj[string[i]] += 1;
    }
  }

  for (let key in resultObj) {
    if (resultObj[key] === 1) {
      return key;
    }
  }
  return 'No one here';
};

console.log(firstNonRepeatedCharacter('ABA')); // => 'B'
console.log(firstNonRepeatedCharacter('AACBDB')); // => 'C'
console.log(firstNonRepeatedCharacter('AAAA'));
