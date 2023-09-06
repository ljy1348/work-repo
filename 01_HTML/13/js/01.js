// form input 태그 접근해서 디자인 적용

$(function() {
    // 1) 태그[속성] <- 해당 태그중 해당 속성이 있는 태그만 선택된다.
    // 
    $("#wrap a[target]").css({color : "#f00"});
    
    // 속성의 값 중 htts 로 시작(^) 되는 태그 선택
    $("#wrap a[href^=https]").css({color : "skyblue"});
    
})