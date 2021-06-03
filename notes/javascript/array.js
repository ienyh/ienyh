const part1 = function () {
  const arr = Array.from([1, 2, 3, 4, 5]);
  console.log(arr); // [ 1, 2, 3, 4, 5 ]

  const str = Array.from("ienyh"); // 传入字符串
  console.log(str); //

  const _map = new Map().set(1, 2).set(3, 4); // Map(2) { 1 => 2, 3 => 4 }
  const _set = new Set().add(1).add(2).add(3).add(4); // Set(4) { 1, 2, 3, 4 }
  console.log(Array.from(_map)); // [ [ 1, 2 ], [ 3, 4 ] ]
  console.log(Array.from(_set)); // [ 1, 2, 3, 4 ]

  const arr_1 = [1, 2, 3, 4];
  const arr_2 = arr_1;
  const arr_3 = Array.from(arr_1);
  arr_1[0] = 0;
  console.log(arr_2); // [ 0, 2, 3, 4 ]
  console.log(arr_3); // [ 1, 2, 3, 4 ]
  console.log(arr_1 === arr_3); // false

  const arr_4 = Array.of(1, 2, 3, 4);
  const arr_5 = Array.of(1, "2", true, undefined);
  console.log(arr_4); // [ 1, 2, 3, 4 ]
  console.log(arr_5); // [ 1, '2', true, undefined ]

  function func() {
    return Array.from(arguments);
  }
  console.log(func(1, 2, 3, 4, 5)); // [ 1, 2, 3, 4, 5 ]

  const obj = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    length: 4,
  };
  console.log(Array.from(obj)); // [ 0, 1, 2, 3 ]
};

const part2 = function () {
  const array_1 = [1, 2, 3, 4];
  console.log(array_1.push(5, 6)); // 6
  console.log(array_1); // [ 1, 2, 3, 4, 5, 6 ]

  const array_2 = [1, 2, 3, 4];
  console.log(array_2.pop()); // 4
  console.log(array_2); // [ 1, 2, 3 ]

  const array_3 = [1, 2, 3, 4];
  console.log(array_3.shift()); // 1
  console.log(array_3); // [ 2, 3, 4 ]

  const array_4 = [1, 2, 3, 4];
  console.log(array_4.unshift(-1, 0)); // 6
  console.log(array_4); // [ -1, 0, 1, 2, 3, 4 ]
};

const part3 = function () {
  const array_1 = [1, 2, 3, 4];
  console.log(array_1.reduce((prev, cur, index, array) => prev + cur)); // 10

  const array_2 = [1, 2, 3, 4];
  console.log(array_2.reduceRight((prev, cur, index, array) => prev + cur)); // 10
};

const part4 = function () {
  const array_1 = [1, 2, 3, 4];
  array_1.reverse();
  console.log(array_1); // [ 4, 3, 2, 1 ]

  const array_2 = [3, 1, 4, 2];
  const compare = (a, b) => a - b; // 比较函数
  array_2.sort(compare);
  console.log(array_2); // [ 1, 2, 3, 4 ]
};

// 测试数组迭代方法
const part5 = function () {
  "user strict";
  // 注意：这里 array[2] = undefined, array[3] = null, array[4]未初始化
  const array = [1, 2, undefined, null, , 3, 4];
  // array[6] 被删除
  array.pop();

  // value: 1, index: 0, array: 1,2,,,,3,4
  // value: 2, index: 1, array: 1,2,,,,3,4
  // value: undefined, index: 2, array: 1,2,,,,3,4
  // value: null, index: 3, array: 1,2,,,,3,4
  // value: 3, index: 5, array: 1,2,,,,3,4
  // value: 4, index: 6, array: 1,2,,,,3,4
  // 已删除或者未初始化的项将被跳过，而 undefined 和 null 不会被跳过
  array.forEach(function (value, index, array) {
    console.log(`value: ${value}, index: ${index}, array: ${array}`);
  });

  const array_2 = [1, 2, 3, 4].map(value => {
    return value ** 2;
  });
  console.log(array_2); // [ 1, 4, 9, 16 ]
  // ┌─────────┬────────┐
  // │ (index) │ Values │
  // ├─────────┼────────┤
  // │    0    │   1    │
  // │    1    │   4    │
  // │    2    │   9    │
  // │    3    │   16   │
  // └─────────┴────────┘

  console.log("====================");

  let flag_every = [1, 2, 3, 4].every(value => value < 5);
  console.log(flag_every); // true
  flag_every = [1, 2, 3, 4].every(value => value < 3);
  console.log(flag_every); // false

  console.log("====================");

  let flag_some = [1, 2, 3, 4].some(value => value > 3);
  console.log(flag_some); // true
  flag_some = [1, 2, 3, 4].some(value => value > 4);
  console.log(flag_some); // false

  console.log("====================");

  // 这里可以过滤出数组中的偶数元素
  const array_5 = [1, 2, 3, 4].filter(value => value % 2 === 0);
  console.log(array_5); // [ 2, 4 ]
};

// part1();
// part2();
// part3();
// part4();
part5();
