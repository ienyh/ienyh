# JavaScript 中 async 和 await 的使用

`async/await` 建立在 Promise 之上，因此它与 Promise 提供的所有功能兼容。如果你还没有学习过 Promise，欢迎你阅读我的另一篇博客 [关于 Promise 的学习笔记](https://blog.csdn.net/qq_45265059/article/details/117921015)。

> **async/await 其实是 Promise 的语法糖，它能实现的效果都能用 Promise 实现**

- `async` 作为一个关键字放在函数的前面，表示该函数是一个**异步函数**，意味着该函数的执行不会阻塞后面代码的执行，异步函数的调用跟普通函数一样
- `await` 语法上强制规定 `await` 只能出现在 `asnyc` 函数中

### aysnc

`async` 函数返回一个 `Promise` 对象:

```javascript
async function func (flag) {
  return new Promise((resolve, reject) => {
    if (flag) {
      resolve("resolve");
    } else {
      reject("reject");
    }
  });
}

func(true).then(console.log); // resolve
func(false).catch(console.log); // reject
```

`async` 声明的异步函数把 `return` 后面的表达式通过 `Promise.resolve()` 包装成 `Promise` 对象并返回。

```javascript
async function getNumber () { return 3 * 3; }
console.log(getNumber()); // Promise { 9 }
getNumber().then(res => console.log(res)); // 9
```

### await

`await` 意思是等待，等待某个操作完成。语法上规定 

> `await` 只能出现在 `asnyc` 函数中

`await` 等待的是一个 Promise 对象，也可以是其他任何值:

- **如果等待的是 Promise 对象，则返回 Promise 的处理结果**

  *await 会暂停当前 async function 的执行，等待 Promise 的处理完成。若 Promise 正常处理（fulfilled），其将回调的 resolve 函数参数作为 await 表达式的值，继续执行 async function；若 Promise 处理异常（rejected），await 表达式会把 Promise 异常原因抛出；*

  > ***fulfilled*** => resolve 函数参数 => await 表达式值 
  >
  > ***rejected*** => (await 表达式) 会抛出异常，可使用 `try catch` 语句处理 

- **如果是其他值，则返回该值本身。**

### `await` 等待的是 Promise 对象

***fulfilled*** => resolve 函数参数 => await 表达式值 

```javascript
async function func () {
	const res = await Promise.resolve("hello world");
  console.log(res);
}
```

***rejected*** => (await 表达式) 会抛出异常，可使用 `try catch` 语句处理 

```javascript
async function func_3 () {
  try {
    const res = await Promise.reject("error");
  } catch (e) {
    console.error(e);
  }
}

func_3(); // error
```

### `await` 等待的是其他值

```javascript
async function func_4 () {
  const str = await "hello world";
  console.log(str);
}

func_4(); // hello world
```

