// 도형 조작
let myRect = document.querySelector("#rect");

// .addEventListener("속성", function(){})
// 속성 : click(마우스 클릭), mouseover(마우스 오버)... 등
myRect.addEventListener("mouseover", function(){
    // 마우스가 위로 올라가면 함수 실행
    // 배경색 : 녹색, 둥근 사각형 : 50%;
    myRect.style.backgroundColor = "green"
    myRect.style.borderRadius = "50%"

})
myRect.addEventListener("mouseout", function(){
    // 마우스가 밖으로 나가면 함수 실행
    // 배경색 : "", 둥근 사각형 : "";
    myRect.style.backgroundColor = ""
    myRect.style.borderRadius = ""

})