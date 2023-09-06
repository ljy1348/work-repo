// 1) for문 안에 if문으로 짝수체크해서 더하기
// 입력 : 없음
// 출력 : 1 ~100까지 합계 구하는데
// 짝수의 합계를 구해서 출력하세요.
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     if (i%2 == 0) {
//         sum += i;
//     }   
// }
// document.querySelector("#output").innerHTML = sum;

// 2) 1 ~ 100까지 중 3의 배수의 합

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     if (i%3 == 0) {
//         sum += i;
//     }   
// }
// console.log(sum);

// 3) 1부터 n까지 합

// let input = Number(prompt("숫자를 입력하세요"));
// let sum = 0;
// for (let i = 1; i <= input; i++) {
//     sum += i;
// }
// console.log(sum);

// 4) 10개의 수 중 5의 배수가 있으면 그 중 하나만 출력하고, 없다면 0을 출력
// let input = prompt("문자를 입력하세요").split(" ").map(Number); //숫자 배열

// let count = 0;
// for (let i = 0; i < input.length; i++) {
//     if (input[i]%5 == 0) {
//         document.querySelector("#output").innerHTML = input[i];
//          count += 1;
//         break;
//     }
// }

// if (count === 0) {
// document.querySelector("#output").innerHTML = "0";
// }

// 5) 1부터 n까지 중 짝수의 합 구하기
// 입력예시 : 5
// 출력예시 : 6
// let n = Number(prompt("숫자를 입력하세요"));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     if (i%2 == 0){
//         sum += i;
//     }
// }
// document.querySelector("#output").innerHTML = sum;

// 6) 두 수 사이의 홀수 출력하기
// 입력   : 2 
// 입력 2 : 7
// // 출력예시 : 3 5 7
// let n1 = Number(prompt("첫번째 숫자를 입력하세요"));
// let n2 = Number(prompt("두번째 숫자를 입력하세요"));

// let max = Math.max(n1, n2);
// let min = Math.min(n1, n2);

// let result = "";

// for (let i = min; i <= max; i++) {
//     if (i%2 == 1) {
//         result += i+" ";
//     }
// }
// document.querySelector("#output").innerHTML = result;