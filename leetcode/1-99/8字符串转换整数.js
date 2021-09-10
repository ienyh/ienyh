/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  // const str = s.trim().match(/^[\+\-]?\d+/);

  const number = parseInt(s, 10);
  if (isNaN(number)) {
    return 0;
  } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
    return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  } else {
    return number;
  }
};

console.log(myAtoi("-001112300awq123"));