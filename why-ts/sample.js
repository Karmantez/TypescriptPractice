// function sumJS(a, b) {
//     return a + b;
// }
// sumJS(10, '20');  // 오류 없이 "1020" 의 문자열이 반환된다.

//@ts-check

/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 * @returns {number} a + b 반환
 */
function sumJS(a, b) {
    return a + b;
}
//sumJS(10, '20'); // JS doc을 통해 타입을 지정해도 오류가 발생하지 않는다.

// 만약 위처럼 @ts-check을 쓰게되면 typescript 사용과 동일하게 오류가 발생한다.
// 하지만 JS doc과 @ts-check을 쓰면 코드가 길어지고 가독성이 좋지 않다.
// 🎯 그래서 결론은 typescript 쓰는 것이 좋다.