[comment]: <> "@[Javascript 部分数组方法的简单介绍](https://blog.csdn.net/qq_45265059/article/details/116942489)"

# Javascript 部分数组方法的简单介绍

​ 新手小白第一次发博客 😆，就当是做笔记啦。记一下学习到的 Javascript 数组方法，写的不好各位见谅呀 😬，共同学习进步 😄。对了需要快速查询想要找到的方法可以使用 <kbd>**Ctrl/Command**</kbd> + <kbd>**F**</kbd> 输入想要搜索的方法名来进行查找哦。(这篇暂时还没写完，希望自己可以坚持下去，加油 🤔)

## 1 先介绍数组实例方法

## 2 然后是 Array 的静态方法

#### 2.1 `Array.from()`

`Array.from()`方法可以接受最多三个参数，第一个参数为一个类数组对象(即可迭代，或者是有`length`属性同时存在可索引属性)，第二个参数为可选参数，是一个映射函数参数，还有可选的第三个参数，用于指定映射函数参数中的`this`指向。

```javascript
const arr = Array.from([1, 2, 3, 4, 5]); // 传入一个数组
console.log(arr); // [ 1, 2, 3, 4, 5 ]

const str = Array.from("ienyh"); // 传入字符串将会被转化为字符数组
console.log(str); // [ 'i', 'e', 'n', 'y', 'h' ]

const _map = new Map().set(1, 2).set(3, 4); // Map(2) { 1 => 2, 3 => 4 }
const _set = new Set().add(1).add(2).add(3).add(4); // Set(4) { 1, 2, 3, 4 }
console.log(Array.from(_map)); // [ [ 1, 2 ], [ 3, 4 ] ]
console.log(Array.from(_set)); // [ 1, 2, 3, 4 ]
```

`Array.from()`方法还可以用于对现有数组进行深拷贝

```javascript
const arr_1 = [1, 2, 3, 4];
const arr_2 = arr_1;
const arr_3 = Array.from(arr_1);
arr_1[0] = 0;
console.log(arr_2); // [ 0, 2, 3, 4 ]
console.log(arr_3); // [ 1, 2, 3, 4 ]
console.log(arr_1 === arr_3); // false
```

#### 2.2 `Array.of()`

`Array.of()`方法用于将一组参数转化为数组，这个方法可以用于替代 ES6 之前常用的`Array.prototype.slice.call(arguments)`

```javascript
const arr_4 = Array.of(1, 2, 3, 4);
const arr_5 = Array.of(1, "2", true, undefined);
console.log(arr_4); // [ 1, 2, 3, 4 ]
console.log(arr_5); // [ 1, '2', true, undefined ]
```

@[Javascript 部分数组方法的简单介绍](https://blog.csdn.net/qq_45265059/article/details/116942489)
欢迎关注[我](https://blog.csdn.net/qq_45265059)呦 😆，还有我的[github](https://github.com/ienyh)一起学习哈哈哈 👨‍💻
