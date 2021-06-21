enum Shoes {
  // 💡 enum도 초기화가 가능
  // ex) Nike = '나이키',
  Nike,
  Adidas
}

let myShoes = Shoes.Nike; // 0

enum Answer {
  Yes = 'Y',
  No = 'N',
}
/**
 * enum 활용
 * @param answer 
 */
function askQuestion(answer: Answer) {
  if(answer === Answer.Yes) {
    console.log('정답입니다.');
  }
  if(answer === Answer.No) {
    console.log('오답입니다.');
  }
}
// 👍 예외 처리를 손쉽게 해결할 수 있다.
askQuestion(Answer.Yes);

/**
 * ❗ 다양한 예외케이스가 나올 가능성이 높다.
 * 대처하기 위해선 많은 코드가 작성되어야 한다.
 */
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');