# ECMAScript



## ECMAScript 2015(ES6)

我们知道 ES5 是在 2009 年制定的，而 ES6 是在 2015 年制定的，因为 ES6 包含了 6 年的改动，所以 ES6 的改动非常的大。

为了减少各大厂商对 ECMA 脚本的升级适应压力，从 ES6 之后，ECMA 协会决定每年发一个 ECMA 版本。

- [x] `let` & `const` 

  ```javascript
  let num = 7;
  const str = "hello world!"
  ```

- [x] `() => {}` arrow function 箭头函数 

  ```javascript
  const add = (a, b) => { return a + b; }
  ```

- [ ] generator 生成器

- [ ] Symbol

- [x] Set & Map

- [ ] 解构赋值

- [x] 函数默认值 

  ```javascript
  function log (message = "log") { console.log(message); }
  log("hello world"); // hello world
  log(); // log
  ```

- [x] 数组的扩展

  - `Array.from()` 将**类数组对象**和**可遍历(*iterable*)的对象**转化为数组
  - `Array.of()` 用于**将一组值，转换为数组**
  - `Array.prototype.copyWith()` 在当前数组内部，**将指定位置的成员复制到其他位置**（会覆盖原有成员），然后返回当前数组。使用这个方法，会修改当前数组。
  - `Array.prototype.find()` **用于找出第一个符合条件的数组成员**。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为 `true` 的成员，然后返回该成员。如果没有符合条件的成员，则返回 `undefined`。
  - `Array.prototype.findIndex()` 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回`-1`。

## ECMAScript 2016(ES7)

- [x] `**` 

  Exponentiation operator 求幂运算符 `2 ** 3 = 8` 

  **优先级：`**` > `*` > `+`**

  ```javascript
  console.log(2 ** 3 * 2 + 1); // 17
  ```

- [x] `Array.prototype.includes()` 

  *Array.prototype.includes(value: any): **boolean***

  ```javascript
  const arr = [1, 2, 3, 4];
  console.log(arr.includes(3)); // true
  ```

## ECMAScript 2017(ES8)

- [x] `async` & `await` 

  ```javascript
  async function func () {
  	const data = await fetch("https://***?a=x&b=y");
    console.log(data);
  }
  ```

- [ ] `SharedArrayBuffer` & `Atomics` 共享内存和原子操作

- [ ] `Object.entries()` & `Object.values()` 

- [ ] `String.prototype.padStart()` & `String.prototype.padEnd()`

- [x] 逗号可以添加到函数的参数列表后面

  ```javascript
  function func (
      param1,
      param2,
  ) {}
  ```

## ECMAScript 2018(ES9)

ES9 是 ECMA 协会在 2018 年 6 月发行的一个版本，因为是 ECMAScript 的第九个版本，所以也称为ES9

- [x] `Promise.prototype.finally()` 

  ```javascript
  Promise.resolve("hello world")
  	.then(console.log)
  	.catch(console.log)
  	.finally(() => console.log("javascript"));
  ```

- [ ] Rest/Spread 

## ECMAScript 2019(ES10)

ES10 是 ECMA 协会在 2019 年 6 月发行的 ECMAScript 的第十个版本

- [x] `Array.prototype.flat()` & `Array.prototype.flatMap() `
- [ ] `Object.fromEntries()` 通过给定的 [key, value]，来创建新的 `Object` 对象
- [x] `String.prototype.trimStart()` & `String.prototype.trimEnd()`
- [ ] 可访问的 `Symbol` 的 `description` 属性



