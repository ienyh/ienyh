const student = { name: "ienyh", age: 21, gender: "male" };
const proxy = new Proxy(student, {
  get(target, key) {
    console.log("[get]:", key);
    return Reflect.get(...arguments);
  },
  set(target, key, value) {
    if (key === "age") {
      if (value < 0) {
        target[key] = 0;
      } else {
        target[key] = value;
      }
    } else {
      target[key] = value;
    }
  },
});

proxy.age; // [get]: age
console.log(student.name); // ienyh_2
console.log(student.age); // 21
console.log(proxy.age); // 22

proxy.age = -21;
console.log(student); // { name: 'ienyh', age: 0, gender: 'male' }
proxy.age = 12;
console.log(student); // { name: 'ienyh', age: 12, gender: 'male' }

const ienyh = { name: "ienyh" };

// Object.freeze(ienyh);

if (Reflect.defineProperty(ienyh, "age", { value: 21 })) {
  console.log("设置成功");
} else {
  console.log("设置失败");
}

function fibonacci(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));
