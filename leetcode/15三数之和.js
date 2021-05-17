/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  nums = nums.sort((a, b) => a - b);
  const res = [];
  const resSet = new Set();
  // nums = [-4, -1, -1, 0, 1, 2]
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let t = j + 1; t < nums.length; t++) {
        if (nums[i] + nums[j] + nums[t] === 0) {
          const temp = [nums[i], nums[j], nums[t]];
          temp.sort((a, b) => a - b);
          resSet.add(temp.toString());
        }
      }
    }
  }
  for (const str of resSet.values()) {
    const arr = str.split(",");
    res.push(
      arr.map((item) => {
        return parseInt(item);
      })
    );
  }
  console.log(res);
  return res;
};

threeSum([-1, 0, 1, 2, -1, -4]);
