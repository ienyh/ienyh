# CommonJS 模块与 ES6 模块的区别

> **坚持，写博客，记笔记 😀, 加油!**

可能有很多人像我一样，在接触了类似于

- `import * from "./1.js"`
- `const a = require("./1.js")`

这两种模块导入方式之后产生了和我一样的疑惑：它们是啥？他们又有啥区别？

首先意识到前端代码模块化是非常重要得一步，不管是做什么开发都离不开，不可能把所有代码都写着在一个文件里，这样代码会毫无章法可言。

而 Javascript 模块化的规范有很多，而现在用的最多的就是`CommonJS`（类似于这种`const a = require("./1.js")`）和`ES6`（类似于这种`import * from "./1.js"`）规范，

## CommonJS 模块与 ES6 模块的区别

### ES6 模块
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210619145254774.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1MjY1MDU5,size_16,color_FFFFFF,t_70)
ES6 模块化的设计是尽量的静态化，使得在编译时就能够确定模块之间的依赖关系。

- ES6 模块中的值属于**动态只读引用**，即不允许修改引入变量的值，不论是**基本数据类型**还是**复杂数据类型**，`import`的变量都是只读的（当模块遇到`import`命令时，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值）
- ES6 模块中的值是动态的，模块中的原始值发生变化时，`import`加载的值随之也会发生变化，不论是基本数据类型还是复杂数据类型。
- 在**循环加载**时，ES6 模块是动态引用。只要两个模块之间存在某个引用，代码就能够执行。
### CommonJS模块
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210619145531906.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1MjY1MDU5,size_16,color_FFFFFF,t_70)
- `CommonJS`规范是一种**同步加载模块**的方式，也就是说，只有当模块加载完成后，才能执行后面的操作。（由于`Node.js`主要用于服务器端编程，而模块文件一般都已经存在于本地硬盘，加载起来比较快，因此同步加载模块的`CommonJS`规范就比较适用。）
- 数据类型不同时行为不同：
  - 对于**基本数据类型**，属于**复制**。即**会被模块缓存**。同时，在另一个模块可以对该模块输出的变量重新赋值。
  - 对于**复杂数据类型**，属于**浅拷贝**。由于两个模块引用的对象指向同一个内存空间，因此对该模块的值做修改时会影响另一个模块。
- 当使用`require()`方法加载某个模块时，就会**运行整个模块的代码**。而当使用`require()`方法加载再次同一个模块时，不会再次执行该模块的代码，而是取到缓存中的值。`CommonJS`模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存。
- **循环加载**时，属于加载时执行。即代码在`require`的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。

## 二、ES6 模块与 CommonJS 模块的简单使用

### 2.1 ES6 模块使用
#### 使用`export`将变量导出
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210619154348285.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1MjY1MDU5,size_16,color_FFFFFF,t_70)
#### 使用`import`将变量导入
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210619154756898.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1MjY1MDU5,size_16,color_FFFFFF,t_70)

### 2.2 CommonJS 模块使用
#### 使用`module.exports = {}`将变量导出
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210619153311567.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1MjY1MDU5,size_16,color_FFFFFF,t_70)
#### 使用`const a = require("./1.js")`导入
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210619153438518.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1MjY1MDU5,size_16,color_FFFFFF,t_70)

## 三、总结 & Last

- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口
- CommonJS 模块输出的是一个值的复制，ES6 模块输出的是值的引用
- CommonJS 默认非严格模式，ES6 的模块自动采用严格模式
- CommonJS 中 `this` 指向当前模块，ES6 中 `this` 指向 `undefined`

如果有任何疑问欢迎在评论区交流学习呦 😆。

- 欢迎关注我呦 😆，[我的 CSDN 博客主页](https://blog.csdn.net/qq_45265059)。
- 还有我的<font face="Hack">Github[@ienyh](https://github.com/ienyh)<font>一起学习哈哈哈 👨‍💻

