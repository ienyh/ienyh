/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const snmap = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (snmap.get(s[i]) >= snmap.get(s[i + 1]) || i === s.length - 1) {
      res += snmap.get(s[i]);
    } else {
      res -= snmap.get(s[i]);
    }
  }
  return res;
};

console.log(romanToInt('LXXIV'));