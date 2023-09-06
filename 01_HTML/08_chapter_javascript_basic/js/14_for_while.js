// 반복문 : for(80%) === while 문
// 예제 1) 
// 입력 : 없음
// 출력 : 안녕하세요 5번 출력

// todo while
// let i = 1; 
// while ( i <= 5) {   //조건식
//     console.log("안녕하세요")
//     i++;
// }

// todo do ~ while
// 특징 : 조건식이 거짓이라도 1번은 실행함

// todo 반복문 특수형태 : 무한루프
// 사용법 
// while (true) {
// 실행문
//  조건문 {        //무한 반복을 그만둘 조건식
//  break;
//  }
// } 

// if (;true;) {
//  실행문 
// if (조건문) {    //무한 반복을 그만 둘 조건식
// break;
// }

// 문제1) 숫자를 입력하면 이미지를 화면에 그 숫자만큼 반복해서 출력하세요

let num = 5;

for (let i = 0; i < num; i++){
document.querySelector("#output").innerHTML += "<img src='./img/fish.jpg'>";
}



