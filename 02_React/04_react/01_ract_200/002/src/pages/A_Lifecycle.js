// 리액트 템플릿 : rfce
import React from 'react'
import { useEffect,useState } from 'react';

// 컴포넌트 함수 : 함수 컴포넌트
// 과거에는 클래스 컴포넌트로 만들었는데 복잡해서 함수 컴포넌트로 변경.
// es6 : ECMAScript(모던 자바스크립트)

//todo 리액트 컴포넌트이 생명주기(라이프 사이클) : 생성/수정
function A_Lifecycle() {
    // todo set변수명() : 수정함수(setter 함수)
    let [element, setElement] = useState(true);

    // todo 컴포넌트 생성 함수 : 자동 실행
    // todo 화면이 뜨자마자 실행됨
    useEffect(()=>{
        // 최초 1번만 화면이 뜰때 실행됨
        console.log("mount Call");
    },[]);

    // todo 컴포넌트 수정 함수 : 자동 실행
    // todo 변수의 값이 바뀔때 자동 실행됨
    useEffect(()=>{
        // 최초 1번만 화면이 뜰때 실행됨
        console.log("update Call : "+element);
    },[element]);

// useEffect(화살표함수()=>{감시 변수가 변경될 시 실행될 코드},[감시할 변수]);
    let handleClick = () => {
        if (element) {setElement(false);}
        else {setElement(true)}
    };    
    return (
    // html 태그는 <div></div> 안에 사용해야 한다.
    // 잘못된 사용 예 : <div></div><div></div> div가 2개라서 오류
    //                 <div></div><br/> br이 div밖으로 나와서 오류
    <div>
        <h2>This is Lifecycle</h2>
        <button onClick={handleClick}>클릭</button>
    </div>
  )
}

// 모듈화
export default A_Lifecycle