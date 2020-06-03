// fund the sum of the array

const arraySum = function (arr) {
  let sum = 0;
  arr.forEach((i) => {
    sum += i;
  });
  return sum;
};

let arr1 = [1, 1, 1, 1];
let arr2 = [0, 4, 5, -2, 3];
let arr3 = [30, 17, 42];

console.log(arraySum(arr1)); // 4ß
console.log(arraySum(arr2)); // 10
console.log(arraySum(arr3)); // 89
