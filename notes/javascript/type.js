function test1() {
  console.log(typeof 7); // number
  console.log(typeof 7n); // bigint
  console.log(typeof "ienyh"); // string
  console.log(typeof true); // boolean
  console.log(typeof undefined); // undefined
  console.log(typeof null); // object
  console.log(typeof Symbol("ienyh")); // symbol
  console.log(typeof {}); // object
  console.log(typeof []); // object
  console.log(typeof function () {}); // function
}

function test2() {
  const ienyh = { name: "ienyh" };
  const array = ["i", "e", "n", "y", "h"];
  const add = function () {};
  console.log(ienyh instanceof Object); // true
  console.log(array instanceof Array); // true
  console.log(add instanceof Function); // true
}

function test3() {
  const ienyh = { name: "ienyh", age: 21 };
  const ienyh_copy = ienyh;
  ienyh_copy.age = 8;
  console.log(ienyh); // { name: 'ienyh', age: 8 }
}

// test2();
test3();

