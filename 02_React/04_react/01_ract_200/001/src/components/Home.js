// 리액트 페이지 단축키 : rfce
// Home.js = 자식 컴포넌트, App.js = 부모 컴포넌트
import React from 'react'

function Home() {
  // 변수를 정의 하는 곳 : 여기
  let array = ["a","b","c"]; //일반변수
  // 리액트의 특징 : 변수값+html태그를 같이 사용이 가능하다.(JSX표현식)
  let input = "문자열 출력되나요?"; 
  // JSX 표현식
  let input2 = <b>문자열 출력 되나요?</b> ;
  // 함수 선언식 : function 함수명(){};
  // 함수 표현식 : let 함수명 = function() {};
  // 화살표 함수 : let 함수명 = () => {};
  // 화살표 함수 단축키 : nfn
  const test = () => {
    return "안녕하세요";
  };
  let naver = "http://naver.com"
  const myClick = () => { alert("클릭했어요!!!") }

  // 웹브라우저 화면에 표시되는 영역
  return (
    // 문자열 출력 : {"문자열"}
    <div>{input2}
    {/* 괄호 안에 숫자와 연산부호를 넣으면 계산된 값이 나온다. */}
    <div>{1*2+3}</div>
    {/* 문자열 붙이기도 가능하다 */}
    <div>{"abc"+"가나다"}</div>
    {/* 중괄호가 JSX 표현식 : {<태그>{"문자열"}</태그>} */}
    {<b>{"안녕하세요"}</b>}
    <br/>
    {/* 배열 출력 */}
    {["가","나","다"]}
    <br/>
    {[1,2,3]}
    <br/>
    {array}
    <br/>
    {/* 함수 출력 */}
    {test()}
    {/* 3항 연산자 : 조건식(축약형) */}
    {/* 사용법 : (조건식==true)? 참 : 거짓; */}
    <br/>
    {5>3 ? "크다":"작다"}
    <br/>
    {5<3 ? "크다":"작다"}
    <br/>
    {/* html 태그 속성에 {} 넣어보기 */}
    <a href={naver}>네이버</a>
    <br/>
    <button onClick={myClick}>클릭</button>
    <br/>
    {/* 자바스크립트 내장 함수 */}
    {console.log("출력되나요?")}
    <br/>
    {/* 오늘 요일 */}
    {new Date().getDate()+"일"}
    <br/>
    {new Date().getMonth()+"월"}
    <br/>
    {new Date().getHours()+"시"}
    <br/>
    {/* ---------------------------------------- */}
    {/* 화면에 출력 안되는 것 */}
    {/* boolean */}
    {true}
    <br/>
    {true+" a"}
    <br/>
    {/* 객체 출력 : x, 에러 발생 */}
    {/* 해결책 : 객체 -> 문자열 로 변경해서 출력 */}
    {/* {{name : "홍길동", email : "aaa@gmail.com"}} */}

    {/* 조건문 : if문 : x */}
    {/* 해결책 : 삼항연산자 사용 */}
    {/* {if (true) {return "true"}} */}

    {/* 반복문 : for문x*/}
    {/* 해결책 : map() 함수 가능 */}




    </div>
    

    
  )
}

export default Home