function Person() {}
console.log(Person.prototype.constructor); // [Function: Person]
console.log(Person.prototype.constructor === Person); // true

const ienyh = new Person();
console.log(Person.prototype);
// {
//   constructor: ƒ Person(),
//   __proto__: Object
// }
console.log(ienyh.__proto__ === Person.prototype); // true

function Parent() {
  this.parentProperty = "Parent";
}

function Child() {
  this.childProperty = "Child";
}

Child.prototype = new Parent();
Child.prototype.childFunc = function () {
  return "childFunc";
};

const child = new Child();

console.log(child.parentProperty); // Parent
console.log(child.__proto__.__proto__ === Parent.prototype); // true
console.log(child.__proto__.__proto__.__proto__ === Object.prototype); // true
