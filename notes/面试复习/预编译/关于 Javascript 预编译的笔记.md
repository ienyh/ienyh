# 关于 Javascript 预编译的笔记

> **坚持，记笔记 😀, 加油!**

## question

- 作用域的创建阶段、 预编译的阶段
- 预编译的时候做了什么？
- javascript 的编译对象 AO 对象,供 javascript 引擎自己去访问

## 过程：

- 创建了 **AO 对象**
- 找形参和变量的声明，作为 AO 对象的属性名，值是 `undefined`
- 实参和形参相统一
- 找函数声明，会**覆盖**变量的声明

```javascript
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

func(1, 2);
// AO: {
//   a: undefined => 1 => function a() {}
//   c: undefined => 2 => function c() {}
//   d: undefined
//   b: undefined
// }
// 然后是js的解释执行 逐行执行
```

## 三、参考

> [https://www.bilibili.com/video/BV1sN411974w?p=2](https://www.bilibili.com/video/BV1sN411974w?p=2)

## Last

如果有任何问题欢迎在评论区友好交流呦 😆。

> 欢迎关注[我](https://blog.csdn.net/qq_45265059)呦 😆，还有我的<font face="Hack">Github[@ienyh](https://github.com/ienyh)<font>一起学习哈哈哈 👨‍💻
