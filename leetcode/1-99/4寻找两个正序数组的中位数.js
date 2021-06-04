/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let array = nums1.concat(nums2).sort((a, b) => a - b);
  const len = array.length;
  if (len % 2 != 0) {
    return array[Math.floor(len / 2)];
  }
  return (array[len / 2 - 1] + array[len / 2]) / 2;
};

console.log(findMedianSortedArrays([1, 4, 3], [5, 2, 6]));
