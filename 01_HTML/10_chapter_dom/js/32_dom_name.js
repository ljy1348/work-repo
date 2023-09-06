// 성 + 이름 출력하기
let familyText = document.querySelector("#familyText"); //성 
let firstText = document.querySelector("#firstText"); //이름

// 성 + 이름 출력할 위치 선택
let fullName = document.querySelector("#fullName");

// 이벤트 : 키 이력
// 성이 입력되면 fullName 출력하기
familyText.addEventListener("keyup", function(){
    fullName.innerHTML = familyText.value+firstText.value;
})
firstText.addEventListener("keyup", function(){
    fullName.innerHTML = familyText.value+firstText.value;
})