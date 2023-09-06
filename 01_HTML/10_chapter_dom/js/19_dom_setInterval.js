// 시계 예제 : 계속 시간이 흘러가는 예제
// 선택 함수
let clock = document.querySelector("#clock");

// 사용법 : setInterval ( 함수(), 갱신할 시간(밀리초 단위))
// 계속 갱신할 시간 마다 함수 반복 실행
setInterval(() => {
    let today = new Date();
    clock.innerHTML = today;
}, 1);