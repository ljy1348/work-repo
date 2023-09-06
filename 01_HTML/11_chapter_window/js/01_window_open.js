// 새창 열기/닫기, 새창/새탭 금지(웹브라우저 설정)
function openWin() {
    let opt = "width=400, height=350"; //새창 크기
    myWin = window.open("notice.html", "doit", opt);
}
function closeWin() {
    myWin.close(); // 새창 열기 에서 생성된 객체를 사용해서 객체를 닫는다.
}