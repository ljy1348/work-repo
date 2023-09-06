// 함수 문제 풀이
// 연습문제 1
// 함수를 사용해서 출력하세요
// 입력 : 10
// 출력 : 20

// function plus () {
//     let input = Number(prompt("정수를 입력하세요"));
//     return input+10;
// }

// alert(plus());

// 연습문제2
// 짝수이면 "even" 출력하고, 홀수이면 "odd"출력하세요
// 입력 : 2
// 출력 : even

// function even () {
//     let input = Number(prompt("정수를 입력하세요"));
//     if (input%2 == 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// }

// alert(even());


// 연습문제3
// 함수를 이용해서 아래를 작성하세요.
// 1 ~ 10까지의 합을 출력하세요

// function sum (input) {
//     let sum = 0;
//     for (let i = 1; i <= input; i++){
//         sum += i;
//     }
//     return sum;
// }

// let input = Number(prompt("정수를 입력하세요"));
// alert(sum(input));

// 4)함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 3
// 출력 : 1
// 최소값 구하기

// function low (input1, input2, input3) {
//     alert(Math.min(input1, input2, input3));

// }

// let input1 = Number(prompt("첫번째"));
// let input2 = Number(prompt("두번째"));
// let input3 = Number(prompt("세번째"));

// low(input1, input2, input3);

// 5) 5의 배수이면 "5의 배수이다" 출력
//    아니면 "5의 배수가 아니다" 출력

// function a (input) {
//     if (input%5 == 0) {
//         alert("5의 배수이다")
//     } else {
//         alert("5의 배수가 아니다")
//     }
// }

// let input = Number(prompt("정수를 입력하세요"))
// a(input)


// 6) 3가지 숫자를 입력받아 합계와 평균 구하기
// 입력 : 80


function sum(input1, input2, input3) {
    let sum = input1+input2+input3
    return sum;    
}

function average(input1, input2, input3) {
    return (input1+input2+input3)/3
}

let input1 = Number(prompt("첫번째"));
let input2 = Number(prompt("두번째"));
let input3 = Number(prompt("세번째"));

let sum2 = sum(input1, input2, input3);
let average2 = average(input1, input2, input3);

console.log("합계 : "+sum2, "평균 : "+average2);