var evenOccurrence = function (arr) {
  // Your code here.
  var result = {};
  arr.forEach((num) => {
    if (result[num] === undefined) {
      result[num] = 1;
    } else {
      result[num] += 1;
    }
  });
  for (num in result) {
    if (result[num] % 2 === 0) {
      return num;
    }
  }
  return null;
};

var input = ['meow', 1, 1, 'meow'];

console.log(evenOccurrence(input));
