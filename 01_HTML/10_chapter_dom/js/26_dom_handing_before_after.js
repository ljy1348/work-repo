let tag = document.querySelector(".two");


// 이동할 태그
let move = document.querySelector(".movingTag");
// 선택한 요소의 앞에 추가 : 문자열/태그 모두 이동 가능
// todo 사용법 : 태그.before(이동할 태그); <- 이동할 태그가 기준 태그의 앞(위)으로 이동
// tag.before(move);
// todo 사용법 : 태그.after(이동할 태그); <- 이동할 태그가 기준 태그의 뒤(아래)로 이동
tag.after(move);

// todo : 자바스크립트 특징 : 스크립트 언어, line by line 으로 실행됨(컴파일 없음)
// line by line : 1라인을 읽으면 문법 해석 -> 바로 실행
// 컴파일 언어 vs 스크립트 언어 속도 차이 : 컴파일 언어 빠름, 미리 문법해석함 -> 바로실행


