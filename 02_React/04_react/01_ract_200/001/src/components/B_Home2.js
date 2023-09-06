import React, { useState } from 'react'
// todo 화면 바인딩
// 변수의 값을 수정해도 수정된 값이 화면에 적용되지 않음
// 화면 바인딩 : 수정된 값을 화면에 나타내게 하는것 
function B_Home2() {
    // todo 변수를 정의하는 곳
    let hello = "안녕 하세요"; //일반 변수
    // 화면 바인딩 변수 : 리액트에서 값의 수정이 일어났을때
    //                   화면에 적용시켜주는 변수
    // hello는 일반 변수이기 때문에 값이 변해도 화면에 적용 안됨
    // element는 바인딩 변수이기 때문에 값이 변하면 화면에 적용됨.
    
    // let [변수명, 수정함수] = useState("값")
    const [element, setElement] = useState("안녕");

    // todo 함수 정의
    

    let myClick = () => {hello="안녕하세요2";};
    let myClick2 = () => {setElement("안녕2");};
    
    // todo 웹 브라우저 화면에 나오는 부분
  return (
    <div>
        {hello}
        <button onClick={myClick}>클릭</button>
        <br/>
        {element}
        <button onClick={myClick2}>클릭2</button>
        <br/>
    </div>
  )
}

export default B_Home2