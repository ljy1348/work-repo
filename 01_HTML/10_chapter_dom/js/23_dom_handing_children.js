// todo 자식 요소 접근
// 선택함수 : querySelector(css선택자)
let ulTag = document.querySelector("ul");
// 사용법 : 태그.children[] <- 자식이 여러개 일수 있으므로 배열 형태로 저장
//          태그.children[1] <- 두번째 li
let two = ulTag.children[1].innerHTML;
let three = ulTag.children[2].innerHTML;

console.log(two);

// 첫번째 자식요소와 마지막 자식요소 접근
let one = ulTag.firstElementChild.innerHTML; //첫번재 li 텍스트
let last = ulTag.lastElementChild.innerHTML; //마지막 li 텍스트



