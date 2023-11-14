var secondLargestNumber = function (arr) {
  if (arr.length < 2) return;
  var largest = -Infinity;
  var secondLargest = -Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};
console.log(secondLargestNumber([2, 4, 6, 7, 3]));
