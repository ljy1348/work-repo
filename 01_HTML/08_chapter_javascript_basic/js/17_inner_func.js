// 자바 스크립트 유용한 내장함수들 소개
// todo 1) toFixed() : 소수점 자르기 함수
// 사용법 : 변수명.toFixed(자리수);
// let x = 12.549594;
// let xFiexd = x.toFixed(2);

// 2) 문자열 -> 숫자로 바꾸기 함수
// let x = "10.33";
// let num = Number(x); //<= x를 숫자로 바꾸기
// let num2 = parseInt(x); //<= x를 숫자로 바꾸기

// 참고 : 이렇게 사용하지 말기
// let x = "apple"
// console.log(Number(x)); //<- 숫자로 변경 불가 = 에러발생

// 3) 배열을 모두 문자열로 변경하기
// 사용법 : 배열변수명.toString();
// let arr = ["a", "b", "c"];
// console.log(arr.toString());

// 자료형 확인 함수
// typeof(변수명)
// console.log(typeof(1));

// 4)배열의 길이 : 배열변수.length (반복문에 많이 사용)
// let arr = ["a", "b", "c"];
// console.log(arr.length);

// 5) 배열 정렬 함수 : 오름차순, 내림차순
// 문자열 대상 정렬
// let animals = ["사자", "호랑이", "사슴", "펭귄"];
// animals.sort();
// console.log(animals);

// 배열 뒤집기
// animals.reverse();
// console.log(animals);

// 숫자 대상 정렬
// let arr = [3, 5, 1, 4];
// arr.sort();
// console.log(arr);

// 6) 문자열 자르기 함수
// 사용법 : 문자열.substring(시작인덱스번호, 끝인덱스번호);

// let str = "안녕하세요. 홍길동입니다."
// let str2 = str.substring(0, 6);
// console.log(str2);

// 7) 문자열 바꾸기 함수
// 사용법 : 문자열.replace(/대상문자/g, "바꿀문자");

// let str = "안녕하세요. 전 홍길동입니다.";
// let str2 = str.replace(/하세요/g, "");
// console.log(str2);

// 8) 대소문자 바꾸기 함수
// toUpperCase, toLowerCase;

// let str = "Have a Nice Day!";

// let str2 = str.toUpperCase();
// console.log(str2);

// let str3 = str.toLowerCase();
// console.log(str3);

// 9) 문자열 자르기 : split(구분자);

// 10) 수학함수
// Math.max = 최댓값, Math.min = 최솟값
// 반올림(첫째자리) : Math.round(실수) -> 반올림된 정수
// 올림(첫째자리) : Math.ceil(실수) -> 올림된 정수
// 내림(첫째자리) : Math.floor(실수) -> 내림된 정수
// console.log(Math.floor(3.4));
// 절대값 : Math.abs(음수) -> 양수
// 제곱 : Math.pow(숫자, 제곱수);
// 제곱근 : Math.sqrt(숫자);



