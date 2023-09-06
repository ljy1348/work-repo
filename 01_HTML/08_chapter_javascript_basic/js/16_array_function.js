// 배열의 자바스크립트 내장함수들 소개
// todo 
// 1) 두 배열 합치기 함수
// 사용법 : 배열변수.concat(배열변수2);

// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6];
// let arrSum = arr1.concat(arr2);

// console.log(arrSum);

// 2) 배열 내에 구분자를 이용해서 붙이기 함수
// 사용법 : 배열변수.join(구분문자열)

// let str = arr1.join("a");
// console.log(str);

// 3) push() : 새로운 값을 배열의 뒤에 추가하는 함수
// 사용법 : 배열변수.push(값, 값2, .... 값n);

// let nums = [1, 2, 3];
// nums.push(4,5);
// console.log("nums", nums);

// 4) pop() : 마지막 값을 꺼내서 원본배열에서 제거하는 함수
// let chars = ["a", "b", "c"];
// chars.pop();
// console.log("chars", chars);

// 5) 기타 : .push(값) (배열의 마지막에 추가)
            // .unshift(값) (배열의 앞에 추가)
            // .pop() (배열의 마지막 값을 제거)
            // .shift() (배열의 처음값을 제거)

// 6) 배열의 수정
// let nums = [1,2,3,4,5];
// nums[0] = 10;
// console.log(nums[0]);

// 7) 배열의 복사 : 배열변수명.slice(복사할_시작 인덱스 번호, 복사할 끝 인덱스 번호);
// 결과 : [시작 인덱스 번호의 값 ~ 끝 인덱스 번호-1의 값]

// let arr = [1,2,3,4,5,6,7,8]
// let arr2 = arr.slice(2,6);
// console.log(arr2);
