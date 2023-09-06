// 1) 화살표 함수
// 함수 선언식
// function sum(a, b) {
//     return a + b
// }
// 함수 표현식 <- 함수를 변수처럼 처리한다. 사용법은 위와 같다.
// let sum = function (a, b) {
//     return a + b
// }

// 화살표 함수 변경
// 목적 : 코딩 단순화(함수 축약형)
// 축약식(함수 안이 1줄일때)
// let sum = (a,b) => (a+b);
// 기본형
// let sum = (a,b) => {return a+b};

// 예제 : 함수 선언식 -> 화살표 함수로 바꾸세요
// function double(n) {
//     return n * 2;
// }

// 2) 함수 표현식
// let double = function(n) {
//     return n * 2;
// }

// 화살표 함수(축약형)
// let double2 = (n) => n*2;


// 2줄 이상 함수
// function mySum (a, b) {
//     let result = a + b;
//     return result;
// }


// let mySum = (a, b) => {
//     let result = a+b;
//     return result;
// }

// console.log(mySum(1,2))

// 요약
// 1) 1줄      : (x,y,....) => 실행문;
// 2) 2줄 이상 : (x,y....) => {실행문; return 실행문2;}


// 연습문제
// 1) 함수 -> 화살표 바꾸기
// let sum = function(x,y) {
//     return x + y;
// }

// sum = (x,y) => x+y;

// 2) 함수 -> 화살표 바꾸기
// let pow = function(x) {
//     return x*x;
// }

// pow = (x) => x*x;

// 3) 함수 -> 화살표
// let sysHi = function() {
//     console.log("안녕하세요");
// }

let sysHi = () => console.log("안녕하세요");

// 4) 
// function hello(name) {
//     console.log("Hello, "+name+"!");
// }

let hello = (name) => console.log("Hello, "+name+"!");

// 5)
// function fun2() {
//     let call = prompt('이름이 뭐니~?', "");
//     return alert(call+"~! 반갑다~!");
// }

let fun2 = () => {
    let call = prompt('이름이 뭐니~?', "");
    return alert(call+"~! 반갑다~!");
}

// 6)
// function checkAge(age) {
//     if(age > 20) {
//       alert("성인입니다.");
//     } else if(age > 15) {
//       alert("청소년입니다");
//     } else {
//       alert("어린이입니다.");
//     }
//   }
//   checkAge(21);

  let checkAge = (age)  => {
    if(age > 20) {
      alert("성인입니다.");
    } else if(age > 15) {
      alert("청소년입니다");
    } else {
      alert("어린이입니다.");
    }
  }
  checkAge(21);







