/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  let sum = 0, i = 0;
  const len = chalk.length;
  while (sum <= k) {
      sum += chalk[i];
      i = (i + 1) % len;
  }
  return i - 1 < 0 ? len - 1 : i - 1;
};