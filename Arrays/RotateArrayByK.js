// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

var rotate = function (nums, k) {
  let length = nums.length;
  if (length > k) {
    k = k % length;
  }
  var valuesToRotate = nums.splice(length - k, length);
  nums.unshift(...valuesToRotate);
};
// rotate([1, 2, 3, 4, 5, 6, 7], 3);

// second solution using loop
// [1,2,3,4,5,6,7] = [7,6,5,4,3,2,1] = [5,6,7,1,2,3,4]

function reverse(arr, left, right) {
  while (left < right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}
var rotate = function (arr, k) {
  let length = arr.length;
  k = k % length;
  reverse(arr, 0, length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, length - 1);
};

//rotatedArray([1, 2, 3, 4, 5, 6, 7], 3);
