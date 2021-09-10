/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let res = "";
  for (let i = 0; i < 200; i++) {
    let flag = true, temp;
    for (let j = 1; j < strs.length; j++) {
      temp = strs[j][i];
      if ((strs[j][i] && strs[j][i] !== strs[j - 1][i]) || !strs[j][i]) {
        flag = false;
        break;
      }
    }
    if (!flag) {
      break;
    } else {
      res += temp;
    }
  }
  return res;
};

var longestCommonPrefix_2 = function (strs) {
  if (strs.length === 0) return '';
  let res = strs[0];
  for (str of strs) {
    while (!str.startsWith(res)) {
      if (res.length === 0) return '';
      res = res.substring(0, res.length - 1);
    }
  }
  return res;
};