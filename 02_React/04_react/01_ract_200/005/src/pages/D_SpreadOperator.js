import React, { useEffect } from 'react'

function D_SpreadOperator() {
    // 화면이 뜰때 자동 실행되는 이벤트 함수
    useEffect(()=>{
    // ---연습---
    // let num = {
    //     name : "홍길동",
    //     email : "hong@daum.net"
    // }

    // console.log({name : "장길산"});
    // // num 객체의 name 값 수정
    // console.log({...num, name : "장길산"});
    // // 연습문제
    let num2 = {name : "", email : ""};
    // 원본 객체의 속성은 모두 유지한채 name: "임꺽정" 으로 바꾸세요
    num2 = {...num2, name:"임꺽정"};
    // console.log(num2);

    // 예제 2
    let num3 = {
        name : "홍길동",
        email : "hong@daum.net"
    };
    let attrValue = "hong@naver.com";
    num3 = {...num3, email : attrValue};
    // console.log(num3);

    // 예제3 : 변수를 속성명/속성값 2개에 사용해서 수정하기
    let num4 = {
        name : "홍길동",
        email : "hong@daum.net"
    };
    let attrValue2 =  "hong@naver.com";
    let attrName2 = "email";
    // 속성 명에 변수를 사용할 때에는 [변수명] <- 이렇게 사용하여야 한다.
    // [attrName2] == email 이라 email 의 값이 변경된다.
    num4 = {...num4, [attrName2]:attrValue2};
    // console.log(num4);

    // 연습문제 2
    // attrName3 에는 속성명 phone을 넣고
    // attrValue3 에는 속성값 010-5678-5678 들어감
    let num5 = {
        age : 15,
        phone : "010-1234-5978"
    };
    let attrName3 = "phone";
    let attrValue3 = "010-5678-5678";
    num5 = {...num5, [attrName3] : attrValue3};
    // console.log(num5);

    

    },[]);
  return (
    <div>
        
    </div>
  )
}

export default D_SpreadOperator