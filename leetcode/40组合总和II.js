/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const array = candidates.sort((a, b) => a - b);
  const res = [];
  const temp = [];
  const resSet = new Set();

  const dfs = (sum, index) => {
    if (sum >= target) {
      if (sum === target) {
        if (!resSet.has(temp.toString())) {
          res.push([...temp]);
          resSet.add(temp.toString());
        }
      }
      return;
    }
    for (let i = index; i < array.length; i++) {
      temp.push(array[i]);
      // 由于每一个元素可以重复使用，下一轮搜索的起点依然是 i
      dfs(sum + array[i], i + 1);
      // 状态重置
      temp.pop();
    }
  };

  dfs(0, 0);
  return res;
};

console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 8));
