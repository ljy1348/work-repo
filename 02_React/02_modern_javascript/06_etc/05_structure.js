// 모던 자바스크립트(ECMAScript) 신기능
// todo 1)배열 구조분해 할당 : 가독성 증가(향상)
// 일반적 코딩
// 변수명만 보고 추측이 가능하게 이름을 짓는것이 좋음
// let arr = [1,2]; // 숫자 배열
// console.log(arr[0], arr[1]); // 출력 : 1,2

// 구조분해 할당
// let [firstNum, secondNum] = [1,2];
// console.log(firstNum, secondNum);

// let [fa, fa2] = [{
//     name : "안녕",
//     age : 10
// }, {
//     name : "fa2",
//     age : 20
// }]

// console.log(fa,fa2);

// 연습문제 1) 배열 구조분해 할당 문제
// todo 사용법 : let [변수명1,변수명2,...] = [배열값1, 배열값2,....]
// let array = ["hello", "node","react"];
//todo : 구조분해 할당
// let [arr1,arr2,arr3]=array;
// console.log(arr1,arr2,arr3);

// todo 객체 구조 분해 할당
// todo 객체의 속성 값을 분해해서 다른 변수에 저장
// 예제
// 일반
// let candyMachine = [{
//     name : "캔디",
//     count : 5
// }, {
//     name : "캔디2",
//     count : 10
// }]
// console.log(candyMachine);
// 객체 구조 분해 할당
// 사용법 : let {속성명, 속성명2....} = {속성명:값, 속성명2:값,...}
// let {속성명} 에서 속성명은 객체 안에 있는 속성명이랑 같아야 값을 가져올 수 있다.
// 만약 객체 안에 없는 속성명이라면 undefined가 나온다.
// let {name, count} = candyMachine[1];
// console.log(name,count);

// 연습문제 2) 객체 구조분해 할당 문제
// 아래와 같이 객체가 있습니다. 구조분해 할당 이용해서 출력하세요
let dept = {
    no : 1,
    dname : "Sales",
    loc : "부산"
};
let {no, dname, loc} = dept;
console.log(no, dname, loc);

