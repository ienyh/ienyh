/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param name string字符串 变量名
 * @return string字符串
 */
function format (name) {
  let res = name;
  res[0] && (res[0] = res[0].toLowerCase());
  if (res.split('').include('_')) {
    for (let i = 0; i < res.length; i++) {
      res[i] = res[i].toLowerCase();
      if (res[i - 1] && res[i - 1] === '_') {
        res[i] = res[i].toUpperCase();
      }
    }
  }
  res.replaceAll('_', '');
  return res;
}