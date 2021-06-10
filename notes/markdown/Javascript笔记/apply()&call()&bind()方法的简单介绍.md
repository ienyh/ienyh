# `apply()`&`call()`&`bind()`方法的简单介绍

## 写在前面

> **坚持，记笔记 😀, 加油!**

## 一、`apply()`、`call()`和`bind()`方法的简单介绍

首先，要明白这三个函数的存在意义是什么？答案是**改变函数执行时的上下文**，再具体一点就是**改变函数运行时的`this`指向**。

`call()`和`apply()`**改变了函数的`this`上下文后执行该函数**,而`bind()`则是**返回改变了上下文后的一个函数**。

### 1、`call()`、`apply()`和`bind()` 的使用

```javascript
function Student(name) {
  this.name = name;
}

Student.prototype = {
  constructor: Student,
  print: (this.print = function () {
    console.log(this.name);
  }),
};

const student = new Student("ienyh");
student.print(); // ienyh

const teacher = { name: "hello" };

// call(), apply(), bind() 的使用
// 两种调用方式
student.print.call(teacher); // hello
Student.prototype.print.call(teacher); // hello
Student.prototype.print.apply(teacher); // hello
const bindPrint = Student.prototype.print.bind(teacher); // 返回一个函数
bindPrint(); // hello
```

### 2、`apply()`和`call()`的小区别

`apply()`和`call()`作用一样，只是传参的形式不一样，第一个参数都是 `this` 的值

- `apply()`的第二个参数是一个**参数数组**（`arguments` 对象也可以）
- `call()`则是**将参数逐个传递**（也就是说将参数一个个列出来）

```javascript
const addThree = function (x, y, z) {
  console.log(x + y + z);
};

addThree.apply(null, [1, 2, 3]); // 6
addThree.call(null, 1, 2, 3); // 6
```

## 二、Last

如果有任何疑问欢迎在评论区友好交流呦 😆。

- 欢迎关注我呦 😆，[我的 CSDN 博客主页](https://blog.csdn.net/qq_45265059)。
- 还有我的<font face="Hack">Github[@ienyh](https://github.com/ienyh)<font>一起学习哈哈哈 👨‍💻
