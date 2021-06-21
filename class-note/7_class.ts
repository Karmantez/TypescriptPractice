class Person {

  // 💡 typescript는 constructor 위에 type을 지정해줘야 함.
  // 접근제한자도 지정가능
  private name: string;
  public age: number;
  // 값에대해 접근만 가능하고 변경은 불가능
  readonly log: string;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}