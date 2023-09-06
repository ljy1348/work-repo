// 1) 부호를 바꾸어 출력한다.
// 입력 : -1
// 출력 : 1

// let num = "-1"
// // let num = Number(prompt("입력하세요"));
// num = Number(num);

// console.log(num * -1);

// 2) 입력 : -2147483649
//    출력 : -2147483649

// let num = Number(prompt("입력하세요"));
// let num = -2147483649
// console.log(num)

// 3) 정수 2개 입력된다. a를 b로 나눈 몫을 출력한다.
// 입력 1(a) : 1
// 입력 2(b) : 3
// 출력 : 0
// let num1 = Number(prompt("입력하세요"));
// let num2 = Number(prompt("입력하세요"));
// let num1 = 1
// let num2 = 3
// let result = num1/num2
// console.log(result.toFixed(0))
// parseInt(정수가 아닌 값) -> 정수

// 4) 정수 2개 입력된다. a를 b로 나눈 나머지를 출력한다.
// 입력 1(a) : 10
// 입력 2(b) : 3
// 출력 : 1

// let num1 = Number(prompt("입력하세요"));
// let num2 = Number(prompt("입력하세요"));
// let num1 = 10
// let num2 = 3
// let result = num1%num2
// console.log(result.toFixed(0))

// 5) 입력된 정수에 1을 더해 출력한다.
// 입력 : 2147483647
// 출력 : 2147483648

// let num1 = Number(prompt("입력하세요"));
// let num1 = 2147483647;
// console.log(num1 + 1);


// 6) 정수 2개 입력받아 자동 계산하기
// 합, 차, 곱, 몫, 나머지 순으로 출력하시오.

// let num1 = Number(prompt("입력하세요"));
// let num2 = Number(prompt("입력하세요"));
// let num1 = 10;
// let num2 = 3;
// console.log(parseInt(num1+num2));
// console.log(parseInt(num1-num2));
// console.log(parseInt(num1*num2));
// console.log(parseInt(num1/num2));
// console.log(parseInt(num1%num2));

// 7) 정수 3개 입력받아 합과 평균 출력하기
// 입력 1 : 1
// 입력 2 : 2
// 입력 3 : 3

// let num1 = Number(prompt("입력하세요"));
// let num2 = Number(prompt("입력하세요"));
// let num3 = Number(prompt("입력하세요"));
// let num1 = 1;
// let num2 = 2;
// let num3 = 3;

// console.log("합 = "+(num1+num2+num3)+"\n평균 = "+(num1+num2+num3)/3);

// 8) 정수 1개 입력받아 2배 곱해 출력하기(설명)
// 입력 : 1024
// 출력 : 2048

// let num = 1024;
// console.log(num*2);

// 9) 두 정수(a,b) 입력받아 비교하기1(설명)
// a가 b보다 큰 경우 1을, 그렇지 않은 경우 0을 출력한다.
// 입력 1(a): 9
// 입력 2(b): 1

// let num1 = Number(prompt("입력하세요"));
// let num2 = Number(prompt("입력하세요"));
// let num1 = 1;
// let num2 = 3;

// if (num1 == num2) {
//     console.log(1);
// } else {
//     console.log(0);
// }



// 10) 참 거짓 바꾸기
// 입력된 값이 0이면 1, 1이면 0을 출력한다.
// 단, 0 또는 1만 입력된다.

// let num1 = Number(prompt("입력하세요"));
// let num1 = 1;
// if (num1 == 1) {
//     console.log(0);
// }
// if (num1 == 0) {
//     console.log(1);
// }

// 11) 정수 3개 입력받아 가장 작은 수 출력하기(설명)
// 가장 작은 값을 출력한다.
// 입력 1: 3
// 입력 2: -1
// 입력 3: 5
// 출력 : -1
// 힌트 : Math.min(값1, 값2....) : 최소값, Math.max(값1, 값2....) : 최대값


// let num1 = Number(prompt("입력하세요"));
// let num2 = Number(prompt("입력하세요"));
// let num3 = Number(prompt("입력하세요"));
// let num1 = 1;
// let num2 = 2;
// let num3 = 3;

// console.log(Math.min(num1,num2,num3));
// console.log(Math.max(num1,num2,num3));


// 12) 정수 3개 입력받아 짝수만 출력하기
// let num1 = Number(prompt("입력하세요"));
// let num2 = Number(prompt("입력하세요"));
// let num3 = Number(prompt("입력하세요"));
// let num1 = 1;
// let num2 = 2;
// let num3 = 4;

// if ((num1%2) == 0) {
//     console.log(num1);
// }
// if ((num2%2) == 0) {
//     console.log(num2);
// }
// if ((num3%2) == 0) {
//     console.log(num3);
// }

// 13) 정수 3개 입력받아 짝/홀 출력하기
// let num1 = Number(prompt("입력하세요"));
// let num2 = Number(prompt("입력하세요"));
// let num3 = Number(prompt("입력하세요"));
// let num1 = 1;
// let num2 = 2;
// let num3 = 8;

// if ((num1%2) == 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }
// if ((num2%2) == 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }
// if ((num3%2) == 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }

// 14) 점수(정수, 0 ~ 100)를 입력받아 평가를 출력해보자.
// 평가 기준
// 점수 범위 : 평가
//  90 ~ 100 : A
//  70 ~   89 : B
//  40 ~   69 : C
//    0 ~   39 : D
// 로 평가되어야 한다.
// 입력 : 73
// 출력 : B

// let num1 = Number(prompt("입력하세요"));
// if (num1 <=100 && num1 >= 90) {
//     console.log("A");
// } else if (num1 <=89 &&num1 >= 70) {
//     console.log("B");
// } else if (num1 <=69 && num1 >= 40) {
//     console.log("C");
// } else if (num1 <=39 && num1 >= 0) {
//     console.log("D");
// }

// 15) 평가 출력
// 평가 : 내용
// A : best!!!
// B : good!!
// C : run!
// D : slowly~
// 나머지 문자들 : what?
// 입력 : A
// 출력 : best!!!

// let input = prompt("입력하세요");

// if (input === "A") {
//     console.log("best!!!");
// } else if (input === "B") {
//     console.log("good!!");
// } else if (input === "C") {
//     console.log("run!");
// } else if (input === "D") {
//     console.log("slowly~");
// } else {
//     console.log("what?");
// }

/* 16) 정수판별
양수이면 양수, 음수이면 음수, 0이면 0을 출력하시오.
*/
// let num1 = Number(prompt("입력하세요"));

// if (num1 > 0) {
//     console.log("양수");
// } else if (num1 < 0) {
//     console.log("음수");
// } else if (num1 === 0) {
//     console.log(0);
// }

// 17) 비만도 측정 0
// BMI 수치   비만 판정
// ~10 이하   정상
// 11~20 이하   과체중
// 20 초과   비만
// 비만도를 입력받아서 위의 문자열로 출력하세요
// 입력 : 15 
// 출력 : 과체중

// let num1 = Number(prompt("입력하세요"));

// if (num1 <= 10) {
//     console.log("정상");
// } else if (num1 <= 20) {
//     console.log("과체중");
// } else if (num1 > 20) {
//     console.log("비만");
// }

