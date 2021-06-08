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

const addThree = function (x, y, z) {
  console.log(x + y + z);
};

addThree.apply(null, [1, 2, 3]); // 6
addThree.call(null, 1, 2, 3); // 6
