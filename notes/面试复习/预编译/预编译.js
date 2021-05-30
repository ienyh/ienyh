/**
 * 预编译
 * 作用域的创建阶段 预编译的阶段
 * 预编译的时候做了什么
 * js 的编译对象 AO 对象 供 js 引擎自己去访问
 * 1、创建了 AO 对象 2、找形参和变量的声明，作为 AO 对象的属性名，值是 undefined
 * 3、实参和形参相统一 4、找函数声明，会覆盖变量的声明
 */

function func(a, c) {
  console.log(a); // [Function: a]
  var a = 123;
  console.log(a); // 123
  console.log(c); // [Function: c]
  function a() {}
  if (false) {
    var d = 678;
  }
  console.log(d); // undefined
  console.log(b); // undefined
  var b = function () {};
  console.log(b); // [Function: b]
  function c() {}
  console.log(c); // [Function: c]
}

```
AO: {
  a: undefined => 1 => function a() {}
  c: undefined => 2 => function c() {}
  d: undefined
  b: undefined
}

然后是js的解释执行 逐行执行
```;

func(1, 2);
