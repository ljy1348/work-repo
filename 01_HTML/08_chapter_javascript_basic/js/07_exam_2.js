// 1) 입력된 단어를 입력된 횟수만큼 반복해 출력하세요
// 입력 1 : love
// 입력 2 : 3
// 출력 : lovelovelove

// let inputString = prompt("단어를 입력하세요");
// let inputNumber = Number(prompt("숫자를 입력하세요"));
// let output = "";
// for (let i = 1; i <= inputNumber; i++) {
//     output += inputString;
// }
// console.log(output);

// 2) 입력 : 없음
// 출력 : "!@#$%^&*()"
// console.log('"!@#$%^&*()"');

// 3) 입력 : 없음
//    출력 : "C:\Download\hello.cpp"
// console.log('"C:\\Download\\hello.cpp"')

// 4) 입력 : 1.414213
// let char = Number(prompt("입력하세요"));
// // let char = "1.414213";
// console.log(char);

// 5) 입력 : 1.59254
// 출력 : 1.59
// 힌트 : 소수점 자르기 함수 : 숫자.toFixed(자를자리수)
// let char = Number(prompt("입력하세요"));
// console.log(char.toFixed(2));

// 6) 입력 : 125
// 출력 : 125 125 125
// let char = [];
// char1 = Number(prompt("입력하세요"));
// char[0] = char1
// char[1] = char1
// char[2] = char1
// console.log(char[0]+" "+char[1]+" "+char[2]);

// 배열 : 여러가지 값을 저장하는 장소, 변수명 동일하게 사용
// 사용법 : 변수명[인덱스번호]
// 예) a[0] = 1, a[1] = 2, .......
// a[0] === a라는 변수의 0번 방에 1이라는 값이 들어가있음
// a[1] === a라는 변수의 1번 방에 2이라는 값이 들어가있음

// 예제 7) 입력 = 1 2
//         출력 = 1 2
// 문자열 자르기 함수 : 문자열.split("자를문자");
// 예) let arr = prompt("두 정수를 입력해 주세요").split(" ");
// arr이 배열이 되고 arr[0]에는 공백 기준으로 앞에 문자, arr[1]에는 공백 기준으로 뒤의 문자가 들어감.

// let arr = "안녕 하세요 1 2 3";
// arr = arr.split(" ");
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// 7) 입력 : A B
//    출력 : B A

// let input = prompt("입력하세요").split(" ");
// console.log(input[1]+" "+input[0]);

// 8) 입력 : 3:16
//    출력 : 3:16
// let input = prompt("입력하세요");
// console.log(input);

// 9) 입력 : 2013.8.5
//    출력 : 2013.05.05

// let input = prompt("입력하세요");
// input = input.split(".");
// console.log(input[0]+".0"+input[1]+".0"+input[2]);

// 10) 입력 : 000907-1121112
//     출력 : 0009071121112

// 문자열 뒤에서 자르기
// 문자열.slice(-숫자);

// let input = prompt("입력하세요");
// input = input.split("-");
// console.log(input[0]+input[1]);

// 11) 입력 : Programing is very fun!!
//     출력 : Programing is very fun!!

// let input = prompt("입력하세요");
// console.log(input);

// 12) 입력 : 1.414213
//     출력 : 1

// let num = Number(prompt("입력하세요"));
// let num = 1.414213;
// console.log(num.toFixed(0));

// 13) 입력 : Boy
//     출력 : 'B'
//            'o'
//            'y'

// let boy = prompt("입력하세요");
// let boy = "Boy";
// console.log("'"+boy[0]+"'")
// console.log("'"+boy[1]+"'")
// console.log("'"+boy[2]+"'")

// 14) 두 정수의 합을 출력한다.
// 입력 1 : 2147483648
// 입력 2 : 2147483648
// 출력 : 4294967296

// let num = Number(prompt("입력하세요"));
// let num2 = Number(prompt("입력하세요"));
// console.log(num+num2);

// 15) 입력 : 75254
//      숫자 문자열 : "75254"
//      "75254" == "7" + "5" + "2"...
// let input = Number(prompt("숫자를 입력하세요"));
// let input = "75254"


// let num1 = '"'+input[0]+'"'
// let num2 = '"'+input[1]+'"'
// let num3 = '"'+input[2]+'"'
// let num4 = '"'+input[3]+'"'
// let num5 = '"'+input[4]+'"'

// console.log('숫자 문자열 : "'+input+'"');
// console.log('"'+input+'" == '+num1+" + "+num2+" + "+num3+" + "+num4+" + "+num5)
// console.log("["+input[0]+"0000]")
// console.log("["+input[1]+"000]")
// console.log("["+input[2]+"00]")
// console.log("["+input[3]+"0]")
// console.log("["+input[4]+"]")

