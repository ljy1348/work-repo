// node : 비동기 기능이 있다(성능증가);
// 자바스크립트 코딩(비동기 프로그래밍 한다);
// 동기 : 문제가 주어졌을때 답변을 받아야 다음으로 넘어간다
//        -> 순차적 진행
// 비동기 : 문제가 주어지고 답변을 받지 않고 다음으로 넘어간다.
//          결과가 먼저 처리한 곳에서 주는대로 실행함.
//         -> 비순차적 진행
// 비동기 장점 : 동기식 보다 성능 향상
//       단점 : 순서에 맞는 결과가 중요하면 결과가 꼬일 수 있음
//       단점 예) 은행 계좌 : 입금, 출금(비동기 시 입금 되기 전에 출금될 수 있음)
//       (해결책) promise를 이용 : 순서에 입각해서 실행을 할 수 있음
//  참고 - 동기 : 요청한 순서대로 결과가 옴 (c언어 등)
//         비동기 : 요청한 순서와 상관 없이 결과가 나오는대로 결과값 반환됨. (자바 스크립트 등)
// 예제 :
// todo 일반적 
// // 1st 순서
// console.log("학교에 갑니다.");
// // 2nd 순서
// // setTimeout - 일정시간동안 지연시킨 후 실행
// // 사용법 : setTimeout(() => {실행문}, 지연시간(ms));
// setTimeout(() => {
//     console.log("학교에 도착했습니다.");
// }, 1000);
// // 3rd 순서
// console.log("열심히 코딩을 합니다.")


// todo promise로 해결
var goSchool = new Promise((resolve, reject) => {
    // 2초 지연 함수 : Promise 객체에 넣음
    setTimeout(function() {
        console.log("학교에 도착했습니다.");
        // resolve() : 결과 성공했다는 확인 함수
        resolve();
    }, 2000);
});


// 1st 실행
console.log("학교에 갑니다.");
// 2nd 실행 : 비동기 코딩(순서를 지켜 출력시키기)
goSchool.then(() => {
    // goSchool 안의 함수가 실행이 끝나면 아래 실행문이 실행되게 보장함(then() 함수)
    console.log("열심히 코딩을 합니다.");
})
// 프라미스 객체 안에 실행이 성공하면 then()이 자동으로 실행되는 구조임
// 프라미스 결과는 언제 올지 모름(비동기)
// 실패한다면?





