// DOM 접근 함수 : querySelectorAll(css선택자)
// html 문서에서 (dom) 여러개를 선택하는 함수
// 사용법 : let 변수명 = document.querySelectorAll(css선택자);

let elements = document.querySelectorAll("ul li"); //여러개 li(배열)

// li 태그 여러개 : 반복문
for(let i = 0; i < elements.length; i++) {
    console.log(elements);
    document.querySelector("#output")
                    .innerHTML += elements[i].innerHTML+"<br>";
    // 줄바꿈
    // innerHTML == 태그와 태그 사이의 문자열(텍스트)
    // document.querySelector("#output").innerHTML = "<br>"
}