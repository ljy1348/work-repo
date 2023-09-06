// todo 선택한 자기자신 삭제
let tag = document.querySelector(".one");

// 자기 자신 삭제 사용법 : 태그.remove()
tag.remove()

// todo2 부모의 자식중 1개 삭제
let ulTag = document.querySelector("ul");
// 삭제할 자식 태그 선택
let removeTarget = document.querySelector(".removeTarget");
// 사용법 : 부모태그.removeChild(삭제할 자식 태그);
ulTag.removeChild(removeTarget);