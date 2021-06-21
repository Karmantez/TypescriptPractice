// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }
// sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}
// 지정된 parameter 개수보다 더 넣게 되면 오류 발생
// sum(10, 20, 30, 40);

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {
  // somethig...
}
// 두 번째 parameter는 optional 이므로 오류가 발생하지 않음
log('hello world');