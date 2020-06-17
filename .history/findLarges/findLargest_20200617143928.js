//find the largest integer in an array of numbers

const findLargest = function (arr) {
  let largest = arr[0];

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

const input = [-8, -1, -3, -4, -6, -4];

console.log(findLargest(input));
