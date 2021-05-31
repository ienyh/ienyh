[comment]: <> "@[Javascript 部分数组方法的简单介绍](https://blog.csdn.net/qq_45265059/article/details/116942489)"

# <font face="Hack">Javascript 数组方法的简单总结介绍</font>

​ 新手小白第一次发博客 😆，当是做笔记啦。记一下学习到的<font face="Hack">**Javascript 数组**</font>方法，写的不好各位见谅呀 😬，共同学习进步 😄。对了电脑端需要快速查询想要找到的方法的话，可以使用 <kbd><font face="Hack">**Ctrl/Command**</font></kbd> + <kbd><font face="Hack">**F**</font></kbd> 输入想要搜索的方法名来进行查找哦。(这篇暂时还没写完，希望自己可以坚持下去，加油 🤔)

## 一、先介绍数组实例方法

### 1.1 栈和队列方法

<font face="Hack">**Javascript**</font>中这几个方法让数组可以直接作为**栈**（**先进后出 FILO**）和**队列**（**先进先出 FIFO**）这两种数据结构来使用，使用`push()`和`pop()`可以让数组当成栈来使用，而使用`shift()`和`push()`可以数组当成队列来使用，另外还有一个`unshift()`方法（可以配合`pop()`模拟反向的队列）。

#### 1.1.1 <font face="Hack">`push()`</font>

`push()`方法可以接收任意数量的参数，将他们按照参数顺序添加到数组末尾，返回值是添加元素后数组的最新长度`length`

```javascript
const array_1 = [1, 2, 3, 4];
console.log(array_1.push(5, 6)); // 6
console.log(array_1); // [ 1, 2, 3, 4, 5, 6 ]
```

#### 1.1.2 <font face="Hack">`pop()`</font>

而`pop()`方法执行的是与`push()`方法相反的操作，将会删除数组的最后一项并返回该项（同时也`length`会减 1）。

```javascript
const array_2 = [1, 2, 3, 4];
console.log(array_2.pop()); // 4
console.log(array_2); // [ 1, 2, 3 ]
```

#### 1.1.3 <font face="Hack">`shift()`</font>

`shift()`方法将会删除数组的第一项并返回该项（同时也`length`会减 1）。

```javascript
const array_3 = [1, 2, 3, 4];
console.log(array_3.shift()); // 1
console.log(array_3); // [ 2, 3, 4 ]
```

#### 1.1.4 <font face="Hack">`unshift()`</font>

另外的`unshift()`方法执行的是与`shift()`方法相反的操作，该方法可以接收任意数量的参数并按照参数的顺序添加到数组前，方法会返回新的数组长度`length`。

```javascript
const array_4 = [1, 2, 3, 4];
console.log(array_4.unshift(-1, 0)); // 6
console.log(array_4); // [ -1, 0, 1, 2, 3, 4 ]
```

### 1.2 归并方法

**Javascript**中有两个归并方法`reduce()`和`reduceRight()`这两个方法都会遍历数组的每一项，并有一个最终返回值。

#### 1.2.1 <font face="Hack">`reduce()`</font>

这个方法会接受两个参数：

- 第一个参数为针对每一项都会执行的归并方法：<br/> 这个方法可以接受四个参数：**上一个归并值**、**当前项**、**当前项的索引**和**数组本身**，这个函数的返回值将会作为下一次归并时该函数的第一个参数，所以当`reduce()`没有接收到可选的第二个参数时，归并将会从数组的第二项开始，
- 第二个参数为**可选的**以其为起点的初始值。

可以使用`reduce()`方法轻松执行数组求和的操作：

```javascript
const array_1 = [1, 2, 3, 4];
console.log(array_1.reduce((prev, cur, index, array) => prev + cur)); // 10
```

#### 1.2.2 <font face="Hack">`reduceRight()`</font>

而`reduceRight()`方法的操作与`reduce()`方法相同，只是遍历元素的方向是从最后一项到第一项而已，其余的没有任何区别。

```javascript
const array_1 = [1, 2, 3, 4];
console.log(array_1.reduceRight((prev, cur, index, array) => prev + cur)); // 10
```

### 1.3 排序方法

`sort()`和`reverse()`都会返回调用它们的数组的引用。

#### 1.3.1 <font face="Hack">`sort()`</font>

`sort()`方法可以接收一个可选的**比较函数**，用于判断哪个值应该被排在前面。这个比较函数接受两个参数，如果第一个参数想要被排在前面就返回一个负值，反之则返回一个正值。

```javascript
const array_2 = [3, 1, 4, 2];
const compare = (a, b) => a - b; // 比较函数
array_2.sort(compare);
console.log(array_2); // [ 1, 2, 3, 4 ]
```

#### 1.3.2 <font face="Hack">`reverse()`</font>

`reverse()`方法会将调用它的数组元素反向逆序排列。

```javascript
const array_1 = [1, 2, 3, 4];
array_1.reverse();
console.log(array_1); // [ 4, 3, 2, 1 ]
```

## 二、然后是 Array 的静态方法

### 2.1 <font face="Hack">`Array.from()`</font>

`Array.from()`方法可以接受最多三个参数，第一个参数为一个类数组对象(即可迭代，或者是有`length`属性同时存在可索引属性)，第二个参数为可选参数，是一个映射函数参数，还有可选的第三个参数，用于指定映射函数参数中的`this`指向。

`Array.from()`方法可以传入参数数组，`Map`和`Set`的实例等

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

`Array.from()`方法也可以传入`arguments`和可迭代对象

```javascript
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

### 2.2 <font face="Hack">`Array.of()`</font>

`Array.of()`方法用于将一组参数转化为数组，这个方法可以用于替代**ES6**之前常用的`Array.prototype.slice.call(arguments)`，对比起来这种方法就显得有些繁杂了

```javascript
const arr_4 = Array.of(1, 2, 3, 4);
const arr_5 = Array.of(1, "2", true, undefined);
console.log(arr_4); // [ 1, 2, 3, 4 ]
console.log(arr_5); // [ 1, '2', true, undefined ]
```

## Last

如果有任何疑问欢迎在评论区友好交流呦 😆。

[@Javascript 部分数组方法的简单介绍](https://blog.csdn.net/qq_45265059/article/details/116942489)
欢迎关注[我](https://blog.csdn.net/qq_45265059)呦 😆，还有我的<font face="Hack">Github[@ienyh](https://github.com/ienyh)<font>一起学习哈哈哈 👨‍💻
