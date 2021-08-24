/**
 *
 * @param {*} origin 被拷贝的对象或者数组
 * @param {*} target 目标对象或者数组
 * @returns 返回
 */
function deepClone(origin, target = Array.isArray(origin) ? [] : {}) {
  if (!origin || typeof origin !== "object") {
    return origin;
  }
  for (const key in origin) {
    if (Object.hasOwnProperty.call(origin, key)) {
      target[key] = deepClone(origin[key]);
    }
  }
  return target;
}

const ienyh = {
  name: "ienyh",
  info: {
    school: "****",
    hobby: ["coding", "football", "games"],
    things: {
      games: ["LOL", "Heart Stone"],
      age: 21,
    },
  },
};

const ienyh_copy_2 = JSON.parse(JSON.stringify(ienyh));
console.log(ienyh_copy_2);

const origin = { name: "ienyh", age: 21 };
const target = Object.assign({}, origin);
console.log(target);
