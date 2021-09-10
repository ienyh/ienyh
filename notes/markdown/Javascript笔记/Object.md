# Object

> [https://zhuanlan.zhihu.com/p/51593805](https://zhuanlan.zhihu.com/p/51593805)

## create()

Object.create() 方法用于创建一个新对象，并把新对象的原型对象指向该方法的第一个参数。

返回值：一个新创建的对象，带着指定的原型对象和属性。

```js
Object.create(prototype, [propertiesObject])
```

- `prototype`：新创建的对象的原型对象。这个参数只能是一个对象或者是 null。传入其他值会抛出 TypeError。

- `propertiesObject`：可选。要添加到新对象内的属性。

**示例1：创建一个原型对象为null的对象**

```js
var obj = Object.create(null);
Object.getPropertyOf(obj); // null
```

**示例2：普通的对象创建**

```js
var obj1 = { a: 1 };
var obj2 = Object.create(obj1);
obj2.__proto__ === obj1; // true
obj2.__proto__.__proto__ === Object.prototype; // true
obj2.a === 1; // true，调用的是原型对象 obj1 的自有属性 a
```

**示例3：指定对象的属性**

```js
var obj = Object.create({}, {
    b: {
        value: 2
    },
    c: {
        value: 3,
        writable: false,
        enumerable: false,
        configurable: false
    },
    d: {
        value: 4,
        writable: true,
        enumerable: true,
        configurable: true
    },
    e: {},
    f: {
        get: function () { return 5;}
    }
});

Object.getOwnPropertyDescriptors(obj);
/*
b: {value: 2, writable: false, enumerable: false, configurable: false}
c: {value: 3, writable: false, enumerable: false, configurable: false}
d: {value: 4, writable: true, enumerable: true, configurable: true}
e: {value: undefined, writable: false, enumerable: false, configurable: false}
f: {get: ƒ, set: undefined, enumerable: false, configurable: false}
*/
```

由示例 3 可见，如果指定新创建对象的属性，这些属性会成为新对象的自有属性。同时，如果指定这些属性的属性描述符，新对象会按这些描述符去配置属性。**如果描述符中缺少某个特性的描述，则新对象的这个属性的特性默认为 false**。

## assign()
