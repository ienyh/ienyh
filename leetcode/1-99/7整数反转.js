/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let n = 0;
  while (x !== 0) {
    n = n * 10 + x % 10;
    if (n > Math.pow(2, 31) - 1 || n < Math.pow(-2, 31)) return 0;
    x = ~~(x / 10); // 按位非两次可将浮点数转化为整数
  }
  return n;
};