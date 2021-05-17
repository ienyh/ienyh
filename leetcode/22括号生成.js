/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];
  func(n, n, "");
  /**
   * @param {number} left 
   * @param {number} right 
   * @param {string} currString 
   * @returns 
   */
  function func(left, right, currString) {
    if (left === 0 && right === 0) {
      result.push(currString);
      return;
    }
    if (left > 0) {
      func(left - 1, right, currString + "(");
    }

    if (right > left) {
      func(left, right - 1, currString + ")");
    }
  }
  return result;
};


console.log(generateParenthesis(4));