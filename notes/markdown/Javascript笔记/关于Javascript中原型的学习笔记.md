# 关于 Javascript 中原型的学习笔记

## 写在前面

> **坚持，记笔记 😀, 加油!**

## 理解原型

无论何时，只要创建一个函数，这个函数都会创建一个`prototype`属性，指向原型对象，包括应该**由特定引用类型的实例共享的属性和方法**。

所有原型对象会自动获得一个`constructor`的属性，指向与之关联的构造函数

```javascript
function Person() {}
console.log(Person.prototype.constructor); // [Function: Person]
```

当调用构造函数创建一个实例时，这个**实例内部有一个`[[Prototype]]`会指向构造函数的原型对象**

Firefox、Safari 和 Chrome 会在每个对象上暴露`__proto__`属性，可以通过该属性访问对象的原型

```javascript
const ienyh = new Person();
console.log(Person.prototype);
// {
//   constructor: ƒ Person(),
//   __proto__: Object
// }
console.log(ienyh.__proto__ === Person.prototype); // true
```

## 四、总结 & Last

如果有任何疑问欢迎在评论区友好交流呦 😆。

- 欢迎关注我呦 😆，[我的 CSDN 博客主页](https://blog.csdn.net/qq_45265059)。
- 还有我的<font face="Hack">Github[@ienyh](https://github.com/ienyh)<font>一起学习哈哈哈 👨‍💻
