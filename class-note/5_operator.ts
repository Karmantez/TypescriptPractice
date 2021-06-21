// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// 💡 union type
//    특정 parameter의 타입을 여러개 쓸 수 있도록 해줌
function logMessage(value: string | number) {
  // 📌 타입 가드
  //      특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
  if(typeof value === 'number') {
    // type이 지정되기 때문에 자동완성(intellisence)가 number에 맞춰서 나타난다.
    value.toLocaleString();
  }
  if(typeof value === 'string') {
    value.toString();
  }
}
logMessage('hello');
logMessage(100);

// union type 예제
let test: string | number | boolean;
test = true;


interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

/**
 * Union type의 특징
 * @param someone 
 */
function unionType(someone: Developer | Person) {
  /**
   * 🎯 Develper, Person이 가지고 있는 변수에 접근할 수 있을 것 같지만,
   *     공통된 속성(name)만 접근할 수 있다.
   */
  someone.name;
  // ❗ 이 때 타입가드가 필요하다.
  // someone.skill;
  // someone.age;
}

/**
 * Intersection type의 특징
 * @param someone 
 */
function intersectionType(someone: Developer & Person) {
  /**
   * 🎯 Intersection type은 Union type과 다르게 해석된다.
   *     "|" => "&"으로 바뀌는데, 이 뜻은 Developer의 변수와 Person의 변수를 모두 가지는
   *     하나의 새로운 타입으로 해석한다.
   *     그래서 Union type의 예제와 다르게 아래의 someone object는 Developer, Person의 변수를
   *     다 가지고 있다고 나오고 오류가 발생하지 않는다.
   */
   someone.name;
   someone.skill;
   someone.age;
}

// union type은 Developer OR Person의 객체를 주면된다.
unionType({name: '디벨롭퍼', skill: '웹 개발'});
unionType({name: '캡틴', age: 100});

// ❗ 그러나 intersection은 Developer + Person 합친 상태를 넘겨줘야 한다.
intersectionType({name: '디벨롭퍼', skill: '웹 개발', age: 100});