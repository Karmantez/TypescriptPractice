function Person(name, age) {
  this.name = name;
  this.age = age;
}
let capt = new Person('capt', 100);

Person.prototype.test = function() {

  const temp = document.createElement('div');
  temp.addEventListener('click', () => {
    console.log(this);
  })
}

// ES2015 (ES6)
// class Person {
//   // class logic
//   constructor(name, age) {
//     console.log('생성 되었습니다.');
//     this.name = name;
//     this.age = age;
//   }
// }

let empty = new Person();
// let hi = new Person('하이', 100);

console.log(empty);
// console.log(hi);