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

// part1();
// part2();
// part3();
part4();
