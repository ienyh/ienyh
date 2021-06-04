/**
 * @param {string} s 1 <= s.length <= 1000
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let maxLength = 1, start = 0;

  const isPalindrome = (left, right) => {
    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }
  
  for (let i = 0; i < s.length; i++) {
    // 字串长度可能为记述也可能为偶数，所以这里需要考虑不同情况调用两次
    isPalindrome(i, i + 1);
    isPalindrome(i - 1, i + 1);
  }
  console.log(maxLength);
  return s.substring(start, start + maxLength);
};

console.log(longestPalindrome("abb"));
