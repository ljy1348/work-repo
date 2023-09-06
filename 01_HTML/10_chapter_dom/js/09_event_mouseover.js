function changeText(event) {
// event.target == 현재 클릭한 태그
// 클릭하면 문자열 변경
event.target.innerHTML = "클릭하셨네요!";
}

function mouseOver(event) {
event.target.style.backgroundColor = "orange";
}

function mouseOut(event) {
    event.target.style.backgroundColor = "skyblue";
}

function h2out(event) {
    event.target.innerHTML = "클릭해 보세요!"
}