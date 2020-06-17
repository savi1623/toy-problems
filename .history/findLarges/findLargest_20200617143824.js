//find the largest integer in an array, if no numbers return ' no numbers here

const findLargest = function (arr) {
  let largest = array[0];

  arr.forEach((i) => {
    //if i is a number
    if (typeof i === 'number') {
      //check if larger than largest
      if (i > largest) {
        largest = i;
      }
    }
  });
  return largest;
};

const input = [1, 3, 4, 6, 4];

console.log(findLargest(input));
