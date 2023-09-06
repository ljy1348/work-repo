// spread(스프레드 연산자) 연산자
// 리액트에 많이 나옴

// 1) 배열의 복사 : 원본을 훼손하지 않음(*)
// let arr1 = [1,2,3,4,5];
// // [1,2,3,4,5,6,7,8,9] <- 만든다.

// 사용법 : ...배열변수; //배열값을 복사함;
// let arr2 = [...arr1, 6,7,8,9];

// console.log(arr2);

// 예제 2)
// let str1 = "paper block";
// let str2 = [...str1];
// console.log(str2);

// 예제 3)
// let str1 = "paper";
// let str2 = "block";
// let str3 = [...str1," ",...str2];
// console.log(str3);

// 향상된 for문 : 인덱스번호 자동증가
// let arr = [1,2,3,4,5,6];

// console.log("일반");
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log("향상");
// arr 배열의 끝까지 인덱스 번호를 1씩 증가시키면서 반복함
// for (const i of arr) {
//     console.log(i); // i : 배열의 값;   
// }

// --------------------------------------------
// 함수 에서의 spread 연산자 사용 예
// 1) 함수 매개변수 : rest 연산자(==스프레드 연산자)
// function add(...rest) {
//     let sum = 0;
//     for (const item of rest) {
//         sum = sum + item; // item == 배열의(매개변수들의) 값
//         // 용도 : 매개변수들을 모두 더해서 합계를 구하는 함수
//     }
//     return sum;
// }
// console.log(add(1))
// console.log(add(1,2))

// 2)내장 함수에서의 스프레드 연산자 응용
// 아래에서 최소값 구하세요
// let numbers = [9,4,7,1];
// let result = Math.min(...numbers)
// console.log(result);

// 3)객체에서 스프레드 연산자 사용
// let a = {
//     name : "철수",
//     species : "humsn"
// }
// // 사용법 : ...객체 변수
// let currentState2 = {...a, age:10};
// console.log(currentState2)

// 4)객체 수정
let a = {
    name : "철수",
    species : "humsn"
}
// 사용법 : ...객체 변수
let currentState2 = {...a, age:10};
console.log(currentState2)
// 객체에 속성이 없으면 추가되고 있으면 수정됨
currentState2 = {...a, age:12};
console.log(currentState2)



















