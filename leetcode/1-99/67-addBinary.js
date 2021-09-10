/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let isAdd = false;
  while (a.length > b.length) {
    b = '0' + b;
  }
  while (b.length > a.length) {
    a = '0' + a;
  }
  console.log(a);
  console.log(b);
  let curr = a.length - 1, res = '';
  while (curr >= 0) {
    let temp = parseInt(a[curr]) + parseInt(b[curr]) + isAdd;
    if (temp > 1) {
      isAdd = true;
      res += temp % 2;
    } else {
      isAdd = false;
      res += temp;
    }
    curr--;
  }
  if (isAdd) res += '1';
  return res.split('').reverse().join('');
};

console.log(addBinary('111', '1'));