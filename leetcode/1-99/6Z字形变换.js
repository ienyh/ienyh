/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length === 0 || numRows < 1) return "";
  if (numRows === 1) return s;
  const rows = [];
  let orient = false,
    flag = 0;
  for (let i = 0; i < numRows; i++) {
    rows.push([]);
  }
  for (let i = 0; i < s.length; i++) {
    if (i % (numRows - 1) == 0) orient = !orient;
    if (flag >= 0 && flag < numRows) {
      rows[flag].push(s[i]);
      if (orient) flag++;
      else flag--;
    }
  }
  return rows.flat().join("");
};

console.log(convert("PAYPALISHIRING", 4));
