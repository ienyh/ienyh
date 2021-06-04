/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // return x.toString() === x.toString().split("").reverse().join("");
  if (x < 0 || (!(x % 10) && x)) return false;
  if (x >= 0 && x < 10) return true;
  const arr = x.toString(),
    len = arr.length;
  let i = len % 2 === 0 ? len / 2 - 1 : (len - 1) / 2,
    j = len % 2 === 0 ? len / 2 : (len - 1) / 2;
  while (i >= 0 && j <= len - 1) {
    if (arr[i] !== arr[j]) return false;
    i--;
    j++;
  }
  return true;

  // let x2 = x, res = 0;
  //   while(x2){
  //       res = res * 10 + x2 % 10;
  //       x2 = ~~(x2 / 10);
  //   }
  //   return res === x
};

console.log(isPalindrome(10));
console.log(isPalindrome(123321));
