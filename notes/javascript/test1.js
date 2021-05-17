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
