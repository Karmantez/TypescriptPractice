/**
 * interface는 상호간의 약속을 의미한다.
 */
interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let jaesuk: User = {
  age: 48,
  name: '재석'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

let haha = {
  age: 41,
  name: '하하'
};
getUser(haha);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number) {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10;

// interface dictionary pattern
// key는 string이고 value은 RegExp
interface StringRegexDictionary {
  [key: string]: RegExp
}

let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// 'string' 형식은 'RegExp' 형식에 할당할 수 없습니다.
// obj['cssFile'] = 'a';


// interface extension
interface Person {
  name: string;
  age: number;
}

// Java처럼 상속이 가능
interface Developer extends Person {
  // name: string;
  // age: number;
  language: string;
}

let hongchul: Developer = {
  language: 'ahhaha',

  age: 41,
  name: '홍철'
}