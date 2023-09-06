// 예제 : 텍스트 에어리어 태그에 입력된 글자수를 출력하는 예제
let textarea = document.querySelector(".textarea");

let String_num = document.querySelector(".string_num");

// 키입력 : keyup(키에서 뗐을때), keydown(키를 눌렀을 때)
textarea.addEventListener("keyup", function() {
    // 글자수 체크 코딩
    let inputText = textarea.value; // 현재 입력된 값
    String_num.innerHTML = inputText.length;
})