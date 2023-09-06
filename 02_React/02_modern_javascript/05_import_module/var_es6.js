// 모듈 (module) : html / css / js (파일을 각각 분리하여 코딩함)
// html 안에 css / js 문법이 혼재하고 있으면 가독성이 떨어짐
// 각각의 파일로 분리해서 코딩함 (모듈화)
// js 모듈 : 자바스크립트 끼리 긴것들은 분리해서 코딩하는 것
// why? 가독성을 높이기 위해
// inport : 다른 js파일에서 변수/함수를 가져오기 기능
// export : 다른 js파일에서 사용할 수 있도록 일부 기능을 내보내기
// 단, export 된 변수/함수만 import할 수 있음.

const odd = "홀수입니다.";
const even = "짝수입니다.";
const hello = () => console.log("안녕하세요");

// 위의 상수 2개/함수 1개 내보내기(export)
// 사용법 : export {변수, 변수2, ..., 함수, 함수2...}
export {odd, even, hello};
