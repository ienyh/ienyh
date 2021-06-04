/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }
  const strSet = new Set();
  let maxLength = 0,
    i = 0,
    j = 0;
  for (i = 0; i < s.length; i++) {
    if (!strSet.has(s[i])) {
      strSet.add(s[i]);
      maxLength = Math.max(maxLength, strSet.size);
    } else {
      while (strSet.has(s[i])) {
        strSet.delete(s[j++]);
      }
      strSet.add(s[i]);
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
