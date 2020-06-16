var bubbleSort = function (array) {
  // Your code here.
  let swap = function (arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };
  n = array.length;
  for (var i = 1; i <= array.length + n; i++) {
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        //call swap
        swap(array, j, j + 1);
      }
    }
  }

  return array;
};

console.log(bubbleSort([2, 1, 3)); // yields [1, 2, 3]
