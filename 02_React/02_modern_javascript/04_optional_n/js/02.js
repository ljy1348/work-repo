// 옵셔널 널리쉬
// 1) 용도 : 객체나 함수에 대해 접근할 때 사용
// why? 자바스크립트 / 자바 언어의 문제점
// 소스에서 값이 null이 나오면 프로그램이 비정상 종료가 됨
// null 에러를 회피해서 코딩을 전통적으로 했음
// 예)
let num = null;
// 미리 변수의 값에 null이 있는지 체크했음
if (num == null) {
    console.log("이 기능은 실행하지 않습니다.")
}

// 개선된 예제 : 옵셔널 널리쉬 사용
// 사용법 : 변수명?.속성명
let user = null; // 객체, adress 속성이 있는지 없는지 체크
// uesr가 null이면 강제로 undefined값으로 변경함
// 객체의 속성 호출 : uesr.address => user = null;
//                   null.address (에러 : 서비스 다운)
console.log(`user는 ${user?.address}`);

// github든 다른 디스크든 모두 고장으로 인해 삭제 될 가능성 있음.
// 백업본을 항상 간직하여야 한다.


