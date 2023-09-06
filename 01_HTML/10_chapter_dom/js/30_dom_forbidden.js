// 금칙어 예제
// 금칙어 === "test", 체크 대상 : input 태그
let nameInput = document.querySelector(".name-input");

// 금칙어를 화면에 출력할 태그 선택
let warningMessage = document.querySelector(".warning-message");

// 이벤트 : 클릭, 마우스 3개, 키보드 키입력(input)
// 사용법 : 태그.addEventListener("input", function(){함수 실행문}); <- 키 입력 되면 함수가 실행 된다.
nameInput.addEventListener("input", function() {
    // 금칙어 감시 코딩
    let inputStr = nameInput.value; //input창에 입력된 문자열
    // 입력된 값 -> 소문자로 변경 : .toLowerCase()
    let smallChar = inputStr.toLowerCase();

    // 조건문 : test 문자가 들어 왔는지 비교
    // 문자열.includes("체크문자") : 있으면 true, 없으면 false <- 문자열 비교
    if (smallChar.includes("test") == true) {
        warningMessage.innerHTML = "경고 : test는 입력할 수 없습니다."
    } else {
        warningMessage.innerHTML = ""
    }
})
