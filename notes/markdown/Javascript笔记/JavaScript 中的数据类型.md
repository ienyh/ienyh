# JavaScript 中的数据类型

> **坚持，写博客，记笔记 😀, 加油!**

## 概念

首先我们需要明确 JavaScript 中有两种数据类型：**基本数据类型**和**引用数据类型**

两种类型的区别是：在内存中的**存储位置不同**。

**原始数据类型直接存储在栈（_stack_）中的简单数据段**，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。

**引用数据类型存储在堆（_heap_）中的对象**，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

## 什么叫堆和栈？

堆和栈的概念存在于数据结构和操作系统内存中。

在数据结构中：栈中数据的存取方式为先进后出。而堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。完全二叉树就是堆的一种实现方式。

在操作系统中：内存被分为栈区和堆区。栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。而堆区内存一般由程序员分配释放，若程序员不释放，程序结束时可能由垃圾回收机制回收。

## 基本数据类型

目前 JavaScript 一共有七种基本数据类型，分别是 `undefined`、`null`、`boolean`、`number`、`string`，ES6 新增的 `symbol` 和 ES10 中新增的 `bigint`。

`symbol` 代表创建后独一无二且不可变的数据类型，`symbol` 的一个好处是避免可能出现的全局变量冲突的问题。

`bigint` 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 `bigint` 可以安全地存储和操作大整数，即使这个数已经超出了 `number` 能够表示的安全整数范围。

```javascript
// 基本数据类型
console.log(typeof 7); // number
console.log(typeof "ienyh"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof Symbol("ienyh")); // symbol
console.log(typeof 7n); // bigint
// 引用数据类型
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function
```

## 引用数据类型

引用数据类型统称为 `Object` 类型，细分来说有`Object` 、`Array`、`Function` 等，

使用 `typeof` 是无法得到引用数据类型的具体类型的，需要使用 `instanceof` 来判断引用对象的类型

```javascript
const ienyh = { name: "ienyh" };
const array = ["i", "e", "n", "y", "h"];
const add = function () {};
console.log(ienyh instanceof Object); // true
console.log(array instanceof Array); // true
console.log(add instanceof Function); // true
```

最需要注意的是：

- **基本数据类型**在做赋值操作时进行的是**值传递**
- 而**引用数据类型**在做赋值操作时进行的是**引用传递**（也就是地址的传递）

```javascript
const ienyh = { name: "ienyh", age: 21 };
const ienyh_copy = ienyh;
ienyh_copy.age = 8;
console.log(ienyh); // { name: 'ienyh', age: 8 }
```

如上所见，当我们简单的赋值只是传递一个引用，两个变量都指向堆中的同一个变量，无论如何修改都只是在操作同一个内存中的变量。

## _Last_

欢迎在评论区交流学习，一起学习哈哈哈 👨‍💻！

点个赞，点个关注吧 😆。
