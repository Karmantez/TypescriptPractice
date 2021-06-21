// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10);     // 숫자 10
// logText('10');   // 문자열 10
// logText(true);   // 진위값 true

// function logText<T>(text: T):T {
//   console.log(text);
//   return text;
// }
// logText<string>('hi');

/**
 * 📌 generic과 union의 차이점
 * 
 *    1. union을 통해 다양한 타입의 인수를 받을 수 있지만,
 *       내부에서 정확히 어떤 타입인지 알 수 없으므로 인텔리 센스가 모호하다.
 *    2. 반환값도 union으로 정해둔 타입들 중 하나가 될 수 있기 때문에
 *       엔진 입장에서는 명확한 타입을 지정할 수 없다.
 * @param text 
 * @returns 
 */
function logText(text: string | number) {
  console.log(text);
  return text;
}
logText('a');
logText(10);

// result는 문자열일수도 숫자일수도 있다.
const result = logText('a');

/**
 * 🎯 generic의 장점
 * 
 *    1. 호출하는 시점에 <타입>을 정의하여 유연하게 사용할 수 있다.
 *    2. 타입이 명확해지기 때문에 내부에서도 인텔리 센스가 잘 동작한다.
 *    3. 반환값의 타입도 하나로 결정된다.
 * @param text 
 * @returns 
 */
function genericText<T>(text: T): T {
  console.log(text);
  return text;
}
// result1은 문자열
const result1 = genericText<string>('hi');
// result2는 숫자
const result2 = genericText<number>(100);


// generic의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length)
//   return text;
// }
// logTextLength<string>(['hi']);

// generic의 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength('a');
logTextLength(100); // 100이라는 숫자는 length를 포함하지 않는다.


// generic의 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// 💡 ShoppingItem의 key 중 하나가 T가 된다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');
