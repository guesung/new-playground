export const name = "박규성"; // ESM 환경에서는 import/export를 모듈 번들러 없이 사용할 수 있다.

console.log(this); // ESM 환경에서 전역의 this는 undefined이다.

try {
  a = 5; // ESM환경은 기본적으로 엄격 모드이기에 var/let/const 키워드 없이 변수에 값을 할당하면 에러가 발생한다.

  console.log(a);
} catch (error) {
  console.log(error); // ReferenceError: a is not defined
}
