/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) {
    return "1";
  }
  let pre = countAndSay(n - 1),
    ans = "";
  let count = 1;
  for (let i = 0; i < pre.length; i++) {
    if (pre[i] != pre[i + 1]) {
      ans += `${count}${pre[i]}`;
      count = 0;
    }
    count++;
  }
  return ans;
};

for (let index = 1; index <= 10; index++) {
  console.log(countAndSay(index));
}
