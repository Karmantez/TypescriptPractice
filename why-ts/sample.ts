function sumTS(a: number, b: number): number {
    return a + b;
}
//sumTS(10, '20');  // parameter가 number 형으로 받기 때문에 오류가 발생한다.

// typescript 덕분에 해당 타입이 제공하는 메소드들을 바로 확인할 수 있다.
// intellisence
let result = sumTS(10, 20);
result.toLocaleString();

/**
 * 📌 Typescript를 쓰게 되면...
 * 
 * 1. error의 사전방지
 * 2. 코드 가이드 및 자동화로 인한 개발시간 단축
 */