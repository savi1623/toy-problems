// Write a JavaScript function take in arr of integers and say if even or odd. must be n diff line For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

const evenOdd = function (arr) {
  let result = '';

  arr.forEach((i) => {
    if (i % 2 === 0) {
      result += `${i} is even`;
    } else if (i % 2 !== 0) {
      result += `${i} is odd`;
    }
  });

  return result;
};

console.log(evenOdd([0, 1, 3, 4, 9]));
