interface Person {
  name: string;
  age: number;
}

// type Person = {
//   name: string;
//   age: number;
// }

let myeongsoo: Person = {
  name: '명수',
  age: 50
}

/**
 * 💡 Type과 Interface의 차이
 * 
 *    ▶ Type
 *      타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라,
 *      정의한 타입에 대해 나중에 쉽게 참고할 수 있도록 이름을 부여하는 것.
 * 
 *    ▶ Interface
 *      타입 별칭과의 가장 큰 차이점은 타입의 확장 가능/불가능 여부이다.
 *      인터페이스는 확장이 가능하나 타입은 불가능하다.
 * 
 *    🎯 가능한 type보다는 interface를 사용하자. (공식문서)
 */