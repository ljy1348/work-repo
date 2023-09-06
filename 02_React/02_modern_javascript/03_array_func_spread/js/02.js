// 코딩 역사 : 구조적 프로그래밍(절차적)  대표 : c언어
//             -> 객체지향프로그래밍         : java, c++, js, python
//             -> 함수형프로그래밍          : 클로저 등
// foreach
// let myArr = [1,2,3,4,5];

// 향상된 for문
// for (const i of myArr) {
//     console.log(i);
// }
// 함수형 프로그래밍 함수 : foreach
// foreach : 자동으로 반복문을 실행함(배열의 길이까지)
// 사용법 : 배열변수.forEach((value)=>{반복문;})
// 용도 : 단순 출력용
// 특징 : 1) return 없음
//        2) break 문 못씀

//축약형
// let result = 0;
// myArr.forEach((value) => {
//     return result = value;
// })
// console.log(result)

// 기본형 - 값, 인덱스번호, 배열 <- 생략 가능
// myArr.forEach((value, index, array) => {
//     console.log(value)
//     console.log(index)
//     console.log(array)
// })

// 연습문제 1)
// let arr = [0,1,2,3,4,5,6,7,8,9,10];

// arr.forEach((value) => {
//     console.log(value)
// })

// // 연습문제 2)
// let strDummy = ["a","b","c","d","e"]

// strDummy.forEach((value) => {
//     console.log(value)
// })





