const student = {
  name: "ienyh",
  age: 21,
  gender: "male",
  hobby: ["coding", "sports", "read"],
};

const ienyh = JSON.stringify(student);
// 默认情况下`JSON.stringify()`不会输出包含空格或者缩进的JSON字符串，所以输出如下：
// {"name":"ienyh","age":21,"gender":"male","hobby":["coding","sports","read"]}
console.log(ienyh);

// 当过滤器为**数组**时，则返回的结果中只会包含该数组中列出的对象属性
const ienyh_2 = JSON.stringify(student, ["name", "hobby"]);
// {"name":"ienyh","hobby":["coding","sports","read"]}
console.log(ienyh_2);

// 当过滤器为**函数**时，该函数有两个参数：**属性名`key`**和**属性值`value`**
const ienyh_3 = JSON.stringify(student, (key, value) => {
  if (key === "age") return ++value;
  else if (key === "hobby") {
    value.push("eating");
    return value;
  }
  return value;
});
// {"name":"ienyh","age":22,"gender":"male","hobby":["coding","sports","read","eating"]}
console.log(ienyh_3);

const ienyh_4 = JSON.stringify(student, null, 4);
// {
//   "name": "ienyh",
//   "age": 21,
//   "gender": "male",
//   "hobby": [
//       "coding",
//       "sports",
//       "read",
//       "eating"
//   ]
// }
console.log(ienyh_4);

const ienyh_5 = JSON.stringify(student, null, "$$");
// {
// $$"name": "ienyh",
// $$"age": 21,
// $$"gender": "male",
// $$"hobby": [
// $$$$"coding",
// $$$$"sports",
// $$$$"read",
// $$$$"eating"
// $$]
// }
console.log(ienyh_5);

// ienyh = "{"name":"ienyh","age":21,"gender":"male","hobby":["coding","sports","read"]}"
const ienyhObject = JSON.parse(ienyh);
// {
//   name: 'ienyh',
//   age: 21,
//   gender: 'male',
//   hobby: [ 'coding', 'sports', 'read' ]
// }
console.log(ienyhObject);

const ienyhObject_2 = JSON.parse(ienyh, (key, value) => {
  return key === "gender" ? "female" : value;
});
// {
//   name: 'ienyh',
//   age: 21,
//   gender: 'female',
//   hobby: [ 'coding', 'sports', 'read' ]
// }
console.log(ienyhObject_2);

const ienyhObject_3 = JSON.parse(ienyh, (key, value) => {
  return key === "age" ? undefined : value;
});
// {
//   name: 'ienyh',
//   gender: 'male',
//   hobby: [ 'coding', 'sports', 'read' ]
// }
console.log(ienyhObject_3);
