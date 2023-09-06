let content =document.querySelector("#content");

// 빨간색 클래스 추가
// todo 클래스 추가 : 태그.classList.add(추가할 클래스 이름);
content.classList.add("red");

// todo 클래스 교체 : 태그.classList.replace(바꾸는 대상 클래스 이름, 바꾸는 클래스 이름 )
content.classList.replace("red", "skyblue");

// todo 클래스 삭제 : 태그.classList.remove(삭제할 클래스 이름);
content.classList.remove("skyblue");

// todo 클래스 확인 : contains <- true or false로 리턴
let bResult =  content.classList.contains("skyblue");
console.log(bResult);

// todo 클래스가 있으면 삭제, 없으면 추가 : toggle()
content.classList.toggle("skyblue");





