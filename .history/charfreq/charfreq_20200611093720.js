/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function (string) {
  //create result obj
  var resultObj = {};
  //iterate through string
  var splitString = string.split('');
  splitString.forEach((letter) => {
    //if letter undefined make key letter and value 1
    if (resultObj[letter] === undefined) {
      resultObj[letter] = 1;
    } else {
      //else increase count by 1
      resultObj[letter] += 1;
    }
  });
  //make return array
  var resultArr = [];
  //for each key in object
  for (var key in resultObj) {
    var innerArr = [];
    //make own array of key and value
    innerArr.push(key, resultObj[key]);
    //then push into return array
    resultArr.push(innerArr);
  }
  //sort the inner arrays
  var sortedArr = resultArr.sort(function (a, b) {
    if (a[1] === b[1]) {
      if (a < b) {
        return -1;
      }
      if (b < a) {
        return 1;
      }
      return 0;
    }
    return b[1] - a[1];
  });
  //return sortedArr Arr
  return sortedArr;
};

console.log(characterFrequency('mmmaaaiiibbb'));
