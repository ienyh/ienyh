/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  s = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());
  t = t.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());
  return s.join('') === t.join('');
};

isAnagram('asd', 'das');